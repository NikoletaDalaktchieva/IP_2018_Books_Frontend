import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import {BookService} from "../book.service";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs/observable/of";
import {BooksComponent} from "../books/books.component";
import {BookDescription} from "../bookDescription";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private bookService: BookService) { }


  ngOnInit() {
    this.getBook();
  }


  book: BookDescription;

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id " + id);

    this.bookService.getBook(id).subscribe(
      book =>{ this.book = book;}
    );
  }

  getImg(book : Book){
    return require("" + book.coverPath);
  }
}
