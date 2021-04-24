import { Component, OnInit } from '@angular/core';
import {User} from '../model';
import {BooksService} from '../books.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  user: User;
  logged: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private bookService: BooksService, ) { }

  ngOnInit(): void {
    this.getInfo();
    const id = localStorage.getItem('id');
    if (id) {
      this.logged = true;
    }
  }
  // tslint:disable-next-line:typedef
  getInfo(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.bookService.getInfo(id).subscribe((user) => {
        this.user = user;
      });
    });
  }

  // tslint:disable-next-line:typedef
  updateInfo() {
    this.bookService.updateInfo(this.user).subscribe((user) => {
      console.log(user);
    });
  }
  // tslint:disable-next-line:typedef
  // login() {
  //   this.bookService.login(this.email, this.password).subscribe((data) => {
  //     localStorage.setItem('id', String(data.id));
  //     this.logged = true;
  //     this.email = '';
  //     this.password = '';
  //   });
  // }
  // tslint:disable-next-line:typedef
  logout() {
    this.logged = false;
    localStorage.removeItem('id');
  }

}
