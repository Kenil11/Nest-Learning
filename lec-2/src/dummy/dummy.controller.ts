import { Controller, Get, Param, Query } from '@nestjs/common';
import { DummyService } from './dummy.service';

@Controller('dummy')
export class DummyController {

    constructor(private readonly dummyService:DummyService){}

    @Get()
    getHello(@Query('name') name:string):string{
        return this.dummyService.getHello()
    }

    @Get('/:user/:data')
    getParams(@Param('user') name:string,@Param('data') data:string):string{
        return this.dummyService.getHelloUser(name,data)
    }

}
