import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, User } from "src/core/decorators/customize";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { Request, Response } from "express";
import { IUser } from "src/modules/users/users.interface";
import { RegisterUserDto } from "src/modules/users/dto/create-user.dto";
import { RolesService } from "src/modules/roles/roles.service";

@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService,
        private rolesService: RolesService
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
    
    @Get('/account')
    async getProfile(@User() user: IUser) {
        const temp = await this.rolesService.findOne(user.role._id) as any;
        user.permissions = temp.permissions;
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
