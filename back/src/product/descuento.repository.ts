import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '../info_prisma/prisma.service';
import { Repository } from 'src/reutilizable/repository';

@Injectable()
export class ProductWithDiscountRepository implements Repository<Product> {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data) {
    // Nueva funcionalidad
    if (data.price > 1000) {
      data.price = data.price * 0.9; // 10% descuento
    }

    return this.prisma.product.create({ data });
  }

  update(id: number, data) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
