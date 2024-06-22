import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Pages/user-register/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsServiceService {
 UserAPI:string ="https://rahulportfolio.somee.com/api/register";
 loginAPI:string ="https://rahulportfolio.somee.com/api/login/ValidateUser";
 resetpasswordAPI:string ="https://rahulportfolio.somee.com/api/reset/ResetPassword";
 
  constructor(private http: HttpClient) { }

  getusers(){
    return this.http.get<any>(this.UserAPI);
  }

  postusers(user:user){
    return this.http.post(this.UserAPI,user);
  }
  
  validateUser(username:string){
    const body ={username : username}
    return this.http.get<any>(`https://rahulportfolio.somee.com/api/login/ValidateUser?username=${username}`);
  }

  resetpassword(username:string,email:string){
    return this.http.get<any>(this.resetpasswordAPI+`?username=${username}&email=${email}`);
  }
}
