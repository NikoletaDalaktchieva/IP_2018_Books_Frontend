import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {GenresComponent} from "./genres/genres.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books', component: BooksComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

