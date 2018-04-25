import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BookService {

  private booksUrl = 'http://localhost:8080/api/languages';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('BookService: ' + message);
  }


  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError('getBooks', []))
      );
  }

  private handleError<Book> (operation = 'operation', result?: Book) {
    return (error: any): Observable<Book> => {


      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as Book);
    };
  }

}
