import { Product } from './product';
import { Category } from './category.enum';
import { FoodCategory } from './food-category.enum';

export class Food extends Product{
    constructor(
        public title: string, public price: number, public category: Category, public amount: number,public description:string, public foodType: FoodCategory, public expirationDate: Date) {
        super(title, price, category, amount,description);
        this.foodType = foodType;
        this.expirationDate = expirationDate;
         

    }
}
