import { Injectable } from '@nestjs/common';
import { DummyService } from 'src/dummy/dummy.service';

interface User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  constructor(private readonly dummyService: DummyService) {}

  getAllUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Kenil',
      },
      {
        id: 2,
        name: 'John',
      },
      {
        id: 3,
        name: 'Devansh',
      },
    ];
  }

  getUserById(id: number): User | string {
    const user = this.getAllUsers().find((user) => user.id === id);

    if (!user) {
      return `User not found with id ${id}`;
    }

    return user;
  }

  getWelcomeMessage(id: number): string {
    const user = this.getUserById(id);

    if (typeof user === 'string') {
      return `User not found with id ${id}`;
    }

    return this.dummyService.logOne(user.name);
  }
}
