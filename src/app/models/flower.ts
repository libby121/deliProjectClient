import { Product } from './product';
import { Category } from './category.enum';
import { bouquetSize } from './bouquet-size.enum';
import { bouquetType } from './bouquet-type.enum';
import { bouquetColor } from './bouquet-color.enum';

export class Flower extends Product{
    constructor(public title:string, public price:number, public category:Category, public amount:number, public description:string,public size: bouquetSize, public color: bouquetColor,
        public type: bouquetType ) {
    super(title, price, category, amount,description);
    this.size = size;
    this.color = color;
    this.type = type;
}
}
