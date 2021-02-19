import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private service: AdminServiceService, private Customersrevice: CustomerService) { }

  @Input("productId")
  productId: number;
  product: Product;
  flowerType; flowerColor; flowerSize;
  foodType; expirationDate;
  bookYear; bookAuthor; bookLang;
  movieDirector; movieYear; movieLang
  categories = [];
  itemQuantity;
  @Input('cart')
  cart:{productsOfCart: any, quantity:number};

  ngOnInit(): void {



    for (let item in Category) {
      if (isNaN(parseInt(item))) this.categories.push(item);
    }

    this.service.getOneProduct(this.productId).subscribe((p) => {
      switch (p.category) {
        case this.categories[0]:

          this.service.getOneFood(this.productId).subscribe((food) => {

            this.product = food;
            this.foodType = food.foodType;
            this.expirationDate = food.expirationDate;

          }, (err) => {
            console.log(err.error)
          }); break;

        case this.categories[1]:
          this.service.getOneFlower(this.productId).subscribe((flower) => {

            this.product = flower;
            this.flowerColor = flower.color;
            this.flowerSize = flower.size;
            this.flowerType = flower.type;
          }, (err) => {
            console.log(err.error)
          }); break;

        case this.categories[2]:
          this.service.getOneBook(this.productId).subscribe((book) => {
            this.product = book;
            this.bookAuthor = book.author;
            this.bookYear = book.year;
            this.bookLang = book.language;


          }, (err) => {
            console.log(err.error)
          }); break;

        case this.categories[3]:
          this.service.getOneMovie(this.productId).subscribe((movie) => {
            this.product = movie;
            this.movieDirector = movie.director;
            this.movieLang = movie.language;
            this.movieYear = movie.year;




          }, (err) => {
            console.log(err.error)
          }); break;
        default:
          console.log("default")
      }

    }, (err) => {
      console.log(err.error)
    })
  }

  addToCart(productId: number) {
    this.Customersrevice.addToCart(productId).subscribe((text) => {
      let Item=this.cart.productsOfCart.find(x => x.item.id === this.productId);
  
      Item.quantity++
    }, (err) => {
      console.log(err.error);
    })
  }


  getProductQuantity() {
      if(!this.cart)return 0;
      let Item=this.cart.productsOfCart.find(x => x.item.id === this.productId);
     
   
  if(Item )return Item.quantity;
  else  return 0;
    //item!=='undefined'?item.quantity:0;

  }
}
