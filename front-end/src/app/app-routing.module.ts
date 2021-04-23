import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {BooksComponent} from './books/books.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'books', component: BooksComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
