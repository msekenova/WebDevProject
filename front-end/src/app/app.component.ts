import {Component, OnInit} from '@angular/core';
import {BooksService} from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  logged = false;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const id = localStorage.getItem('id');
    if (id) {
      this.logged = true;
    }
  }

  constructor(private bookService: BooksService) {
  }
}
