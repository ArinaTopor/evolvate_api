import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from 'typeorm';
import { ProductImage } from './product-image.entity';
import { Variant } from './variant.dto';


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    balance: number;

    @Column()
    price: number;

    @Column()
    variant_name: string;

    @OneToMany(type => ProductImage, image => image.product)
    image: ProductImage[];

    @OneToMany(type => Variant, variant => variant.product)
    variant: Variant[];
}