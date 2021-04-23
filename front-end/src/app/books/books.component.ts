import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {Books} from '../model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Books[] = [];
  loaded = false;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  // tslint:disable-next-line:typedef
  getBooks(){
    this.loaded = false;
    this.bookService.getBooks().subscribe(((books) => {
      this.books = books;
      this.loaded = true;
    }));
  }

}
