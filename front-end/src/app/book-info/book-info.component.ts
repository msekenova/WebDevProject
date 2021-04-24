import { Component, OnInit } from '@angular/core';
import {Books} from '../model';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../books.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  book: Books;
  loaded: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private bookService: BooksService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getBook();
  }
  // tslint:disable-next-line:typedef
  getBook(){
    this.route.paramMap.subscribe((params) => {
      const title = String(params.get('title'));
      this.loaded = false;
      this.bookService.getBook(title).subscribe((book) => {
        this.book = book;
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
