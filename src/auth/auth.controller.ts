import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, User } from "src/core/decorators/customize";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { Request, Response } from "express";
import { IUser } from "src/modules/users/users.interface";
import { RegisterUserDto } from "src/modules/users/dto/create-user.dto";
import { RolesService } from "src/modules/roles/roles.service";
import { GoogleAuthGuard } from "./guards/google-auth.guard";
import { FacebookAuthGuard } from "./guards/facebook-auth.guard";
import type { ISocialProfile } from "./interfaces/social-profile.interface";
import { UsersService } from "src/modules/users/users.service";

@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService,
        private rolesService: RolesService,
        private usersService: UsersService
    ) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(
        @Req() req,
        @Res({ passthrough: true }) response: Response
    ) {
        return this.authService.login(req.user, response);
    }

    @Public()
    @Post('/register')
    async register(@Body() user: RegisterUserDto) {
        return this.authService.register(user);
    }

    @Public()
    @UseGuards(GoogleAuthGuard)
    @Get('/google')
    async googleLogin() {}

    @Public()
    @UseGuards(GoogleAuthGuard)
    @Get('/google/callback')
    async googleCallback(
        @Req() req: Request & { user: ISocialProfile },
        @Res() response: Response
    ) {
        try {
            const result = await this.authService.socialLogin(req.user, response);
            const redirectUrl = this.authService.getSocialLoginRedirectUrl('google');

            if (redirectUrl) {
                return response.redirect(redirectUrl);
            }

            return response.json(result);
        } catch (error) {
            const message = this.getSocialLoginErrorMessage(error);
            const redirectUrl = this.authService.getSocialLoginErrorRedirectUrl(message, 'google');

            if (redirectUrl) {
                return response.redirect(redirectUrl);
            }

            return response.status(400).json({ message });
        }
    }

    @Public()
    @UseGuards(FacebookAuthGuard)
    @Get('/facebook')
    async facebookLogin() {}

    @Public()
    @UseGuards(FacebookAuthGuard)
    @Get('/facebook/callback')
    async facebookCallback(
        @Req() req: Request & { user: ISocialProfile },
        @Res() response: Response
    ) {
        try {
            const result = await this.authService.socialLogin(req.user, response);
            const redirectUrl = this.authService.getSocialLoginRedirectUrl('facebook');

            if (redirectUrl) {
                return response.redirect(redirectUrl);
            }

            return response.json(result);
        } catch (error) {
            const message = this.getSocialLoginErrorMessage(error);
            const redirectUrl = this.authService.getSocialLoginErrorRedirectUrl(message, 'facebook');

            if (redirectUrl) {
                return response.redirect(redirectUrl);
            }

            return response.status(400).json({ message });
        }
    }

    private getSocialLoginErrorMessage(error: unknown) {
        if (error instanceof Error && error.message) {
            return error.message;
        }

        return 'Đăng nhập mạng xã hội thất bại.';
    }
    
    @Get('/account')
    async getProfile(@User() user: IUser) {
        const temp = await this.rolesService.findOne(user.role._id) as any;
        const currentUser = await this.usersService.findOne(user._id) as any;

        user.permissions = temp.permissions;
        user.authProvider = currentUser?.authProvider ?? user.authProvider;
        user.avatar = currentUser?.avatar ?? user.avatar ?? null;

        return { user };
    }

    @Public()
    @Get('/refresh')
    refreshToken(
        @Req() request: Request, 
        @Res({ passthrough: true }) response: Response
    ) {
        const refreshToken = request.cookies['refresh_token'];
        return this.authService.refreshToken(refreshToken, response); 
    }

    @Post('/logout')
    logout(
        @Res({passthrough: true}) response: Response,
        @User() user:IUser
    ) {
        return this,this.authService.logout(response, user);
    }
}
