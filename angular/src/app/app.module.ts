import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GenresComponent } from './genres/genres.component';

import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {BookService} from "./book.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenresComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
  ],
  providers: [BookService, MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
