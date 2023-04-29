import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

// class decorator
@Controller('messages')
export class MessagesController {
  // method decorator
  @Get()
  listMessages() {
    return 'List of messages';
  }

  @Post()
  postMessage(@Body() body: CreateMessageDto) {
    return { content: body.content };
  }

  @Get('/:id')
  getMessage(@Param() param: string) {
    return JSON.parse(JSON.stringify(param));
  }
}
