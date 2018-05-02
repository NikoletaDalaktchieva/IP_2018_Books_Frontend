import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  static languageId = 1;
  singUp = false;
  @ViewChild('name') input:any;
  json;

  ngOnInit() {
  }

  closeForm(){return HeaderComponent.closeLogInForm();}
  openSingUpForm(){
    this.singUp = true;
  }
  openLogInForm() {
    this.singUp = false;
  }


  logIn(u_name: string, u_password: string){
    this.json = {
      name : u_name,
      password : u_password
    };
    this.userService.logIn(this.json);
    this.json = null;
  }

  singingUp(name: string, email:string ,password: string, confirmPassword: string) {
    if(password == confirmPassword) {
      this.json = {
        name : name,
        email : email,
        password : password
      };
      this.userService.singUp(this.json);
      this.json = null;
    }else console.log("Wrong password");
  }


}
