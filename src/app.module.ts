import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    CarsModule,
    UsersModule
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class AppModule {}
