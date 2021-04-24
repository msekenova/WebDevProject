import { Component, OnInit } from '@angular/core';
import {Books} from '../model';
import {BooksService} from '../books.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  books: Books[];
  loaded = false;

  constructor(private bookService: BooksService,
              private cartService: CartService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  // tslint:disable-next-line:typedef
  addToCart(book){
    this.cartService.addToCart(book);
    window.alert('Product added');
  };
  // tslint:disable-next-line:typedef
  getBooks() {
    this.loaded = false;
    this.bookService.getBooks().subscribe(((books) => {
        this.books = books;
        this.loaded = true;
      }
    ));
  }

}
