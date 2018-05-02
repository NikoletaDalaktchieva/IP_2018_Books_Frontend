import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import {BookService} from "../book.service";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs/observable/of";
import {BooksComponent} from "../books/books.component";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private heroService: BookService) { }


  ngOnInit() {
    this.getBook();

  }


  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    BooksComponent.getBook(id);
  }
}
