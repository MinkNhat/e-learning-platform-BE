import { SocialProvider } from "src/core/enums/social-provider.enum";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    authProvider?: SocialProvider;
    role: {
        _id: string;
        name: string;
    };
    avatar?: string;
    permissions?: {
        _id: string;
        name: string;
        apiPath: string;
        method: string;
        module: string;
    }[];
}
