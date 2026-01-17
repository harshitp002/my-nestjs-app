import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    private  readonly category : string[] = ["Mango", "Orange", "Apple"];
    //private meaning this service can only access this used for encapsulation
    // readonly means this cannot be changed  is used for safety

    getCategory(){
        return this.category;
    }
}
