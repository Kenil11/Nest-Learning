import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyService {

    getHello():string{
        return "Hello Dummy Module"
    }

    getHelloUser(user:string,data:string):string{
        return `Hello ${user} ${data}`
    }

}
