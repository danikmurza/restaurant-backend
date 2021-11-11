import {
    BadRequestException,
    Injectable,
    // NotFoundException,
    // ConflictException,
} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {CreateDishesDto, DeleteDto, UpdateDishesDto} from './dtos/create-dishes.dto';
import {Dishes, UserDocument} from './schema/dishes.schema';

@Injectable()
export class FoodService {
    constructor(
        @InjectModel(Dishes.name)
        private readonly userModel: Model<UserDocument>,
    ) {
    }

    async findAll() {
        return await this.userModel.find().exec();
    }

    async add(data: CreateDishesDto) {
        await new this.userModel(data).save();
        return this.findAll()
    }

    async update(data: UpdateDishesDto) {
        await this.userModel.findByIdAndUpdate({_id: data._id}, data)
        return await this.findAll()
    }

    async delete(data: DeleteDto) {
       await this.userModel.findByIdAndDelete({_id: data._id})
        return await this.findAll()
    }
}
