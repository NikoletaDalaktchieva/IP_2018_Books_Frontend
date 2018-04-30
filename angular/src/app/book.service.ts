///<reference path="../../node_modules/@angular/http/src/base_request_options.d.ts"/>
import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Type} from "@angular/compiler/src/output/output_ast";
import {RequestMethod, RequestOptions} from "@angular/http";
@Injectable()
export class BookService {
  extractData(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  url = 'http://localhost:8080/api/languages/';
  constructor(private http: HttpClient) {}

  data;

  getBooks () {

    this.data = this.http.get<Book[]>(this.url).map(this.extractData).subscribe();
    console.log(this.data);
    return null;
  }



}
