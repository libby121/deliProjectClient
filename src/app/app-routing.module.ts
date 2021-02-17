import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';


const routes: Routes = [
  {path:"",component:ProductsComponent },
  {path:"my_orders", component:MyOrdersComponent},
  {path:"all_products",component:ProductsComponent},
  {path:"check_out",component:CheckOutComponent },
  {path:"shopping_cart", component:ShoppingCartComponent},
  {path:"admin/products/new",component:AddProductComponent},
  {path:"admin/products/:id",component:AddProductComponent},
  {path:"admin/all_orders",component:AdminOrdersComponent},
  {path:"admin/all_products",component:AdminProductsComponent},
  {path:"home",redirectTo:""},
  {path:"**",component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
