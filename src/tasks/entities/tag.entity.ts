import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskTag {
    @ApiProperty({example: "", description:"Id"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "", description:"Название"})
    @Column()
    name: string;

    @ApiProperty({example: "", description:"Изображение"})
    @Column()
    image: string;

}