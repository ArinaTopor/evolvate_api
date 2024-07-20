import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProDuctService } from './products.service';

  
@Controller('products')
export class ProductController {

    constructor(private readonly profileService: ProDuctService, ) {}

    //Получение всех продуктов
    @Get()
    getAll() {
      return this.profileService.getAllProducts();
    }
}
    
