import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  constructor(private bookService: BookService) {
  }


}
