import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async index(): Promise<Product[]> {
    return this.productService.findAll();
  } 
}
