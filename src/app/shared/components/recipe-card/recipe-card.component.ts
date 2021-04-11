import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.less']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  recipe : any;

  @Input()
  category : boolean = false;

  isCategory : boolean = false;
  isSponsored : boolean = false;

  isFavorite : boolean = false;

  @Input()
  inCarousel : boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(this.category != null  && this.category != false) {
      this.isCategory = true;
      this.isSponsored = false;
    }
    // console.log(this.recipe.sponsored);
    if(this.recipe.sponsored == true) {
      // console.log('dkfjaskldfjkeawjfklaejf');
      this.isSponsored = true;
    }
  }

  toggleFavorite(e) {
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite) {
      e.target.children[0].style.fill = "#BC2872";
    }
    else {
      e.target.children[0].style.fill = "none";
    }
    e.preventDefault();
    // e.stopPropagation();
  }

  getUrlTitle() : string {
    return this.recipe.title.replace(/ /g,"-").replace(/,/g,"");
  }


}
