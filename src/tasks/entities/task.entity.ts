import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { TaskTag } from "./tag.entity";

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

    @OneToOne(() => TaskTag, taskTag => taskTag.name, {cascade: true}) 
    @JoinColumn()
    tag_: TaskTag;
}
