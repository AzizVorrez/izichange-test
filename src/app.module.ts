import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product.module'; // Assure-toi d'importer correctement ton module Product

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://forizi:iAtanU8Cnj46NYho@cluster0.walxwgm.mongodb.net/", {
      dbName: 'Cluster0'
    }),
    ProductModule, // Assure-toi d'importer correctement ton module Product
  ],
})
export class AppModule {}
