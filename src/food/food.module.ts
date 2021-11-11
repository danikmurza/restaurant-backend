import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dishes, DishesSchema } from './schema/dishes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dishes.name, schema: DishesSchema }]),
  ],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
