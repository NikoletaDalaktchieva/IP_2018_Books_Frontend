import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {BookDescription} from "./bookDescription";
import {of} from "rxjs/observable/of";
import {BooksComponent} from "./books/books.component";
import {Language} from "./language";
@Injectable()
export class BookService {


  private extractData(res: Response) {
    let body = JSON.stringify(res);
    return JSON.parse(body);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }


  constructor(private http: HttpClient) {}

  getBooks (): Observable<BookDescription[]>{
    console.log("Language id: " + LoginComponent.languageId.toString());
    return this.http.get(AppComponent.url + "/books/descriptions")
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }


  getBook (id, languageId): Observable<BookDescription>{
    let url = "";
    if(languageId){
      url =id.toString() + "/description/" + languageId.toString()
    }else url = id.toString();
    return this.http.get(AppComponent.url + "/books/" + url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getLanguages(): Observable<Language[]>{
    return this.http.get(AppComponent.url + "/languages")
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

}
