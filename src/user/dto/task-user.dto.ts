import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { FileSystemStoredFile } from "nestjs-form-data";

export class UserTaskDto {
    @ApiProperty({ description:"Изображение" })
    image: any;
    @ApiProperty({ description:"Видео" })
    video: any;
    @ApiProperty({ description:"Сообщение" })
    message: string; 
    @ApiProperty({ description:"Статус" })
    status: number;
    @ApiProperty({ description:"Id задания" })
    task_id: number;
    @ApiProperty({ description:"Id пользователя" })
    user_id: number;
    @ApiPropertyOptional({ description:"Почты соавторов" })
    emails: [string];
}