import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Food } from '../models/food';
import { Flower } from '../models/flower';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
 url="http://localhost:8080/admin";
  constructor(private service:HttpClient) { }

  public addProduct(p :Product){
   
    return this.service.post<Product>(this.url+"/addProduct",p)
  }

  public addBook(p :Book){
    
    return this.service.post<Book>(this.url+"/addBook",p)
  }

  public addFood(p :Food){
  
    return this.service.post<Food>(this.url+"/addFood",p)
  }
  public addFlower(p :Flower){
  
    return this.service.post<Flower>(this.url+"/addFlower",p)
  }
  public addMovie(p :Movie){
  
    return this.service.post<Movie>(this.url+"/addMovie",p)
  }

  public getOneProduct(productId:number){
    return this.service.get<Product>(this.url+"/oneProduct/"+productId)
  }
  public getAllProducts():Observable<Product[]>{
    return this.service.get<Product[]>(this.url+"/allProducts"
      )
  }
  public updateBook(b :Book){
    return this.service.put<Book>(this.url+"/updateBook",b)
  }
  public updateFlower(f :Flower){
    return this.service.put<Flower>(this.url+"/updateFlower",f)
  }
  public updateFood(f :Food){
    return this.service.put<Food>(this.url+"/updateFood",f)
  }
  public updateMovie(m :Movie){
    return this.service.put<Movie>(this.url+"/updateMovie",m)
  }

  public getOneBook(id:number){
    return this.service.get<Book>(this.url+"/products/OneBook/"+id)
  }
  public getOneFlower(id:number){
    return this.service.get<Flower>(this.url+"/products/getOneFlower/"+id)
  }
  public getOneMovie(id:number){
    return this.service.get<Movie>(this.url+"/products/OneMovie/"+id)
  }
  public getOneFood(id:number){
    return this.service.get<Food>(this.url+"/products/OneFood/"+id)
  }

  public deleteProduct(id:number){
    return this.service.delete(this.url+"/deleteProduct/"+id,{"responseType":"text"})
  }
 
 public getAllFoods():Observable<Food[]>{
   return this.service.get<Food[]>(this.url+"/allFoods")
 }
 
 
}
