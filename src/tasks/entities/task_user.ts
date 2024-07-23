import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Task } from "./task.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class TaskUser {
    @ApiProperty({ description: "Id" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: "Изображение" })
    @Column()
    image: string;

    @ApiProperty({ description: "Видео" })
    @Column()
    video: string;

    @ApiProperty({ description: "Сообщение" })
    @Column()
    message: string; 

    @ApiProperty({ description: "Статус" })
    @Column()
    status: number;

    @ApiProperty({ description: "Id задания" })
    @Column()
    task_id: number;

    @ManyToOne(() => Task, (task)=> task.task_user)
    @JoinColumn(([
        { name: "task_id" }
    ]))
    task: Task;
}