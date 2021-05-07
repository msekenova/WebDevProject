import { Component, OnInit } from '@angular/core';
import {Author, Book} from '../../model';
import {BookService} from '../../services/book.service';
import {CartService} from '../../services/cart.service';
import {map} from 'rxjs/operators';
import {AuthorService} from '../../services/author.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AuthorInfoComponent} from '../author-info/author-info.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  searchTerm: string;
  categories: string[];
  authors: Author[];
  showResults = false;

  constructor(private authorService: AuthorService,
              private router: Router,
              private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  // tslint:disable-next-line:typedef
  getAuthors() {
    this.authorService.getAuthors().subscribe(((authors) => {
        this.authors = authors;
      }
    ));
  }

  search(): void {
    console.log('here');
    this.searchTerm = this.searchTerm.toLowerCase();
    this.showResults = true;
    this.authorService.getAuthors().pipe(map(author =>
      author.filter(aauthor => aauthor.name.toLowerCase().includes(this.searchTerm)))).subscribe(books => this.authors = books);
  }

}
