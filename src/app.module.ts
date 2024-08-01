import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './modules/cars.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_PASSWORD}@database.owocrus.mongodb.net/?retryWrites=true&w=majority&appName=database`,
    ),
    CarsModule,
  ],
  providers: [CarsModule],
})
export class AppModule {}
