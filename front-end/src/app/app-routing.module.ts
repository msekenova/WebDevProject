import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {LoginComponent} from './components/login/login.component';
import {ShopComponent} from './components/shop/shop.component';
import {BookInfoComponent} from './components/book-info/book-info.component';
import {AccountInfoComponent} from './components/account-info/account-info.component';
import {CommentComponent} from './components/comment/comment.component';
import {AuthorComponent} from './components/author/author.component';
import {AuthorInfoComponent} from './components/author-info/author-info.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: BookInfoComponent},
  {path: 'shop/comments', component: CommentComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'authors', component: AuthorComponent},
  {path: 'authors/:id', component: AuthorInfoComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
