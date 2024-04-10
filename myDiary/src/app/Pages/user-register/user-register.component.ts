import { Component } from '@angular/core';
import { user } from './user.model';
import { UserdetailsServiceService } from 'src/app/Services/userdetails-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  usermodel:user = new user ('','','','',new Date(), new Date())
  usersnames:string[] = [];
  
  constructor(private userservice:UserdetailsServiceService) {}
  ngOnInit(): void {
    this.userservice.getusers().subscribe(
      (data)=>{
        this.usersnames=data;
      },
      (error)=>{
        console.log("Error retiriving user data from server.")
      }
    );
    
  }
  createUser() {
    
  }
  buttonText: string = "Create";

}
