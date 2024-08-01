import { Controller, Get } from '@nestjs/common';
import { CarsService } from './cars.services';

@Controller(['cars'])
export class CarsController {
  constructor(private readonly userService: CarsService) {}

  @Get()
  getAllCars() {
    return this.userService.getAllCars();
  }
}