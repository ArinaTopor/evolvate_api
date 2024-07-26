import { Controller, Get, Post, Body, UseGuards, UsePipes } from '@nestjs/common';
import { ProductService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCartDto } from './dto/cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('Продукты')
@Controller('products')
export class ProductController {

  constructor(private readonly profileService: ProductService, ) {}

  @ApiOperation({summary: 'Получение продуктов'})
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.profileService.getAllProducts();
  }

  @ApiOperation({summary: 'Оформление заказа'})
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post('/carts')
  createCarts(@Body() dto: [CreateCartDto]) {
    return this.profileService.createCarts(dto);
  }
}