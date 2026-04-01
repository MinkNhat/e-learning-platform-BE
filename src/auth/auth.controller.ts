import { Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, User } from "src/decorator/customize";
import { LocalAuthGuard } from "./local-auth.guard";
import { Response } from "express";
import { IUser } from "src/users/users.interface";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(
        @Req() req,
        @Res({ passthrough: true }) response: Response
    ) {
        return this.authService.login(req.user, response);
    }
    
    @Get('/account')
    getProfile(@User() user: IUser) {
        return user;
    }
}
