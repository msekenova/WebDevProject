import { Component, OnInit } from '@angular/core';
import {User} from '../model';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  users: User[];
  email: string;
  password: string;
  logged = false;
  constructor(private bookService: BooksService) {
    this.email = ' ';
    this.password = ' ';
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register(){
    this.bookService.login(this.email, this.password).subscribe((data) => {
      localStorage.setItem('id', String(data.id));
      this.logged = true;
      this.email = '';
      this.password = '';
    });
  }
}
