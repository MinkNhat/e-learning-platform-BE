import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import ms from 'ms';
import { RolesService } from 'src/modules/roles/roles.service';
import { RegisterUserDto } from 'src/modules/users/dto/create-user.dto';
import { IUser } from 'src/modules/users/users.interface';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private rolesService: RolesService 
    ) {}

    validateUser = async (username: string, pass: string): Promise<any> => {
        const user = await this.usersService.findOneByEmail(username);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid === true) {
                const userRole = user.role as unknown as { _id: string; name: string }
                const temp = await this.rolesService.findOne(userRole._id);

                const objUser = {
                    ...user.toObject(),
                    permissions: temp?.permissions ?? []
                }

                return objUser;
            }
        }
        return null;
    }

    login = async (user: IUser, response: Response) => {
        const { _id, name, email, role, permissions } = user;
        const payload = { 
            sub: "token login",
            iss: "from server",
            _id,
            name,
            email,
            role
        };

        const refreshToken = this.createRefreshToken(payload);
        await this.usersService.updateUserToken(refreshToken, _id);

        response.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            maxAge: ms(this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES')) as any,
        });
        
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                _id,
                name,
                email,
                role,
                permissions
            }
        };
    }

    register = async (user: RegisterUserDto) => {
        const newUser = await this.usersService.register(user);
        return {
            _id: newUser._id,
            email: newUser.email,
            createdAt: newUser.createdAt
        }
    }

    createRefreshToken = (payload) => {
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            expiresIn: ms(this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES')) as any / 1000,
        });
        return refreshToken;
    }

    refreshToken = async (refreshToken: string, response: Response) => {
        try {
            this.jwtService.verify(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            });

            const user = await this.usersService.findOneByRefreshToken(refreshToken);
            if(user) {
                const { _id, name, email, role } = user;
                const payload = { 
                    sub: "token refresh",
                    iss: "from server",
                    _id,
                    name,
                    email,
                    role 
                };

                const refreshToken = this.createRefreshToken(payload);
                await this.usersService.updateUserToken(refreshToken, _id.toString());

                const userRole = user.role as unknown as {_id: string, name: string};
                const temp = await this.rolesService.findOne(userRole._id);

                response.clearCookie('refresh_token');
                response.cookie('refresh_token', refreshToken, {
                    httpOnly: true,
                    maxAge: ms(this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES')) as any,
                });
                
                return {
                    access_token: this.jwtService.sign(payload),
                    user: {
                        _id,
                        name,
                        email,
                        role,
                        permissions: temp?.permissions ?? []
                    }
                };
            } else {
                throw new BadRequestException('Refresh token is invalid or expired');
            }

        } catch(error) {
            throw new BadRequestException('Refresh token is invalid or expired');
        }
    }

    logout = async (response: Response, user: IUser) => {
        await this.usersService.updateUserToken("", user._id);
        response.clearCookie('refresh_token');
        return 'Logout successful';
    }
}
