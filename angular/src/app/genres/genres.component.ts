import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres = ['Science fiction', 'Satire', 'Drama', 'Adventure', 'Romance', 'Mystery', 'Horror', 'Travel',
            'Children\'s', 'Science', 'History', 'Poetry', 'Encyclopedias', 'Comics', 'Art', 'Cookbooks', 'Diaries',
            'Biographies', 'Autobiographies', 'Fantasy'];

  constructor() { }

  ngOnInit() {
  }

}
