import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskTag {
    @ApiProperty({ description:"Id" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description:"Название" })
    @Column()
    name: string;

    @ApiProperty({ description:"Изображение" })
    @Column()
    image: string;

}