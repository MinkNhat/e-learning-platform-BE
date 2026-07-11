import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import { SocialProvider } from "src/core/enums/social-provider.enum";
import type { ISocialProfile } from "../interfaces/social-profile.interface";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private configService: ConfigService) {
        super({
            clientID: configService.get<string>('GOOGLE_CLIENT_ID') || '',
            clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET') || '',
            callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL') || '',
            scope: ['email', 'profile'],
        });
    }

    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
    ) {
        const email = profile.emails?.[0]?.value || profile._json?.email;
        const isVerified = profile.emails?.[0]?.verified ?? profile._json?.email_verified;

        if (!email || isVerified === false) {
            throw new UnauthorizedException('Google email is not verified');
        }

        const user: ISocialProfile = {
            provider: SocialProvider.GOOGLE,
            providerId: profile.id,
            email,
            name: profile.displayName || profile._json?.name || email,
            avatar: profile.photos?.[0]?.value || profile._json?.picture,
        };

        done(null, user);
    }
}
