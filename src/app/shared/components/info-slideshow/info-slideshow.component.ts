import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-slideshow',
  templateUrl: './info-slideshow.component.html',
  styleUrls: ['./info-slideshow.component.less']
})
export class InfoSlideshowComponent implements OnInit {

  slideNr = 1;

  constructor() { }

  ngOnInit(): void {
    let prev = document.getElementById('prev').style;

    prev.opacity = '48%';
    prev.pointerEvents = 'none';
    prev.cursor = 'default';
  }

  toSlide(i: number) {
    this.slideNr = this.slideNr + i;
    document.getElementById('slide-1').style.marginLeft = '-' + (this.slideNr - 1) + '00vw';

    let prev = document.getElementById('prev').style;
    let next = document.getElementById('next').style;
    if (this.slideNr == 1) {
      prev.opacity = '48%';
      prev.pointerEvents = 'none';
      prev.cursor = 'default';
    }
    else if (this.slideNr == 3) {
      next.opacity = '48%';
      next.pointerEvents = 'none';
      next.cursor = 'default';
    }
    else {
      prev.opacity = '100%'
      next.opacity = '100%'

      prev.pointerEvents = 'all';
      next.pointerEvents = 'all';

      prev.cursor = 'pointer';
      next.cursor = 'pointer';
    }

  }

}
