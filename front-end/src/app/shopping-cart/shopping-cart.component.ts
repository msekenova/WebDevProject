import { Component, OnInit } from '@angular/core';
import {Books} from '../model';
import {BooksService} from '../books.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = this.cartService.getProducts();
  books: Books[];
  constructor(private bookService: BooksService,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteBook(title: string) {
    this.books = this.books.filter((x) => x.title !== title);
    this.bookService.deleteBook(title).subscribe(() => {
      console.log('deleted', title);
    });
  }
  // tslint:disable-next-line:typedef
  clearCart() {
    this.cartService.clearCart().unshift(this.books);
    window.alert('cart is empty');
  }
}
