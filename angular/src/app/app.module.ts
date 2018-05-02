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
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from "@angular/forms";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("299339477600-6e8tk6b8c3qfnthfds2b9j916odoj8cm.apps.googleusercontent.com")
      },
    ]);
  return config;
}

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
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    BookService,
    MessageService,
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
