import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Favorites } from './users.type';

@Schema()
export class Users {
  @Prop({ required: true })
  favorites: Favorites[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
