import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './products.controller';
import { ProDuctService } from './products.service';
import { Product } from './entity/products.entity';
import { ProductImage } from './entity/product-image.entity';
import { Variant } from './entity/variant.dto';
import { AuthModule } from 'src/auth/auth.module';




@Module({
  controllers: [ProductController],
  providers: [ProDuctService],
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Variant]), AuthModule],
})
export class ProductModule {}