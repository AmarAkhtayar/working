import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {

  @Input()
  top : boolean = false;

  @Input()
  placeholder : string = "Find recipes, ingredients, cooks";

  uniqueId : string = "id" + Math.random();

  constructor() { }

  ngOnInit(): void {
  }

}
