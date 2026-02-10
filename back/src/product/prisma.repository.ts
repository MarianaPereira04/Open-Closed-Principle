import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductRepository } from './repository';

@Injectable()
export class ProductPrismaRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  findOne(id: number): Promise<Product> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  create(data): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  update(id: number, data): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}