import { Category } from './category.enum';

export abstract class Product {
  
    // public title:string;
    // public price:number;
    // public category:Category;
    // public description:string;
    //  public amount:number;
    //  public image?:string;
    //  public id?:number;
    constructor(public title?:string,public price?:number,public category?:Category,public amount?:number,public description?:string,public image?:string,public id?:number){
        // this.title=title;
        // this.price=price;
        // this.category=category;
        // this.amount=amount;
        // this.image=image;
        // this.id=id;
        // this.description=description
    }

}
