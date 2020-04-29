import { User } from './../../interfaces/user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "admin@gmail.com";
  pass="sunasara123";

  emailerror: string;
  passerror: string;
  loginData: User = null;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  login(){
    if(this.validate())
    {
      this.loginData = this.auth.login(this.email, this.pass)
      if(this.loginData == null){
       console.log("Invalid Email or password");
      } 
      else{
        localStorage.setItem('username', this.loginData.name);
        localStorage.setItem('role', this.loginData.role);
        this.checkLogin();
      }     
    }
  }

  res:boolean;

  validate(): boolean{
    this.res = true;
    if(this.email == ""){
      this.emailerror = "email is required";
      this.res = false;
    }      
    else{
      this.emailerror = null;
    }

    if(this.pass == ""){
      this.passerror = "Password is required";
      this.res = false;
    }      
    else{
      this.passerror = null;
    }

    return this.res;
  }

  checkLogin() {
    const role = localStorage.getItem('role');
    if (role != null) {
      this.router.navigate(['/' + role + '/list']);
    }
  }
}
