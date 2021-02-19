import { Product } from './product';
import { Category } from './category.enum';

export class Book extends Product {
    constructor(
        public title: string, public price: number, public category: Category, public amount: number, public description:string,public author: string, public year: number, public language: string) {
        super(title, price, category, amount,description);
        this.author = author;
        this.year = year;
        this.language = language;

    }
}
