import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private sub: any;
  books: Book[];
    book: Book;
    public title = 0;


  constructor(private bookService: BookService
  ) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks();
  }

}
