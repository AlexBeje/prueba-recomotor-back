import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './modules/cars.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';

@Module({
  imports: [
    CarsModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ConfigModule.forRoot(),
  ],
  controllers: [AppService],
  providers: [AppService, CarsModule],
})
export class AppModule {}
