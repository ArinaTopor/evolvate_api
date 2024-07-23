import { ApiProperty } from "@nestjs/swagger";

export class CreateLoginDto{
    @ApiProperty({example: "", description:"Почта"})
    readonly email: string; 
    @ApiProperty({example: "", description:"Пароль"})
    readonly password: string;
}