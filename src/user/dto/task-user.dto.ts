import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UserTaskDto {
    @ApiProperty({ description:"Изображение" })
    image: string;
    @ApiProperty({ description:"Видео" })
    video: string;
    @ApiProperty({ description:"Сообщение" })
    message: string; 
    @IsNumber()
    @ApiProperty({ description:"Статус" })
    status: number;
    @IsNumber()
    @ApiProperty({ description:"Id задания" })
    task_id: number;
    @IsNumber()
    @ApiProperty({ description:"Id пользователя" })
    user_id: number;
    @ApiProperty({ description:"Id пользователя" })
    emails: [string];
}