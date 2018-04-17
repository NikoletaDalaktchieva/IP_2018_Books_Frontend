import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = require('./img/logo1.png');
  search = require('./img/search.png');
  logout = require('./img/logout.png');

  constructor() { }

  ngOnInit() {
  }

}
