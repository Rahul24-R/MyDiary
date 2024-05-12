import { Component } from '@angular/core';
import { user } from './user.model';
import { UserdetailsServiceService } from 'src/app/Services/userdetails-service.service';
import * as bcrypt from 'bcryptjs';
import { ToasterService } from 'src/app/Services/toaster.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  usermodel: user = new user('', '', '', '', new Date(), new Date())
  usersnames: string[] = [];
SpinnerMessage: any;

  constructor(private userservice: UserdetailsServiceService, private toaster:ToasterService,private router:Router,private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
    this.SpinnerMessage="Fetching Data"
    this.spinner.show()
    this.userservice.getusers().subscribe(
      (data) => {
        this.spinner.hide();
        this.usersnames = data;
      },
      (error) => {
        this.spinner.hide();
        console.log("Error retiriving user data from server.")
        this.toaster.showError("Error retriving data from server.")
      }
    );

  }
  async createUser() {
    this.SpinnerMessage ="Creating Account"
    console.log(this.usersnames)
    if (this.usersnames.includes(this.usermodel.UserName)) {
      console.log('Username already taken. Try again with different username')
      this.toaster.showError('Username already taken. Try again with different username.')
    }
    else {
      this.usermodel.Password = await this.hashPassword(this.usermodel.Password);
      console.log(this.usermodel)
      this.spinner.show();
      this.userservice.postusers(this.usermodel).subscribe(
        ()=>{
          this.toaster.showSuccess('User created successfuly.')
          console.log('User created successfuly.')
          this.router.navigate(['/login'])
          this.spinner.hide();
        },
        (error)=>{
          this.toaster.showError('User creation Failed.')
          console.log('User creation Failed.')
          this.spinner.hide();
        }
      )
    }

    this.usermodel=new user('','','','',new Date,new Date);
  }

  hashPassword(password: string) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  buttonText: string = "Create";
}
