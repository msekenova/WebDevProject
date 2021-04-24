import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  books = [];
  constructor() { }

  // tslint:disable-next-line:typedef
  addToCart(product) {
    this.books.push(product);
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    return this.books;
  }

  // tslint:disable-next-line:typedef
  clearCart() {
    this.books = [];
    return this.books;
  }
}
