import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';


@Entity()
export class Division {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
}