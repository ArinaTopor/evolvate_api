import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductImage } from './product-image.entity';
import { Variant } from './variant.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
    @ApiProperty({ description: "ID" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: "Название" })
    @Column()
    name: string;

    @ApiProperty({ description: "Описание" })
    @Column()
    description: string;

    @ApiProperty({ description: "Баланс" })
    @Column()
    balance: number;

    @ApiProperty({ description: "Цена" })
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