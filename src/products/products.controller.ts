import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProDuctService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

  
@Controller('products')
export class ProductController {

    constructor(private readonly profileService: ProDuctService, ) {}

    //Получение всех продуктов
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
      return this.profileService.getAllProducts();
    }
}
    
