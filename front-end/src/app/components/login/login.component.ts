import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorizationComponent} from '../authorization/authorization.component';
import {AuthenticationService} from '../../services/authentication.service';
import {MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  constructor(private tokenStorageService: TokenStorageService,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  enter(): void {
    const user = {
      username: this.username,
      password: this.password,
    };
    this.authenticationService.login(user).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.access);
        console.log(data.username);
        this.tokenStorageService.saveUser(user.username);
        window.location.reload();
        // this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.message = 'Invalid credentials';
      }
    );
  }
}
