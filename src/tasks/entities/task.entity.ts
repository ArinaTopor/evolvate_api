import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable, OneToMany } from "typeorm";
import { TaskTag } from "./tag.entity";
import { TaskUser } from "./task_user";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Task {
    @ApiProperty({example: "", description:"Id"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "", description:"Id типа задания"})
    @Column()
    type_id: number;

    @ApiProperty({example: "", description:"Id категории"})
    @Column()
    tag_id: number;

    @Column()
    is_solo: number;

    @ApiProperty({example: "", description:"Название"})
    @Column()
    name: string;

    @ApiProperty({example: "", description:"Описание"})
    @Column()
    description: string;

    @ApiProperty({example: "", description:"Статус"})
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
