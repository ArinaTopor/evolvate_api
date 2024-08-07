import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './products.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class ProductImage {
    @ApiProperty({ description: "ID" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: "Изображение" })
    @Column()
    image: string;

    @ManyToOne(() => Product, (product)=> product.image)
    @JoinColumn(([
        { name: "product_id" }
    ]))
    product: Product;
}