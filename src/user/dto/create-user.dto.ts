import { ApiProperty } from "@nestjs/swagger";
import { Profile } from "src/profile/entites/profile.entity";

export class CreateUserDto {
    @ApiProperty({example: "", description:"Никнейм"})
    readonly username: string;
    @ApiProperty({example: "", description:"Ключ"})
    readonly auth_key: string;
    @ApiProperty({example: "", description:"Пароль"})
    readonly password_hash: string;	
    @ApiProperty({example: "", description:"Почта"})
    readonly email: string;
}
