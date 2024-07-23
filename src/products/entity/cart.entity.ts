import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Cart {
    @ApiProperty({ description: "Id" })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: "ID пользователя" })
    @Column()
    user_id: number;

    @ApiProperty({ description: "ID продукта" })
    @Column()
    product_id: number;

    @ApiProperty({ description: "ID варианта" })
    @Column()
    variant_id: number;

}