import { Component, OnInit } from '@angular/core';
import {Book} from '../../model';
import {BookService} from '../../services/book.service';
import {CartService} from '../../services/cart.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  searchTerm: string;
  categories: string[];
  books: Book[];
  loaded = false;
  showResults = false;

  constructor(private bookService: BookService,
              private cartService: CartService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  // tslint:disable-next-line:typedef
  addToCart(book){
    this.cartService.addToCart(book);
  }
  // tslint:disable-next-line:typedef
  getBooks() {
    this.loaded = false;
    this.bookService.getBooks().subscribe(((books) => {
        this.books = books;
        this.loaded = true;
      }
    ));
  }

  search(): void {
    console.log('here');
    this.searchTerm = this.searchTerm.toLowerCase();
    this.showResults = true;
    this.bookService.getBooks().pipe(map(book =>
      book.filter(bbook => bbook.title.toLowerCase().includes(this.searchTerm)))).subscribe(books => this.books = books);
  }


}
