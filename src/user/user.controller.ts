import { Controller , Get} from '@nestjs/common';

@Controller('user') //It is not simple fucntion - beacuse decorator is used
export class UserController {
    @Get()
    getUser(){
       return "New User Controller created.";
    }
    
    //getUser is special method - beacuse get decorator is providing the meta data to this getUser function.
    // @Get method which is using decoator can be called only when user will call on the Get route.
    // basically call method not function.
}
