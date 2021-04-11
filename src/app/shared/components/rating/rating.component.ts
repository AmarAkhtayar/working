import {
  Component,
  OnInit,
  Input,
  ɵConsole,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less'],
})
export class RatingComponent implements OnInit {
  @Input()
  fill: number = 0;

  @Input()
  extraSpacing: boolean = false;

  @Input()
  fillColor: string = '#439B3E';

  @Input()
  emptyColor: string = '#333333';

  @Input()
  clickable: boolean = false;

  @Input()
  total: number = 5;

  @Input()
  figure: string = 'star';
  /* Possible figures: star, dot, pepper, ice */

  filled: any[] = [];
  notfilled: any[] = [];

  imageFillPath = '/assets/' + this.figure + '.svg';
  imageNotFillPath = '/assets/' + this.figure + '-notfilled.svg';

  @Output()
  ratingOutput = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.imageFillPath = '/assets/' + this.figure + '.svg';
    this.imageNotFillPath = '/assets/' + this.figure + '-notfilled.svg';

    this.fill = parseInt(this.fill.toString());
    this.filled = Array.from(
      new Array(this.fill),
      (x, i) => this.fill - i
    ).reverse(); //create array of length fill
    // console.log(this.filled);

    let notfill: number;
    notfill = this.total - this.fill;
    this.notfilled = Array.from(
      new Array(notfill),
      (x, i) => this.fill + i + 1
    );
    // console.log(this.notfilled);

    //Set default colors for star figure only
    if (this.figure == 'star' && this.fillColor == '#439B3E') {
      this.fillColor = '#F8CF1C';
      this.emptyColor = '#CDCDD0';
    }
  }

  fillTill(till: number, e) {
    if (this.clickable == true) {
      this.fill = till;
      this.ngOnInit();
      this.ratingOutput.emit(till);
      e.preventDefault();
    }
  }
}
