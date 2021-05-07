import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {BookService} from '../../services/book.service';
import {Book} from '../../model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
