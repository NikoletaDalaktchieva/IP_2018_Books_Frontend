import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "./app.component";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  logIn(json){
    console.log(json);
    return this.http.post(AppComponent.url + "/users/login", json).subscribe();
  }


  singUp(json){
    console.log(json);
    return this.http.post(AppComponent.url + "/users", json).subscribe();
  }

}
