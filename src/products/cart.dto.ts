import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
    @ApiProperty({example: "", description:"ID пользователя"})
    readonly user_id: number;
    @ApiProperty({example: "", description:"ID продукта"})
    readonly product_id: number;
    @ApiProperty({example: "", description:"ID варианта"})
    readonly variant_id: number;
}