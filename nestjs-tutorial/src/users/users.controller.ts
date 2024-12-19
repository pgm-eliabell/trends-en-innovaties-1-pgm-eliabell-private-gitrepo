import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('users')
  findAll() {
    const users = this.usersService.findAll();
    return { users };
  }
}
