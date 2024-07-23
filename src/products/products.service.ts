import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/products.entity';
import { CreateCartDto } from './dto/cart.dto';
import { Cart } from './entity/cart.entity';


@Injectable() 
export class ProDuctService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>, @InjectRepository(Cart) private cartRepository: Repository<Cart>) {}

    async getAllProducts() {
        return this.productRepository.find({relations: {image: true, variant: true}});
    }

    async createCart(dto: CreateCartDto) {
        return await this.cartRepository.save(dto);
    }     
}