import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from '../info_prisma/prisma.service';
import { ProductWithDiscountRepository } from './descuento.repository';

@Module({
  controllers: [ProductController],
  providers: [PrismaService, ProductService,
    {
      provide: 'ProductRepository',
      useClass: ProductWithDiscountRepository,
    }

  ],
})
export class ProductModule { }
