import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity()
export class Division {
    @ApiProperty({example: "", description:"Id"})
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({example: "", description:"Название"})
    @Column()
    name: string;
}