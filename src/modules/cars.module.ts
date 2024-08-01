import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from 'src/controllers/cars.controller';
import { Cars, CarsSchema } from 'src/schemas/cars.schema';
import { CarsService } from 'src/services/cars.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cars.name, schema: CarsSchema }]),
  ],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
