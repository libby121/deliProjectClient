import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  allProducts:Product[];
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((all)=>{
      this.allProducts=all;
    },(err)=>{console.log(err.error)})
    
  }

}
