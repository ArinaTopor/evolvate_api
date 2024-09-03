import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @ApiProperty({ description: "Никнейм" })
    readonly username: string;
    @IsString()
    @IsEmail( {}, {message: "Некорректный email"} )
    @ApiProperty({ description: "Почта" })
    readonly email: string;
    @IsString()
    @ApiProperty({ description: "Пароль" })
    readonly password_hash: string;	
}
