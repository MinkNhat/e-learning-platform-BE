import { createParamDecorator, ExecutionContext, SetMetadata } from "@nestjs/common";

// set public routes decorator
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// set message response decorator
export const RESPONSE_MESSAGE = 'responseMessage';
export const ResponseMessage = (message: string) => SetMetadata(RESPONSE_MESSAGE, message);

// get user from request decorator
export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    }
);