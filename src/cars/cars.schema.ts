import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Cars {}

export const CarsSchema = SchemaFactory.createForClass(Cars);
