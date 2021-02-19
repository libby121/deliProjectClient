import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Product } from 'src/app/models/product';
import { Food } from 'src/app/models/food';
import { FoodCategory } from 'src/app/models/food-category.enum';
import { bouquetColor } from 'src/app/models/bouquet-color.enum';
import { bouquetType } from 'src/app/models/bouquet-type.enum';
import { bouquetSize } from 'src/app/models/bouquet-size.enum';
import { Flower } from 'src/app/models/flower';
import { Book } from 'src/app/models/book';
import { Movie } from 'src/app/models/movie';
import { movieGenre } from 'src/app/models/movie-genre.enum';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public categoryList = Category;
  newBookPro: Book;
  newFoodPro;
  flowerType; flowerColor; flowerSize;
  authorBook; yearBook; langBook;
  directorMovie; yearMovie; genreMovie; langMovie;
  foodType;
  expirationDate;
  categories = [];
  product: Product = {};
  movieGenres = [];
  foodCateggories = [];
  flowerSizes = [];
  flowerTypes = [];
  flowerColors = []; id;
  category: Category;
  constructor(private service: AdminServiceService, private route: ActivatedRoute, private router:Router) {


  }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.service.getOneProduct(this.id).subscribe((p) => {
        this.product = p;

        switch (this.product.category) {
          case this.categories[0]:
            this.service.getOneFood(this.id).subscribe((fetchedFood) => {
              this.foodType = fetchedFood.foodType;
              this.expirationDate = fetchedFood.expirationDate;
            }, (err) => {
              console.log(err.error);
            })
            break;
          case this.categories[1]:
            this.service.getOneFlower(this.id).subscribe((fetchedFlower) => {
              this.flowerColor = fetchedFlower.color;
              this.flowerSize = fetchedFlower.size;
              this.flowerType = fetchedFlower.type;


            }, (err) => {
              console.log(err.error);
            })
            break;
          case this.categories[2]:
            this.service.getOneBook(this.id).subscribe((fetchedBook) => {
              this.langBook = fetchedBook?.language;
              this.yearBook = fetchedBook?.year;
              this.authorBook = fetchedBook?.author;


            }, (err) => {
              console.log(err.error);
            })
            break;

          case this.categories[3]:
            this.service.getOneMovie(this.id).subscribe((fetchedMovie) => {
              this.directorMovie = fetchedMovie.director;
              this.genreMovie = fetchedMovie.genre;
              this.langMovie = fetchedMovie.language;
              this.yearMovie = fetchedMovie.year;




            }, (err) => {
              console.log(err.error);
            })
            break;



        }

      }, (err) => {
        console.log(err.error);
      })
    }


    for (let item in Category) {
      if (isNaN(parseInt(item))) this.categories.push(item);
    }
    for (let item in FoodCategory) {
      if (isNaN(parseInt(item))) this.foodCateggories.push(item);
    }
    for (let item in bouquetColor) {
      if (isNaN(parseInt(item))) this.flowerColors.push(item);
    }
    for (let item in bouquetType) {
      if (isNaN(parseInt(item))) this.flowerTypes.push(item);
    }
    for (let item in bouquetSize) {
      if (isNaN(parseInt(item))) this.flowerSizes.push(item);
    }
    for (let item in movieGenre) {
      if (isNaN(parseInt(item))) this.movieGenres.push(item);
    }
    //this.product= new Food("pie", 200,Category.food,400,FoodCategory.Pastry,new Date());
    //  this.product=new Flower("irises",120,Category.flowers,300,bouquetSize.large,bouquetColor.colorful,bouquetType.iris)
    //this.product=new Book("fontanela",97,Category.books,25,"meir shalev",2007,"heb"); 
    //this.product=new Movie("a rainy day in ny", 200,Category.movies,400,"woody allen",movieGenre.comedy,2015,"eng")
  }

  save(p: Product) {
    if (this.id) {
      this.category = p.category;

      switch (this.product.category) {
        case this.categories[0]:
          let foodProduct = new Food(p.title, p.price, this.categories[0], p.amount, p.description,this.foodType, this.expirationDate);
          foodProduct.id = this.id;
          this.service.updateFood(foodProduct).subscribe((newFood) => {
            console.log(newFood.foodType);
            console.log(newFood.expirationDate);
            alert("product successfully updated")
          }, (err) => {
            console.log(err.error);
          })
          break;
        case this.categories[1]:
          let flowerProduct = new Flower(p.title, p.price, this.categories[1], p.amount, p.description,this.flowerSize, this.flowerColor, this.flowerType);
          flowerProduct.id = this.id;
          this.service.updateFlower(flowerProduct).subscribe((newFlower) => {
            console.log(newFlower.color);
            alert("product successfully updated")
          }, (err) => {
            console.log(err.error);
          })
          break;
        case this.categories[2]:
          let bookProduct = new Book(p.title, p.price, this.categories[2], p.amount, p.description,this.authorBook, this.yearBook, this.langBook);
          bookProduct.id = this.id;
          this.service.updateBook(bookProduct).subscribe((newBook) => {
            console.log(newBook.author);
            alert("product successfully updated")
          }, (err) => {
            console.log(err.error);
          })
          break;
        case this.categories[3]:
          let movieProduct = new Movie(p.title, p.price, this.categories[3], p.amount,p.description, this.directorMovie, this.genreMovie, this.yearMovie, this.langMovie)
          movieProduct.id = this.id;       

          this.service.updateMovie(movieProduct).subscribe((newMovie) => {
            console.log(newMovie.genre);
            alert("product successfully updated")
          }, (err) => {
            console.log(err.error);
          })
          break;
      }
    }
    else {

      switch (this.product.category) {

        case this.categories[0]:
          let foodProduct = new Food(p.title, p.price, this.categories[0], p.amount, this.product.description, this.foodType, this.expirationDate);
          this.service.addFood(foodProduct).subscribe((newFood) => {
            console.log(newFood.foodType);
            console.log(newFood.expirationDate);
            this.router.navigate(['admin/all_products'])
          }, (err) => {
            console.log(err.error);
          })
          break;
        case this.categories[1]:
          let flowerProduct = new Flower(p.title, p.price, this.categories[1], p.amount,this.product.description,  this.flowerSize, this.flowerColor, this.flowerType)
          this.service.addFlower(flowerProduct).subscribe((newFlower) => {
            console.log(newFlower.color);
            this.router.navigate(['admin/all_products'])
          }, (err) => {
            console.log(err.error);
          })
          break;
        case this.categories[2]:
          let bookProduct = new Book(p.title, p.price, this.categories[2], p.amount,this.product.description, this.authorBook, this.yearBook, this.langBook);
          this.service.addBook(bookProduct).subscribe((newBook) => {
            console.log(newBook.author);
            this.router.navigate(['admin/all_products'])
          }, (err) => {
            console.log(err.error);
          })
          break;
        case this.categories[3]:
          let movieProduct = new Movie(p.title, p.price, this.categories[3], p.amount,this.product.description,  this.directorMovie, this.genreMovie, this.yearMovie, this.langMovie)
          this.service.addMovie(movieProduct).subscribe((newMovie) => {
            console.log(newMovie.genre);
            this.router.navigate(['admin/all_products'])
          }, (err) => {
            console.log(err.error);
          })
          break;









      }
    }

  }

  delete() {
    this.service.deleteProduct(this.id).subscribe((msg) => {
      this.router.navigate(['admin/all_products'])
    }, (err) => {
     alert(err.error)
    })
  }
}



//}
