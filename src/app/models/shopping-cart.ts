import { CustomerService } from "../services/customer.service";
import { Customer } from "./customer";
import { Product } from "./product";
 import { productsOfCart } from "./productsOfCart.1";

export class ShoppingCart {
  [x: string]: any;
    public products:productsOfCart[];
constructor(public cartId:number,public customer:Customer){};
}

 
 