import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cars } from 'src/schemas/Cars.schema';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Cars.name) private carsModel: Model<Cars>) {}

  getAllCars() {
    return this.carsModel.find();
  }
}
