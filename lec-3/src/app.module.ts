import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [UsersModule, DummyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
