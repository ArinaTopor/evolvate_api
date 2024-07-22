import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Product } from './products.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class ProductImage {
    @ApiProperty({example: "", description:"ID"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "", description:"Изображение"})
    @Column()
    image: string;

    @ApiProperty({example: "", description:"Изображение"})
    @Column()
    image_thumb: string;

    @ManyToOne(() => Product, (product)=> product.image)
    @JoinColumn(([
        { name: "product_id" }
    ]))
    product: Product;
}