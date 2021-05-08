import { Component, OnInit } from '@angular/core';
import {Author, Book} from '../../model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthorService} from '../../services/author.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {

  author: Author = null;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private authorService: AuthorService,
              ) { }

  ngOnInit(): void {
    this.getAuthor();
  }
  // tslint:disable-next-line:typedef
  getAuthor(){
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.authorService.getAuthor(id).subscribe((author) => {
          this.author = author;
        });
    });
  }

  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }


}
