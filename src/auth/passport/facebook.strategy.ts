import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";
import { SocialProvider } from "src/core/enums/social-provider.enum";
import type { ISocialProfile } from "../interfaces/social-profile.interface";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(private configService: ConfigService) {
        super({
            clientID: configService.get<string>('FACEBOOK_CLIENT_ID') || '',
            clientSecret: configService.get<string>('FACEBOOK_CLIENT_SECRET') || '',
            callbackURL: configService.get<string>('FACEBOOK_CALLBACK_URL') || '',
            profileFields: ['id', 'displayName', 'emails', 'photos'],
            scope: ['email'],
        });
    }

    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any, info?: any) => void,
    ) {
        const email = profile.emails?.[0]?.value;

        if (!email) {
            throw new UnauthorizedException('Facebook account does not provide an email');
        }

        const user: ISocialProfile = {
            provider: SocialProvider.FACEBOOK,
            providerId: profile.id,
            email,
            name: profile.displayName || email,
            avatar: profile.photos?.[0]?.value,
        };

        done(null, user);
    }
}
