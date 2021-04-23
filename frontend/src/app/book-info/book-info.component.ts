import { Component, OnInit } from '@angular/core';
import {Books} from '../model';
import {BooksService} from '../books.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {stringify} from '@angular/compiler/src/util';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  book: Books;
  loaded = false;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private bookService: BooksService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.getBook();
  }

  // tslint:disable-next-line:typedef
  // getBooks() {
  //   this.loaded = false;
  //   this.bookService.getBooks().subscribe(((books) => {
  //       this.books = books;
  //       this.loaded = true;
  //     }
  //   ));
  // }
  // tslint:disable-next-line:typedef
  getBook(){
    this.route.paramMap.subscribe( (params) => {
      const title = stringify(params.get('title'));
      this.loaded = false;
      this.bookService.getBook(title).subscribe((book) => {
        this.book = book;
        this.loaded = true;
      });
    });
  }

  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }
}
