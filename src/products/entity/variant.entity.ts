import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Product } from './products.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Variant {
    @ApiProperty({example: "", description:"ID"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "", description:"Значение"})
    @Column()
    value: string;

    @ManyToOne(() => Product, (product)=> product.variant)
    @JoinColumn(([
        { name: "product_id" }
    ]))
    product: Product;
}