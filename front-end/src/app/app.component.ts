import {Component, OnInit} from '@angular/core';
import {BookService} from './services/book.service';
import {AuthenticationService} from './services/authentication.service';
import {TokenStorageService} from './services/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LoginComponent} from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  logged = false;
  user = null;
  constructor(private authService: AuthenticationService,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              private matDialog: MatDialog) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (this.tokenStorageService.getToken() === null) {
      this.logged = false;
      console.log('not logged yet');
    } else {
      this.logged = true;
      console.log('successfully logged');
      this.user = this.tokenStorageService.getUser();
    }
  }

  // login(): void {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.height = '400px';
  //   dialogConfig.width = '550px';
  //   dialogConfig.backdropClass = 'dark-backdrop';
  //   const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  // }

  // tslint:disable-next-line:typedef
  logout() {
    this.logged = false;
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  // profile(): void {
  //   if (this.tokenStorageService.getToken() === null) {
  //     alert('You need to login first to view your profile');
  //   } else {
  //     this.router.navigate(['/account-info/', this.tokenStorageService.getUser()]).then(
  //       nav => {
  //         console.log(nav);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   }
  // }

}
