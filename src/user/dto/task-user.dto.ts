import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UserTaskDto {
    @ApiPropertyOptional({ description:"Изображение" })
    image: any;
    @ApiPropertyOptional({ description:"Видео" })
    video: any;
    @ApiPropertyOptional({ description:"Сообщение" })
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
    @ApiPropertyOptional({ description:"Id пользователя" })
    emails: [string];
}