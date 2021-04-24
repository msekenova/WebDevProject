import { Component, OnInit } from '@angular/core';
import {User} from '../model';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  user: User;
  loaded: boolean;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  updateInfo() {
    this.loaded = false;
    this.bookService.updateInfo(this.user).subscribe((user) => {
      console.log(user);
      this.loaded = true;
    });
  }

}
