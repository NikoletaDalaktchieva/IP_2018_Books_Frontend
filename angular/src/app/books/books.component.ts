import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books: Book[];
    title ;


  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks();
  }


  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(): void {
    this.title = 2;
    console.log('scope is ');
    this.bookService.getBooks()
      .subscribe(books => this.books = books);

    this.title = this.title+ 1;

  }

}
