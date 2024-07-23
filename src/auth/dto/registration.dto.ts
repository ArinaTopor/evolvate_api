import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMobilePhone, IsNumber, IsString } from "class-validator";

export class CreateRegistrationDto {
    @IsString()
    @ApiProperty({ description: "Ник" })
    readonly username: string;
    @IsString()
    @ApiProperty({ description: "Пароль" })
    readonly password: string;
    @IsString()
    @ApiProperty({ description: "Фамилия" })
    readonly last_name: string; 
    @IsString()
    @ApiProperty({ description: "Имя" })
    readonly first_name: string;
    @IsString()
    @ApiProperty({ description: "Отчество" })
    readonly middle_name: string;
    @IsString()
    @IsEmail()
    @ApiProperty({ description: "Почта" })
    readonly email: string; 
    @IsString()
    @IsMobilePhone("ru-RU")
    @ApiProperty({ description: "Телефон" })
    readonly phone: string;
    @IsNumber()
    @ApiProperty({ description: "ID подразделения" })
    readonly division_id: number;
    @IsString()
    @ApiProperty({ description: "Название подразделения" })
    readonly division: string;
    @IsString()
    @ApiProperty({ description: "Должность" })
    readonly position: string;
    readonly ip: string;
    readonly user_agent: string;
}