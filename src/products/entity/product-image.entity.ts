import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Product } from './products.entity';


@Entity()
export class ProductImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    image_thumb: string;

    @ManyToOne(() => Product, (product)=> product.image)
    @JoinColumn(([
        { name: "product_id" }
    ]))
    product: Product;
}