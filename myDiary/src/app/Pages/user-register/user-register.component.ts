import { Component } from '@angular/core';
import { user } from './user.model';
import { UserdetailsServiceService } from 'src/app/Services/userdetails-service.service';
import * as bcrypt from 'bcryptjs';
import { ToasterService } from 'src/app/Services/toaster.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  usermodel: user = new user('', '', '', '', new Date(), new Date())
  usersnames: string[] = [];

  constructor(private userservice: UserdetailsServiceService, private toaster:ToasterService) { }
  ngOnInit(): void {
    this.userservice.getusers().subscribe(
      (data) => {
        this.usersnames = data;
      },
      (error) => {
        console.log("Error retiriving user data from server.")
        this.toaster.showError("Error retriving data from server.")
        window.alert("Error retriving data from server.")
      }
    );

  }
  async createUser() {
    console.log(this.usersnames)
    if (this.usersnames.includes(this.usermodel.UserName)) {
      console.log('Username already taken. Try again with different username')
      this.toaster.showError('Username already taken. Try again with different username.')
      window.alert('Username already taken. Try again with different username.')
    }
    else {
      this.usermodel.Password = await this.hashPassword(this.usermodel.Password);
      console.log(this.usermodel)
      this.userservice.postusers(this.usermodel).subscribe(
        ()=>{
          this.toaster.showSuccess('User created successfuly.')
          console.log('User created successfuly.')
          window.alert('User created successfuly.')
        },
        (error)=>{
          this.toaster.showError('User creation Failed.')
          console.log('User creation Failed.')
          window.alert('User creation Failed.')
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
