import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooking-timer',
  templateUrl: './cooking-timer.component.html',
  styleUrls: ['./cooking-timer.component.less']
})
export class CookingTimerComponent implements OnInit {

  constructor() { }

  @Input()
  minutes : number = 60;

  cookTimeStroke;

  ngOnInit(): void {
    this.calculateCircleFill();
  }

  private calculateCircleFill() {

    if (this.minutes < 60) {
      this.cookTimeStroke = this.minutes * 1.2666666;
      console.log("test stroke", this.cookTimeStroke);
    }
  }

}
