import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {LoginComponent} from './login/login.component';
import {ShopComponent} from './shop/shop.component';
import {BookInfoComponent} from './book-info/book-info.component';
import {AccountInfoComponent} from './account-info/account-info.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account-info', component: AccountInfoComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:title', component: BookInfoComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
