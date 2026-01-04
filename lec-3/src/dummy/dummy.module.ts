import { Module } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';

@Module({
  controllers: [DummyController],
  providers: [DummyService],
  // imports:[],//Import other modules if needed 
  exports:[DummyService]//export service if needed in other module
})
export class DummyModule {}
