import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, } from 'typeorm';
import { ProductImage } from './product-image.entity';
import { Variant } from './variant.entity';
import { ApiProperty } from '@nestjs/swagger';



@Entity()
export class Product {
    @ApiProperty({example: "", description:"ID"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "", description:"Название"})
    @Column()
    name: string;

    @ApiProperty({example: "", description:"Описание"})
    @Column()
    description: string;

    @ApiProperty({example: "", description:"Баланс?"})
    @Column()
    balance: number;

    @ApiProperty({example: "", description:"Цена"})
    @Column()
    price: number;

    @ApiProperty({example: "", description:"Название вариантов"})
    @Column()
    variant_name: string;

    @OneToMany(type => ProductImage, image => image.product)
    image: ProductImage[];

    @OneToMany(type => Variant, variant => variant.product)
    variant: Variant[];

}