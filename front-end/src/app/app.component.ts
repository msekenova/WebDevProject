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
  username = '';
  password = '';

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  constructor(private bookService: BooksService) {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.bookService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }
}
