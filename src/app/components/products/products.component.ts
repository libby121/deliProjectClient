import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category.enum';
import { ActivatedRoute } from '@angular/router';
import { FoodCategory } from 'src/app/models/food-category.enum';
import { Food } from 'src/app/models/food';
import { CustomerService } from 'src/app/services/customer.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories = Object.keys(Category).filter(key => !isNaN(Number(Category[key])));;
  foodTypes = Object.keys(FoodCategory).filter(key => !isNaN(Number(FoodCategory[key])));;;
  category;
  foodType;
  allProducts = [];
  filteredProducts: Product[] = [];
  filteredFoodTypes = [];
  isFood: boolean;
  allProductsRef = [];
  customerCart:ShoppingCart;
  
  //this only works when these are in the cto and not in onInit..
  constructor(private service: AdminServiceService, private route: ActivatedRoute,
    private customerService:CustomerService) {
    if (this.foodType) {
      console.log(this.foodType)

    }
    this.service.getAllProducts().subscribe((all) => {
      this.allProducts = this.allProductsRef = all;
      this.route.queryParamMap.subscribe((p) => {
        this.category = p.get('category');
        this.foodType = p.get('foodCategory');
     //   if (this.foodType) {this.filterFoods();
    // }
        
          this.filteredProducts = (this.category) ?
            this.allProducts.filter(p => p.category === this.category) :

            this.allProducts
        
      })
    }, (err) => { console.log(err.error) })


  }
  ngOnInit(): void {
this.customerService.getOrCreateCart().subscribe((cart)=>{
this.customerCart=cart;
console.log(this.customerCart.productsOfCart[1].quantity)
},(err)=>{
console.log(err.error);
})
  }
  filterFoods() {

    this.service.getAllFoods().subscribe((listFood) => {
      this.allProducts = listFood;
      this.filteredProducts = (this.foodType) ? this.allProducts.filter(p => p.foodType === this.foodType) : this.allProducts
    })
     
     




  }

}
