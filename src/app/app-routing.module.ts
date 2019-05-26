import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',
   component: HomeComponent},
  {path: 'home',
   component: HomeComponent},
  {path: 'sign',
   component: SignComponent},
   {path: 'login',
   component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
