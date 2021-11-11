import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FoodService } from './food.service';
import {
  CreateDishesDto,
  DeleteDto,
  UpdateDishesDto,
} from './dtos/create-dishes.dto';

@Controller('dishes')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get('/')
  async findAll() {
    return await this.foodService.findAll();
  }

  @Post('/add')
  async add(@Body() body: CreateDishesDto) {
    const user = await this.foodService.add(body);
    return user;
  }

  @Put('/update')
  async update(@Body() body: UpdateDishesDto) {
    const user = await this.foodService.update(body);
    return user;
  }

  @Delete('/delete')
  async delete(@Body() body: DeleteDto) {
    const user = await this.foodService.delete(body);
    return user;
  }
}
