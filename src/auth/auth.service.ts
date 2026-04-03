import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import ms from 'ms';
import { IUser } from 'src/users/users.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(username);
        if (user && this.userService.isValidPassword(pass, user.password)) {
            return user;
        }
        return null;
    }

    async login (user: IUser, response: Response) {
        const { _id, name, email, role } = user;
        const payload = { 
            sub: "token login",
            iss: "from server",
            _id,
            name,
            email,
            role 
        };

        const refreshToken = this.createRefreshToken(payload);
        await this.userService.updateUserToken(refreshToken, _id);
        response.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            maxAge: ms(this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES_IN')) as any,
        });
        
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                _id,
                name,
                email,
                role
            }
        };
    }

    createRefreshToken = (payload) => {
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            expiresIn: ms(this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRES_IN') as any) as any / 1000,
        });
        return refreshToken;
    }

    refreshToken = async (refreshToken: string, response: Response) => {
        try {
            this.jwtService.verify(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            });

            const user = await this.userService.findOneByRefreshToken(refreshToken);
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
                await this.userService.updateUserToken(refreshToken, _id.toString());

                response.clearCookie('refresh_token');
                response.cookie('refresh_token', refreshToken, {
                    httpOnly: true,
                    maxAge: ms(this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES_IN')) as any,
                });
                
                return {
                    access_token: this.jwtService.sign(payload),
                    user: {
                        _id,
                        name,
                        email,
                        role
                    }
                };
            } else {
                throw new BadRequestException('Refresh token is invalid or expired');
            }

        } catch(error) {
            throw new BadRequestException('Refresh token is invalid or expired');
        }
    }
}
