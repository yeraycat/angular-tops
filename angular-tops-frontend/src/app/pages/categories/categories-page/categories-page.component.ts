import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngtops-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  categories = [
    'a',
    'b'
  ];

  constructor() { }

  ngOnInit() {
  }

}
