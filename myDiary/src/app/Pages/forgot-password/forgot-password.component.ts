import { Component } from '@angular/core';
import { passwordmodel } from './password.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  resetmodel:passwordmodel = new passwordmodel("","")

  constructor(private spinner:NgxSpinnerService) { }
  resetpassword() {
    this.spinner.show();
    }
}
