import { SocialProvider } from "src/core/enums/social-provider.enum";

export interface ISocialProfile {
    provider: SocialProvider;
    providerId: string;
    email: string;
    name: string;
    avatar?: string;
}
