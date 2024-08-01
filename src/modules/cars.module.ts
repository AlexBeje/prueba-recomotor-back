import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from '../controllers/cars.controller';
import { Cars, CarsSchema } from '../schemas/cars.schema';
import { CarsService } from '../services/cars.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cars.name, schema: CarsSchema }]),
  ],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
