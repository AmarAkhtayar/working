import { removeSummaryDuplicates } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'app-grocery-recipe',
  templateUrl: './grocery-recipe.component.html',
  styleUrls: ['./grocery-recipe.component.less']
})
export class GroceryRecipeComponent implements OnInit {

  recipes;
  recipe;
  adjRecipe;

  removedRecipes: any[] = [];
  inactiveRecipes = [];

  warningState: string = "note"; //note, adjust, closed 

  breadCrumbs : Breadcrumb[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecipesMock().subscribe(data => {
      this.recipes = data;
      this.recipe = data[0];
      console.log(this.recipe);
    })
    let recBc = new Breadcrumb("My recipes", "/selected-recipes");
    this.breadCrumbs.push(recBc);


  }

  toggleIngredients(id: string, e) {
    var list = document.getElementById('ing-list-' + id);
    var svg = document.getElementById('svg-' + id);
    if (list.style.display == 'none') {
      list.style.display = 'block';
      svg.classList.add('turn');
    }
    else {
      list.style.display = 'none';
      svg.classList.remove('turn');
    }

  }

  toggleRecipe(id) {
    var recipe = document.getElementById('recipe-' + id);
    var top = <HTMLElement>recipe.childNodes[0];
    var bottom = <HTMLElement>recipe.childNodes[1];
    var box = <HTMLElement>top.childNodes[1];
    var dlete = <HTMLElement>top.childNodes[2];
    var img = <HTMLElement>top.childNodes[0];
    var label = <HTMLElement>box.childNodes[0].childNodes[0].childNodes[2];


    if (bottom.style.opacity == '0.4') {
      //set active
      bottom.style.opacity = '1';
      img.style.opacity = '1';
      label.style.opacity = '1';
      //TODO: remove recipe from inactive list - local storage
    } else {
      //set inactive
      bottom.style.opacity = '0.4';
      img.style.opacity = '0.4';
      label.style.opacity = '0.4';
      //TODO: add recipe to inactive list - local storage
    }
  }

  openServingsPopup(recipe) {
    document.getElementById('servingsPopup').style.display = 'flex';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    this.adjRecipe = recipe;
  }

  closeServingsPopup(e) {
    //if user clicks outside of popup or if user click on the cross
    console.log(e.target);
    if (e.target.id == 'servingsPopup' || e.target.id == 'closePopup' || e.target.id == 'savePopup') {
      //close popup
      document.getElementById('servingsPopup').style.display = 'none';
      document.getElementsByTagName('html')[0].style.overflow = 'visible';
    }
  }
  openSupermarketPopup() {
    document.getElementById('superPopup').style.display = 'flex';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }
  closeSupermarketPopup(e) {
    //if user clicks outside of popup or if user click on the cross
    if (e.target.id == 'superPopup' || e.target.id == 'closePopup') {
      //close popup
      document.getElementById('superPopup').style.display = 'none';
      document.getElementsByTagName('html')[0].style.overflow = 'visible';
    }
  }

  adjustServings(type: string, recipe: any) {
    console.log(recipe);
    if (type == 'inc') {
      recipe.serves++;
    }
    if (type == 'dec') {
      recipe.serves--;
    }
  }

  removeRecipeFromList(i) {
    this.removedRecipes.push(this.recipes[i]);
    localStorage.setItem("removedRecipes", JSON.stringify(this.removedRecipes));
    // console.log(this.recipes[i].title);
    this.recipes.splice(i, 1);
    console.log(localStorage.getItem("removedRecipes"));
  }
  clearList() {
    this.removedRecipes = this.removedRecipes.concat(this.recipes);
    localStorage.setItem("removedRecipes", JSON.stringify(this.removedRecipes));
    this.recipes = [];
    console.log(localStorage.getItem("removedRecipes"));
  }

  showWarning(): boolean {
    return localStorage.getItem('editAmount') == 'true';
  }
  setWarningState(state: string) {
    if (state == 'acceptRisk') {
      this.warningState = "adjust";
    }
  }
  getUrlTitle(t): string {
    return t.replace(/ /g, "-").replace(/,/g, "");
  }

}
