import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UserTaskDto {
    @ApiProperty({ description:"Изображение" })
    image: any;
    @ApiProperty({ description:"Видео" })
    video: any;
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
    @ApiPropertyOptional({ description:"Почты соавторов" })
    emails: [string];
}