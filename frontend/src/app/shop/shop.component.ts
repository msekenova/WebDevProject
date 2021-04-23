import { Component, OnInit } from '@angular/core';
import {Books} from '../model';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  books: Books[] = [];
  loaded = false;
  constructor(private bookService: BooksService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.getBooks();
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

}
