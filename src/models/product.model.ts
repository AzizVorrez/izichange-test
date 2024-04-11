import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ type: String, required: true, maxlength: 255 })
  name: string;

  @Prop({ type: Number, required: true })
  priceHt: number;

  @Prop({ type: Date, required: true, default: Date.now })
  creationDate: Date;

  @Prop({ type: Date, default: null })
  dateUpdate?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
