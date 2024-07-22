import { ApiProperty } from "@nestjs/swagger";

export class UserTaskDto{
    @ApiProperty({example: "", description:"Id"})
    id: number;
    @ApiProperty({example: "", description:"Изображение"})
    image: string;
    @ApiProperty({example: "", description:"Видео"})
    video: string;
    @ApiProperty({example: "", description:"Сообщение"})
    message: string; 
    @ApiProperty({example: "", description:"Статус"})
    status: string;
    @ApiProperty({example: "", description:"Id задания"})
    task_id: number;
}