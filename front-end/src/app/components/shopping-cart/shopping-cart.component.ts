import { Component, OnInit } from '@angular/core';
import {Book} from '../../model';
import {BookService} from '../../services/book.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = this.cartService.getProducts();
  books: Book[];
  constructor(private bookService: BookService,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  // deleteBook(title: string) {
  //   this.books = this.books.filter((x) => x.title !== title);
  //   this.bookService.deleteBook(title).subscribe(() => {
  //     console.log('deleted', title);
  //   });
  // }
  // tslint:disable-next-line:typedef
  update(): void {
    this.products = this.cartService.getProducts();
  }
  // tslint:disable-next-line:typedef
  clearCart() {
    this.cartService.clearCart();
    // tslint:disable-next-line:no-unused-expression
    this.cartService.dict;
    this.update();
    window.alert('cart is empty');
  }

  // tslint:disable-next-line:variable-name
  delete(book_id: number): void{
    this.cartService.deleteProduct(book_id);
    this.cartService.dict.delete(book_id);
    this.update();
  }
}
