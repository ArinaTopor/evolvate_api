import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './products.controller';
import { ProDuctService } from './products.service';
import { Product } from './entity/products.entity';
import { ProductImage } from './entity/product-image.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Variant } from './entity/variant.entity';
import { Cart } from './entity/cart.entity';




@Module({
  controllers: [ProductController],
  providers: [ProDuctService],
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Variant, Cart]), AuthModule],
})
export class ProductModule {}