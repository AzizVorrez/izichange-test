import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(productData: Product): Promise<Product> {
    const createdProduct = new this.productModel(productData);
    return createdProduct.save();
  }

  async findById(id: string): Promise<Product | null> {
    try {
      const product = await this.productModel.findById(id).exec();
      return product;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async update(id: string, productData: Product): Promise<Product | null> {
    try {
      const updatedProduct = await this.productModel.findByIdAndUpdate(id, productData, { new: true }).exec();
      return updatedProduct;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
