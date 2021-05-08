import { Component, OnInit } from '@angular/core';
import {User} from '../../model';
import {AuthenticationService} from '../../services/authentication.service';
import {MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  email: string;
  username: string;
  password: string;
  id: number;
  logged: boolean;
  constructor( private authenticationService: AuthenticationService,
               private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register(): void {

    const user: User = {
      id: this.id,
      email: this.email,
      username: this.username,
      password: this.password,
    };
    this.authenticationService.register(user).subscribe(
      data => {
        console.log(data);
        this.logged = true;
        window.location.reload();
        this.authenticationService.login(user).subscribe(
          ddata => {
            this.tokenStorageService.saveToken(ddata.access);
            console.log(ddata.username);
            this.tokenStorageService.saveUser(user.username);
            window.location.reload();
            alert('Thank you for joining)');
          }
        );
      },
      error => {
        console.log(error);
      }
    );

  }
}
