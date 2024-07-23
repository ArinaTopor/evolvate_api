import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLoginDto {
    @IsString()
    @ApiProperty({ description: "Почта" })
    readonly email: string; 
    @IsString()
    @ApiProperty({ description: "Пароль" })
    readonly password: string;
}