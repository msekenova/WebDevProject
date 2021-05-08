import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BookInfoComponent } from './components/book-info/book-info.component';
// import {AuthInterceptor} from './AuthInterceptor';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {authInterceptorProviders} from './interceptors/auth.interceptor';
import { CommentComponent } from './components/comment/comment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorInfoComponent } from './components/author-info/author-info.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShoppingCartComponent,
    AuthorizationComponent,
    LoginComponent,
    ShopComponent,
    BookInfoComponent,
    CommentComponent,
    AuthorComponent,
    NavigationBarComponent,
    AuthorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
