import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './products.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Variant {
    @ApiProperty({ description: "ID" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: "Значение" })
    @Column()
    value: string;

    @ManyToOne(() => Product, (product)=> product.variant)
    @JoinColumn(([
        { name: "product_id" }
    ]))
    product: Product;
}