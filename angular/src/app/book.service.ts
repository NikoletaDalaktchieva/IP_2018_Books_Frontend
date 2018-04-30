import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class BookService {

  url = 'http://localhost:8080/api/languages/1/';

  constructor(private http: HttpClient) {}


  public getBooks()  {
      return this.http.get<Book>(this.url);
  }



}
