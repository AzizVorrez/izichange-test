import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async index(): Promise<Product[]> {
    return this.productService.findAll();
  } 

  @Post('new')
  async create(@Body() productData: Product): Promise<Product> {
    return this.productService.create(productData);
  }

  @Get('/edit/:id')
  async filter(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  } 

  @Patch('edit/:id')
  async edit(@Param('id') id: string): Promise<{ product: Product }> {
    const product = await this.productService.findById(id);
    return { product };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productService.delete(id);
  }

}
