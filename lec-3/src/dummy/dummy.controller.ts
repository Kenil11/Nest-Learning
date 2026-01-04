import { Controller, Get, Param } from '@nestjs/common';
import { DummyService } from './dummy.service';

@Controller('dummy')
export class DummyController {
    constructor(private readonly service:DummyService){}
    @Get('/:user')
    logUser(@Param('user') name:string){
        return this.service.logOne(name)
    }
}
