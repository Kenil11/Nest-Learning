import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DummyModule } from 'src/dummy/dummy.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[DummyModule]
})
export class UsersModule {}
