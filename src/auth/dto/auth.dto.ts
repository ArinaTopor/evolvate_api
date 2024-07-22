import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty({example: "", description:"Ник"})
    readonly username: string;
    @ApiProperty({example: "", description:"Пароль"})
    readonly password_hash: string;
    @ApiProperty({example: "", description:"Фамилия"})
    readonly last_name: string; 
    @ApiProperty({example: "", description:"Имя"})
    readonly first_name: string;
    @ApiProperty({example: "", description:"Отчество"})
    readonly middle_name: string;
    @ApiProperty({example: "", description:"Почта"})
    readonly email: string; 
    @ApiProperty({example: "", description:"Телефон"})
    readonly phone: string;
    @ApiProperty({example: "", description:"ID подразделения"})
    readonly division_id: number;
    @ApiProperty({example: "", description:"Название подразделения"})
    readonly division: string;
    @ApiProperty({example: "", description:"Должность"})
    readonly position: string;
}