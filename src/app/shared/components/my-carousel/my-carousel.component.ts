import { Component, Input, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';
import Hammer from 'hammerjs';
import { timer } from 'rxjs';

@Component({
  selector: 'myCarousel',
  template: `
    <div class="controls" *ngIf="showButtons == 'true' && direction=='y'">
      <div class="arrow up" id="btn-up" role="button" (click)="movey(-1)"></div>
      <div class="arrow" id="btn-down"role="button" (click)="movey(1)"></div> 
    </div>
    <button *ngIf="showButtons == 'true' && direction=='x'" class="prev" (click)="show(-1)"></button>
    <button *ngIf="showButtons == 'true' && direction=='x' "class="next" (click)="show(1)"></button>
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [`./my-carousel.component.less`],
  host: { '(scroll)': 'scroll()' }
})
export class MyCarouselComponent implements AfterViewInit {
  index: number = 0;

  @Input()
  carouselId: string;

  @Input()
  direction: string; //can be x or y

  @Input()
  showButtons: string; //can be true or false

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    var slider = document.getElementById(this.carouselId);


    let elements = this.elRef.nativeElement.querySelectorAll('.card');
    // if (elements[0] == undefined) { console.log(this.carouselId) };
    if (this.direction == "y") {
      elements[0].style.opacity = 1;
    }

    if (this.index == 0) {
      var btnup = document.getElementById("btn-up"); //disable btn up at start
      if (btnup != null) {
        btnup.style.pointerEvents = "none";
        btnup.style.opacity = "50%";
      }
    }

  }

  playAnimation(slider) {
    slider.classList.add("carousel-animation");
    const countdown = timer(600);
    const subscribe = countdown.subscribe(val => {
      slider.classList.remove("carousel-animation");
      // slider.style.touchAction = "auto";
    })
  }

  scroll() {
    var slider = document.getElementById(this.carouselId);


    // if (slider.clientWidth + slider.scrollLeft >= slider.scrollWidth) { //if at end of scroll 
    //   var hammer = new Hammer(slider);

    //   hammer.on('swipeleft', () => { //forward swipe
    //     this.playAnimation(slider);
    //     slider.style.touchAction = "auto";
    //   })
    //   hammer.on('swiperight', () => {
    //     // slider.style.touchAction = "auto";
    //   })

    // }
    // else {
    //   if(hammer != null) {
    //     hammer = null;
    //   }
    // };
    // if (slider.scrollLeft == 0) { //if at beginning of scroll
    //   var hammer2 = new Hammer(slider);

    //   hammer2.on('swiperight', () => { //forward swipe

    //     slider.classList.add("carousel-animation");
    //     const countdown = timer(600);
    //     const subscribe = countdown.subscribe(val => {
    //       slider.classList.remove("carousel-animation");

    //       slider.style.touchAction = "auto";
    //     })
    //   })
    // }
    // else {
    //   if(hammer2 != null) {
    //     hammer2 = null;
    //   }
    // }
  }


  movey(increase) {
    let elements = this.elRef.nativeElement.querySelectorAll('.card');
    let btnup = document.getElementById("btn-up");
    let btndown = document.getElementById("btn-down");

    elements[this.index].style.opacity = 1;

    if (this.index == 0 && increase < 0) { //if card is first
      // elements[this.index].style.opacity = 0.6;
      this.index = 0;
    }
    else if (this.index == elements.length - 1 && increase > 0) { //if card is last

      // elements[this.index].style.opacity = 0.6;
      this.index = elements.length - 1;
    }
    else {
      // elements[this.index].style.opacity = 0.6;
      this.index = (this.index + elements.length + increase) % elements.length;
    }


    //disable buttons when needed
    if (this.index == 0) { //disable up button when at top
      btnup.style.pointerEvents = "none";
      btnup.style.opacity = "50%";
    }
    else {
      btnup.style.pointerEvents = "auto";
      btnup.style.opacity = "100%";
    }

    if (this.index == elements.length - 1) { //disable down button when at bottom
      btndown.style.pointerEvents = "none";
      btndown.style.opacity = "50%";
    } else {
      btndown.style.pointerEvents = "auto";
      btndown.style.opacity = "100%";
    }


    elements[this.index].scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest', //x position
      block: 'start' //y position
    });

    elements[this.index].style.opacity = 1;



  }

  show(increase) {
    let elements = this.elRef.nativeElement.querySelectorAll('.card');


    let card = <HTMLScriptElement>elements[0];
    let cardW = card.offsetWidth;
    let windowW = this.elRef.nativeElement.offsetWidth;
    let cardsOnW = windowW / cardW + 1;

    if (this.index == 0 && increase < 0) { //if at start and scrolled back
      // this.index = elements.length - Math.floor(cardsOnW) + 1;
      this.index = 0;
    } else {
      this.index = (this.index + elements.length + increase) % elements.length;
    }

    if (this.index - 1 > elements.length - Math.floor(cardsOnW)) { //if at end and scrolled forward
      // this.index = 0;
      this.index = elements.length - 1;
    }


    elements[this.index].scrollIntoView({
      behavior: 'smooth',
      inline: 'start', //x position
      block: 'nearest' //y position
    });



  }
}
declare global {
  interface Window {
    mySwipe: any;
  }
}
