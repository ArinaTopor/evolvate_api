import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/products.entity';


@Injectable() 
export class ProDuctService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>, ) {}

    async getAllProducts() {
        return this.productRepository.find({relations: {image: true, variant: true}});
    }
}