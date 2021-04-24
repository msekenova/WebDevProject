import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  constructor(private bookService: BooksService) {
  }


}
