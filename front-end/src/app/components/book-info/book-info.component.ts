import { Component, OnInit } from '@angular/core';
import {Author, Book} from '../../model';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';
import {CartService} from '../../services/cart.service';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  book: Book = null;
  author: Author = null;
  PAGE_ID: number = null;
  loaded: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private bookService: BookService,
              private cartService: CartService,
              private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getBook();
    this.getAuthor();
  }
  // tslint:disable-next-line:typedef
  getBook(){
    this.route.paramMap.subscribe((params) => {
      const id = + params.get('id');
      this.loaded = false;
      this.bookService.getBook(id).subscribe((book) => {
        this.book = book;
        this.PAGE_ID = this.book.comment_section;
        this.loaded = true;
      });
    });
  }
  // tslint:disable-next-line:typedef
  getAuthor(){
    this.route.paramMap.subscribe((params) => {
      const id = + params.get('id');
      this.loaded = false;
      this.authorService.getAuthor(id).subscribe((author) => {
        this.author = author;
        this.loaded = true;
      });
    });
  }

  // tslint:disable-next-line:typedef
  addToCart(book){
    this.cartService.addToCart(book);
    window.alert('Product added');
  }
  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }

}
