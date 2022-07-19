import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getTodos() {
    return this.appService.getTodos();
  }

  @Post('addTodo')
  addTodo() {
    return this.appService.addTodo(); 
  }
}
