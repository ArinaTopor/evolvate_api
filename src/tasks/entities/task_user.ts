import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable, ManyToOne } from "typeorm";
import { Task } from "./task.entity";

@Entity()
export class TaskUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    video: string;

    @Column()
    message: string; 

    @Column()
    status: string;

    @Column()
    task_id: number;

    @ManyToOne(() => Task, (task)=> task.task_user)
    @JoinColumn(([
        { name: "task_id" }
    ]))
    task: Task;
}