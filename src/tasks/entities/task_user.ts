import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable, ManyToOne } from "typeorm";
import { Task } from "./task.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class TaskUser {
    @ApiProperty({example: "", description:"Id"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "", description:"Изображение"})
    @Column()
    image: string;

    @ApiProperty({example: "", description:"Видео"})
    @Column()
    video: string;

    @ApiProperty({example: "", description:"Сообщение"})
    @Column()
    message: string; 

    @ApiProperty({example: "", description:"Статус"})
    @Column()
    status: string;

    @ApiProperty({example: "", description:"Id задания"})
    @Column()
    task_id: number;

    @ManyToOne(() => Task, (task)=> task.task_user)
    @JoinColumn(([
        { name: "task_id" }
    ]))
    task: Task;
}