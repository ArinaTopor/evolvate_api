import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable, OneToMany } from "typeorm";
import { TaskTag } from "./tag.entity";
import { TaskUser } from "./task_user";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type_id: number;

    @Column()
    tag_id: number;

    @Column()
    is_solo: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: number;

    @Column()
    score: number;

    @OneToOne(() => TaskTag, taskTag => taskTag.id) 
    @JoinTable()
    tag: TaskTag;

    @OneToMany(type => TaskUser, taskUser => taskUser.task)
    task_user: TaskUser[];
}
