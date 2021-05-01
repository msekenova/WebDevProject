import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author, Book} from '../model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  BASE_URL = 'http://127.0.0.1:8000/api/books/';
  // tslint:disable-next-line:variable-name
  constructor(private client: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getBooks(): Observable<Book[]> {
    return this.client.get<Book[]>(this.BASE_URL, this.httpOptions);
  }
  getBook(id: number): Observable<Book>{
    const url = `${this.BASE_URL}${id}/`;
    return this.client.get<Book>(url);
  }

}
