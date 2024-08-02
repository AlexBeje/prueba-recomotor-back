import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { Cars, CarsSchema } from './cars.schema';
import { CarsService } from './cars.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cars.name, schema: CarsSchema }]),
  ],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
