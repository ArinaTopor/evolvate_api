import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProDuctService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCartDto } from './cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Продукты')
@Controller('products')
export class ProductController {

  constructor(private readonly profileService: ProDuctService, ) {}

  @ApiOperation({summary: 'Получение продуктов'})
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.profileService.getAllProducts();
  }

  @ApiOperation({summary: 'Оформление заказа'})
  @UseGuards(JwtAuthGuard)
  @Post('/cart')
  createCart(@Body() dto: CreateCartDto) {
    return this.profileService.createCart(dto);
  }
}