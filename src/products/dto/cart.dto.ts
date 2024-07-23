import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCartDto {
    @IsNumber()
    @ApiProperty({ description: "ID пользователя" })
    readonly user_id: number;
    @IsNumber()
    @ApiProperty({ description: "ID продукта" })
    readonly product_id: number;
    @IsNumber()
    @ApiProperty({ description: "ID варианта" })
    readonly variant_id: number;
}