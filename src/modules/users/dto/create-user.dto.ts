import { IsEmail, IsEnum, IsNotEmpty, IsOptional, Matches, MaxLength } from "class-validator";
import { RoleName } from "src/core/enums/roles.enum";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    @MaxLength(11)
    @Matches(/^(\\+84|0)[0-9]{9,10}$/, { message: 'Phone number must start with +84 or 0, and have 10-11 digits' })
    phone: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEnum(RoleName, { message: `Role must be one of values: ${Object.values(RoleName).join(', ')}` })
    role: RoleName;
}

export class RegisterUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}
