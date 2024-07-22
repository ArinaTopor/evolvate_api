import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Product } from './products.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Cart {
    @ApiProperty({example: "", description:"Id"})
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({example: "", description:"ID пользователя"})
    @Column()
    user_id: number;

    @ApiProperty({example: "", description:"ID продукта"})
    @Column()
    product_id: number;

    @ApiProperty({example: "", description:"ID варианта"})
    @Column()
    variant_id: number;

}