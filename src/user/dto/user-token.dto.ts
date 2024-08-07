import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserTokenDto {
    @IsString()
    @ApiProperty({ description: "Id пользователя" })
    readonly user_id: number;
    @IsString()
    @ApiProperty({ description: "Refresh Token"})
    readonly token: string;
    @IsString()
    @ApiProperty({ description: "Ip пользователя" })
    readonly ip: string;
    @IsString()
    @ApiProperty({ description: "Идентификационная строка клиентского приложения" })
    readonly user_agent: string;

}