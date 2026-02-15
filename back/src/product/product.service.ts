import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { Repository } from 'src/reutilizable/repository';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly repository: Repository<Product>,
  ) {}

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  create(data) {
    return this.repository.create(data);
  }

  update(id: number, data) {
    return this.repository.update(id, data);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}