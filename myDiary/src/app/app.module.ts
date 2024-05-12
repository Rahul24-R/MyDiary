import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UserRegisterComponent } from './Pages/user-register/user-register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DiarymainComponent } from './Pages/diarymain/diarymain.component';
import { HttpInterceptorInterceptor } from './Services/http-interceptor.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthGuard } from './Services/AuthGuard-canActivate';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserRegisterComponent,
    DiarymainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
