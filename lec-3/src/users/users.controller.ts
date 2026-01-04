import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

interface User {
  id: number;
  name: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUser(): User[] {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getOneUser(@Param('id', ParseIntPipe) id: number): User | string {
    return this.userService.getUserById(id);
  }

  @Post()
  helloMessage(@Body('id', ParseIntPipe) id: number): string {
    return this.userService.getWelcomeMessage(id);
  }
}
