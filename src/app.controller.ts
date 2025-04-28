import {
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';

@Controller('auth')
export class AppController {
  @Get()
  findAll(
    @Query('name') name: string,
    @Query('timesChanged') timesChanged: number,
  ) {
    return {
      _id: Math.random() * 0.8,
      name,
      timesChanged,
    };
  }
}
