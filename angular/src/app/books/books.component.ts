import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import {Observable} from "rxjs/Observable";
import {BookDescription} from "../bookDescription";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  config: { heroesUrl: any; textfile: any; };

  observableBooks: Observable<BookDescription[]>;
  books: BookDescription[];
  static books: BookDescription[];
  descriotion ="alaabajndshnhdjs";

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.observableBooks = this.bookService.getBooks();
    this.observableBooks.subscribe(
      books => this.books = books);

    BooksComponent.books = this.books;
  }

  getImg(book : Book){
    return require("" + book.coverPath);
  }


  static getBook(id){
    console.log(id);
      let book = this.books.find(book => book.id == id);
      console.log("\n Book " + book);
  }

}
