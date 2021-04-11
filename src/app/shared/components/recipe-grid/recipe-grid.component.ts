import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.less']
})
export class RecipeGridComponent implements OnInit {

  constructor() { }

  @Input()
  recipes : any;

  ngOnInit(): void {
  }

}
