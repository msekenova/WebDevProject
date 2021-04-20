import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CategoryComponent} from './category/category.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
