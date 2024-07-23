import { ApiProperty } from "@nestjs/swagger";
import { Profile } from "src/profile/entites/profile.entity";

export class CreateUserDto {
    @ApiProperty({example: "", description:"Пароль"})
    readonly password_hash: string;	
    @ApiProperty({example: "", description:"Почта"})
    readonly email: string;
}
