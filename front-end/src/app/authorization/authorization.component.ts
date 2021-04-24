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
  constructor(private bookService: BooksService) {
    this.email = ' ';
    this.password = ' ';
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register(){
    const user = {
      email: this.email,
      password: this.password
    };
    // tslint:disable-next-line:no-shadowed-variable
    this.bookService.register(user as User).subscribe((user) => {
      this.users.unshift(user);
      this.email = ' ';
      this.password = ' ';
    });
  }
}
