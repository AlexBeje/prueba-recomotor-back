import { Controller, Get } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller(['cars'])
export class CarsController {
  constructor(private readonly userService: CarsService) {}

  @Get()
  getCars() {
    return this.userService.getCars();
  }
}
