import { Injectable } from '@nestjs/common';

@Injectable()  //provided by dependency injection
export class ProductService {
     private products = [
        {id : 1 , name : "books", price : 600 },
        {id : 2 , name : "toys", price : 400 },
        {id : 3 , name : "cycle", price : 500 },
     ]

     getAllProducts(){
        return this.products;
     }

     getProductById(id : number){
        return this.products.find((product) => product.id === id);
     }
}
