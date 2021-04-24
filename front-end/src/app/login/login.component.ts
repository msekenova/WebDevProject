import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged = false;
  email = '';
  password = '';
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    if (id) {
      this.logged = true;
    }
  }

  // tslint:disable-next-line:typedef
  login() {
    this.bookService.login(this.email, this.password).subscribe((data) => {
      localStorage.setItem('id', String(data.id));
      this.logged = true;
      this.email = '';
      this.password = '';
    });
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.logged = false;
    localStorage.removeItem('id');
  }
}
