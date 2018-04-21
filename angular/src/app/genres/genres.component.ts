import { Component, OnInit } from '@angular/core';
import { GENRES } from '../all-genres';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres = GENRES;

  bookGenre = "Best books";


  constructor() { }

  ngOnInit() {
  }

  public onClick(genre) {
    this.bookGenre = genre;
  }

}
