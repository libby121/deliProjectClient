import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
allProds:Product[];
filteredProducts;
  constructor(private service: AdminServiceService) { }

  ngOnInit(): void {
this.service.getAllProducts().subscribe((all)=>{
 this.filteredProducts= this.allProds=all;
  
})
  }

  filter(query:string){
    this.filteredProducts=(query)?this.allProds.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) :this.allProds;
  }
}