import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { User} from './../interfaces/user'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseURL = 'http://localhost:3000/';
  //UserData: User[];
  data: User;
  UserData: User[] = [
    {id:1, name:'Sunasara', email:'admin@gmail.com', password:'sunasara123', role: 'admin'},
    {id:2, name:'SajidAli', email:'customer@gmail.com', password:'sunasara123', role: 'customer'},
  ];
  constructor() { 

  }

  // headerOption = {
  //   headers: new HttpHeaders({
  //     'Content-type': 'application/json'
  //   })
  // };
  
  // login(logingemail: string, loginpassword: string): promise<User>{
  //   this.getUserData().subscribe((res: User[]) => 
  //     {
  //       this.UserData = res;
  //       console.log(this.UserData);
  //       this.data =  this.UserData.find( ({ email }) => email == logingemail);
  //       console.log(this.data);
  //       if(this.data != null)
  //       {
  //         if(this.data["password"] != loginpassword )
  //           this.data = null;        
  //       } 
  //       return this.data     
  //     });
  // }

  // getUserData(): Observable<User[]>{
  //   return this.http.get<User[]>(this.baseURL + "User", this.headerOption);
  // }
  login(logingemail: string, loginpassword: string): User{
    this.data =  this.UserData.find( ({ email }) => email == logingemail);
      if(this.data != null)
      {
        if(this.data["password"] != loginpassword )
        {
          this.data = null;
        }                
      }      
    return this.data;
  }
}
