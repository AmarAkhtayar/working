import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  @Input()
  content : string;

  ngOnInit(): void {
    if(this.content == null || this.content == "") {
      console.warn("One of the tooltips is empty!");
    }
  }


}
