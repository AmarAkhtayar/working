import { Component, InjectionToken, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-switch',
  templateUrl: './grocery-switch.component.html',
  styleUrls: ['./grocery-switch.component.less']
})
export class GrocerySwitchComponent implements OnInit {

  @Input()
  page : string = "groceries";

  constructor() { }
  ngOnInit(): void {
  }

}
