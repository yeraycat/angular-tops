import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngtops-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {

  @Input() siteTitle: string;
  @Input() pageTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
