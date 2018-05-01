import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
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

  url = 'http://localhost:8080/api/languages/';
  constructor(private http: HttpClient) {}

  getBooks (): Observable<Book[]>{
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }



}
