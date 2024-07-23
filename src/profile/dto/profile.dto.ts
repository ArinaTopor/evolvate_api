import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMobilePhone, IsNumber, isPhoneNumber, IsString } from "class-validator";

export class CreateProfileDto {
	@IsNumber()
    @ApiProperty({ description: "Id пользователя" })
    readonly user_id: number;
	@IsString()
	@ApiProperty({ description: "Фамилия" })
	readonly last_name: string;
	@IsString()
	@ApiProperty({ description: "Имя" })
	readonly first_name: string;
	@IsString()
	@IsEmail()
	@ApiProperty({ description: "Почта" })
	readonly email: string;
	@IsString()
	@IsMobilePhone("ru-RU")
	@ApiProperty({ description: "Телефон" })
	readonly phone: string;
	@IsNumber()
	@ApiProperty({ description: "Id подразделения" })
	readonly division_id: number;
	@IsString()
	@ApiProperty({ description: "Подразделение" })
	readonly division: string;
	@IsString()
	@ApiProperty({ description: "Должность" })
	readonly position: string;
}