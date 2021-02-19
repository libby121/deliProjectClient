import { Product } from './product';
import { Category } from './category.enum';
import { movieGenre } from './movie-genre.enum';

export class Movie extends Product {
    constructor(
        public title: string, public price: number, public category: Category, public amount: number, public description:string,public director: string, public genre: movieGenre, public year: number,public language:string) {
        super(title, price, category, amount,description);
        this.director = director;
        this.genre=genre;
        this.year = year;
        this.language = language;

    }
}
// public Movie(String title, double price, Category category, int amount,
    // String description,
    // String director,movieGenre genre, int year,String language) {
// super(title, price, category, amount, description);
// this.director=director;
// this.genre=genre;
// this.year=year;
// this.language=language;
// }