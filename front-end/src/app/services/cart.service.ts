import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  books = [];
  dict = new Map<number, number>();
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
    this.dict.clear();
    this.books = [];
    return this.books;
  }

  // tslint:disable-next-line:variable-name
  deleteProduct(book_id: number): void{
    this.books = this.books.filter((x) => x.id !== book_id);
  }
}
