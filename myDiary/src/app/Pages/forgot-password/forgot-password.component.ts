import { Component } from '@angular/core';
import { passwordmodel } from './password.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserdetailsServiceService } from 'src/app/Services/userdetails-service.service';
import { ToasterService } from 'src/app/Services/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  resetmodel:passwordmodel = new passwordmodel("","")

  constructor(private spinner:NgxSpinnerService, private userservice:UserdetailsServiceService,private toasterservice:ToasterService,private router:Router) { }
  resetpassword() {
    this.spinner.show();
    this.userservice.resetpassword(this.resetmodel.username,this.resetmodel.email).subscribe((data)=>{
      console.log('user password reset successful.');
      this.spinner.hide();
      this.toasterservice.showSuccess("Password reset successful. Check mail.");
      this.router .navigate(['/login']);
    },
    (error)=>{
      console.log("Password reset failed.");
      this.spinner.hide();
      this.toasterservice.showError("Password reset failed.");
    }
    )
    }
}
