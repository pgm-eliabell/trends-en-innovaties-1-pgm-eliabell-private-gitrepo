import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [{ id: 1, name: 'John Doe' }];

  findAll() {
    return this.users;
  }
}
