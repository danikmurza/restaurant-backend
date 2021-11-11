import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Dishes & Document;

@Schema({ collection: 'restaurant' })
export class Dishes {
  @Prop({ required: true, lowercase: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  desc: string;
}

export const DishesSchema = SchemaFactory.createForClass(Dishes);
