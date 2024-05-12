import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './user.model';
import * as bcrypt from 'bcryptjs';
import { UserdetailsServiceService } from 'src/app/Services/userdetails-service.service';
import { ToasterService } from 'src/app/Services/toaster.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
   usermodel:user = new user("","");
  constructor(private router:Router,private userdetail:UserdetailsServiceService,private toaster:ToasterService,private spinner:NgxSpinnerService) {}

  async login(){
    console.log("User log-in.")
    this.spinner.show();
    this.userdetail.validateUser(this.usermodel.username).subscribe(
      async (data)=>{
        console.log("User logged-in attempt");
        if(await bcrypt.compare(this.usermodel.password,data.password)){
          console.log("Password correct.");
          this.toaster.showSuccess("Login Successful");
          this.router.navigate(['/diarymain']);
          this.spinner.hide();
        }
        else{
          console.log("Wrong password.");
          this.toaster.showError("Login Failed.Wrong Password");
          this.spinner.hide();
        }
      },
      (error)=>{
        console.log(error.status);
        if(error.status === 404){
          console.log("User not Found");
          this.toaster.showError("User not found");
          this.spinner.hide();
        }
      }
    )
  }

  registerpage() {
    this.router.navigate(['/register'])
  }

  hashPassword(password: string) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

}
