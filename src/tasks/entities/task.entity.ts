import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinTable, OneToMany } from "typeorm";
import { TaskTag } from "./tag.entity";
import { TaskUser } from "./task_user";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Task {
    @ApiProperty({ description: "Id" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: "Id типа задания" })
    @Column()
    type_id: number;

    @ApiProperty({ description: "Id категории" })
    @Column()
    tag_id: number;

    @ApiProperty({ description: "Одиночное/командное задание" })
    @Column()
    is_solo: number;

    @ApiProperty({ description: "Название" })
    @Column()
    name: string;

    @ApiProperty({ description: "Описание" })
    @Column()
    description: string;

    @ApiProperty({ description: "Статус" })
    @Column()
    status: number;
    
    @ApiProperty({ description: "Счет" })
    @Column()
    score: number;

    @OneToOne(() => TaskTag, taskTag => taskTag.id) 
    @JoinTable()
    tag: TaskTag;

    @OneToMany(type => TaskUser, taskUser => taskUser.task)
    task_user: TaskUser[];
}
