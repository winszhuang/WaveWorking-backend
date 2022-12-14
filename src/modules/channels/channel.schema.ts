import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ChannelDocument = HydratedDocument<Channel>;

@Schema()
export class Channel {
  // name
  @Prop()
  @ApiProperty({
    example: 'MusicBarLaLa',
    format: 'string',
    minLength: 2,
    maxLength: 18,
    required: true,
  })
  name: string;

  // password(can empty)
  @Prop()
  @ApiProperty({
    example: 'password',
    format: 'string',
    minLength: 0,
    maxLength: 20,
    required: true,
  })
  password: string;

  // createdAt
  @Prop()
  @ApiProperty({
    example: '2022-09-22T12:40:56.757',
    format: 'string',
    required: true,
  })
  createdAt: Date;

  // image of channel
  @Prop()
  @ApiProperty({
    example:
      'https://www.wyzowl.com/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png',
    format: 'string',
  })
  thumbnail: string;

  // the channel manager id
  @Prop()
  @ApiProperty({
    example: '637b8929b8cb2d3eff5273e0',
    format: 'string',
    required: true,
  })
  managerId: string;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
