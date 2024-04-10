import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UserRegisterComponent } from './Pages/user-register/user-register.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'register',component:UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
