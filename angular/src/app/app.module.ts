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
import { LoginComponent } from './login/login.component';
import {UserService} from "./user.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenresComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [BookService, MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
