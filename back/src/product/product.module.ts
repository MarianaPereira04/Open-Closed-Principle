import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductPrismaRepository } from './prisma.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService,
    {provide: 'ProductRepository',
      useClass: ProductPrismaRepository,}
  ],
})
export class ProductModule {}
