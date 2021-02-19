import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url="http://localhost:8080/customer";
  constructor(private service:HttpClient) { }

  public getOrCreateCart(){
    return this.service.get<ShoppingCart>(this.url+"/cart")

  }

  public addToCart(productId:number){
   return this.service.post(this.url+"/addToCart/"+productId,null,{responseType:'text'});
  }
}
