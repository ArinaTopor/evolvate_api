import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Division {
    @ApiProperty({ description: "Id" })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: "Название" })
    @Column()
    name: string;
}