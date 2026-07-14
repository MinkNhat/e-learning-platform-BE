import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { Response } from 'express';
import ms from 'ms';
import { RolesService } from 'src/modules/roles/roles.service';
import { RegisterUserDto } from 'src/modules/users/dto/create-user.dto';
import { IUser } from 'src/modules/users/users.interface';
import { UsersService } from 'src/modules/users/users.service';
import { ISocialProfile } from './interfaces/social-profile.interface';
import { SocialProvider } from 'src/core/enums/social-provider.enum';

@Injectable()
export class AuthService {
    private readonly googleOAuthClient = new OAuth2Client();

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

    login = async (user: IUser, response: Response, options?: { includeRefreshToken?: boolean }) => {
        const { _id, name, email, authProvider, role, avatar, permissions } = user;
        const payload = { 
            sub: "token login",
            iss: "from server",
            _id,
            name,
            email,
            authProvider,
            role,
            avatar
        };

        const refreshToken = this.createRefreshToken(payload);
        await this.usersService.updateUserToken(refreshToken, _id);

        response.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            maxAge: ms(this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES')) as any,
        });
        
        const result: any = {
            access_token: this.jwtService.sign(payload),
            user: {
                _id,
                name,
                email,
                authProvider,
                role,
                avatar,
                permissions
            }
        };

        if (options?.includeRefreshToken) {
            result.refresh_token = refreshToken;
        }

        return result;
    }

    register = async (user: RegisterUserDto) => {
        const newUser = await this.usersService.register(user);
        return {
            _id: newUser._id,
            email: newUser.email,
            createdAt: newUser.createdAt
        }
    }

    socialLogin = async (profile: ISocialProfile, response: Response) => {
        const user = await this.usersService.findOrCreateSocialUser(profile);
        const userRole = user.role as unknown as { _id: string; name: string }
        const temp = await this.rolesService.findOne(userRole._id);

        return this.login({
            ...user.toObject(),
            permissions: temp?.permissions as any ?? []
        }, response);
    }

    googleMobileLogin = async (idToken: string, response: Response) => {
        const audiences = [
            this.configService.get<string>('GOOGLE_MOBILE_CLIENT_ID'),
            this.configService.get<string>('GOOGLE_ANDROID_CLIENT_ID'),
            this.configService.get<string>('GOOGLE_IOS_CLIENT_ID'),
            this.configService.get<string>('GOOGLE_WEB_CLIENT_ID'),
            this.configService.get<string>('GOOGLE_CLIENT_ID'),
        ].filter(Boolean) as string[];

        if (!audiences.length) {
            throw new BadRequestException('Google client id is not configured');
        }

        let payload;
        try {
            const ticket = await this.googleOAuthClient.verifyIdToken({
                idToken,
                audience: audiences,
            });
            payload = ticket.getPayload();
        } catch {
            throw new UnauthorizedException('Google token is invalid');
        }

        if (!payload?.sub || !payload.email || payload.email_verified !== true) {
            throw new UnauthorizedException('Google email is not verified');
        }

        const profile: ISocialProfile = {
            provider: SocialProvider.GOOGLE,
            providerId: payload.sub,
            email: payload.email,
            name: payload.name || payload.email,
            avatar: payload.picture,
        };

        const user = await this.usersService.findOrCreateSocialUser(profile);
        const userRole = user.role as unknown as { _id: string; name: string };
        const temp = await this.rolesService.findOne(userRole._id);

        return this.login({
            ...user.toObject(),
            permissions: temp?.permissions as any ?? []
        }, response, { includeRefreshToken: true });
    }

    getSocialLoginRedirectUrl = (provider?: string) => {
        const redirectUrl = this.configService.get<string>('SOCIAL_LOGIN_SUCCESS_REDIRECT_URL');

        if (!redirectUrl) return null;

        try {
            const url = new URL(redirectUrl);
            url.searchParams.set('status', 'success');
            if (provider) {
                url.searchParams.set('provider', provider);
            }
            return url.toString();
        } catch {
            return null;
        }
    }

    getSocialLoginErrorRedirectUrl = (message: string, provider?: string) => {
        const redirectUrl = this.configService.get<string>('SOCIAL_LOGIN_SUCCESS_REDIRECT_URL');

        if (!redirectUrl) return null;

        try {
            const url = new URL(redirectUrl);
            url.searchParams.set('error', message);
            if (provider) {
                url.searchParams.set('provider', provider);
            }
            return url.toString();
        } catch {
            return null;
        }
    }

    createRefreshToken = (payload) => {
        const refreshTokenSecret =
            this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET')
            || this.configService.get<string>('JWT_REFRESH_SECRET');

        const refreshToken = this.jwtService.sign(payload, {
            secret: refreshTokenSecret,
            expiresIn: ms(this.configService.get<number>('JWT_REFRESH_TOKEN_EXPIRES')) as any / 1000,
        });
        return refreshToken;
    }

    refreshToken = async (refreshToken: string, response: Response) => {
        try {
            const refreshTokenSecret =
                this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET')
                || this.configService.get<string>('JWT_REFRESH_SECRET');

            this.jwtService.verify(refreshToken, {
                secret: refreshTokenSecret,
            });

            const user = await this.usersService.findOneByRefreshToken(refreshToken);
            if(user) {
                const { _id, name, email, authProvider, role, avatar } = user;
                const payload = { 
                    sub: "token refresh",
                    iss: "from server",
                    _id,
                    name,
                    email,
                    authProvider,
                    role,
                    avatar
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
                        authProvider,
                        role,
                        avatar,
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
