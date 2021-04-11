import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  breadCrumbs : Breadcrumb[] = [];

  ngOnInit(): void {
    let catBc = new Breadcrumb("Categories", "/search");
    this.breadCrumbs.push(catBc);
  }

}
