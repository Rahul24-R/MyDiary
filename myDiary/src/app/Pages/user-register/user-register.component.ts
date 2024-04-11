import { Component } from '@angular/core';
import { user } from './user.model';
import { UserdetailsServiceService } from 'src/app/Services/userdetails-service.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  usermodel: user = new user('', '', '', '', new Date(), new Date())
  usersnames: string[] = [];

  constructor(private userservice: UserdetailsServiceService) { }
  ngOnInit(): void {
    this.userservice.getusers().subscribe(
      (data) => {
        this.usersnames = data;
      },
      (error) => {
        console.log("Error retiriving user data from server.")
      }
    );

  }
  async createUser() {
    console.log(this.usersnames)
    if (this.usersnames.includes(this.usermodel.UserName)) {
      console.log('Username already taken. Try again with different username')
    }
    else {
      this.usermodel.Password = await this.hashPassword(this.usermodel.Password);
      console.log(this.usermodel)
      this.userservice.postusers(this.usermodel).subscribe(
        ()=>{
          console.log('User created successfuly.')
        },
        (error)=>{
          console.log('UserCreation Failed.')
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
