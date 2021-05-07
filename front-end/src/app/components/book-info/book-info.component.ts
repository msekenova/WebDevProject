import { Component, OnInit } from '@angular/core';
import {Book} from '../../model';
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

  book: Book;
  PAGE_ID: number = null;
  loaded: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private bookService: BookService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getBook();
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
  addToCart(book){
    this.cartService.addToCart(book);
  }
  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }

}
