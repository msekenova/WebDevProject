import { Component, OnInit } from '@angular/core';
import {User} from '../../model';
import {AuthenticationService} from '../../services/authentication.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  email: string;
  username: string;
  password: string;
  logged: boolean;
  constructor( private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register(): void {

    const user: User = {
      email: this.email,
      username: this.username,
      password: this.password
    };
    this.authenticationService.register(user).subscribe(
      data => {
        console.log(data);
        this.logged = true;
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
    // this.dialogRef.close();
  }
}
