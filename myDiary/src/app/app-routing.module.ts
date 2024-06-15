import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UserRegisterComponent } from './Pages/user-register/user-register.component';
import { DiarymainComponent } from './Pages/diarymain/diarymain.component';
import { AuthGuard } from './Services/AuthGuard-canActivate';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:UserRegisterComponent},
  {path:'diarymain',component:DiarymainComponent,canActivate:[AuthGuard]},
  {path:'passwordreset',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
