import { Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
    getAuthenticateOptions(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const redirectUri = request.query?.redirect_uri;

        if (typeof redirectUri === 'string') {
            return { state: redirectUri };
        }

        return {};
    }
}
