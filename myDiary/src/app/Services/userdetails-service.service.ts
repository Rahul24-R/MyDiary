import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsServiceService {
 getUserAPI:string ="";
  constructor(private http: HttpClient) { }

  getusers(){
    return this.http.get<any>(this.getUserAPI);
  }
}
