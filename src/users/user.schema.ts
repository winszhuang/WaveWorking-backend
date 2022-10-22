import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  // name
  @Prop()
  @ApiProperty({
    example: 'pejman hadavi',
    format: 'string',
    minLength: 2,
    maxLength: 18,
    required: true,
  })
  name: string;

  // email
  @Prop()
  @ApiProperty({
    example: 'test@gmail.com',
    format: 'string',
    required: true,
  })
  email: string;

  // password
  @Prop()
  @ApiProperty({
    example: 'password',
    format: 'string',
    minLength: 6,
    maxLength: 20,
    required: true,
  })
  password: string;

  // gender
  @Prop()
  @ApiProperty({
    example: 0,
    description: 'gender number. 0 is women, 1 is man',
    format: 'number',
    required: true,
  })
  gender: number;

  // createdAt
  @Prop()
  @ApiProperty({
    example: '2022-09-22T12:40:56.757',
    format: 'string',
    required: true,
  })
  createdAt: Date;

  // avatar
  @Prop()
  @ApiProperty({
    example: 'https://cdn-icons-png.flaticon.com/512/1845/1845723.png',
    description: 'The avatar of the User',
    format: 'string',
  })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
