import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyService {

  logOne(user:string):string{
    return `Welcome ${user}`
  }

}
