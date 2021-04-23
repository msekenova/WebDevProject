import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books} from './model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  BASE_URL = 'http://localhost:3000';
  constructor(private client: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.client.get<Books[]>(`${this.BASE_URL}/Books`);
  }
  getBook(title: string): Observable<Books>{
    return this.client.get<Books>( `${this.BASE_URL}/Books/${title}`);
  }
}
