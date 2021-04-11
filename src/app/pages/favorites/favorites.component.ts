import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less']
})
export class FavoritesComponent implements OnInit {

  recipes;
  categories : any[] = [];
  activeCategories : string[] = [];
  breadCrumbs : Breadcrumb[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.setBcs();
    this.apiService.getRecipesMock().subscribe(data => {
      this.recipes = data;
      this.recipes.forEach(recipe => {
        this.pushIfUnique(recipe.category.time_of_day?.name);
        this.pushIfUnique(recipe.category.type_1?.name);
        this.pushIfUnique(recipe.category.type_2?.name);
        this.pushIfUnique(recipe.category.cuisine?.name);
        if (recipe.category.diet != null) {
          // console.log(recipe.category.diet);
          recipe.category.diet.forEach(d => {
            d.name ? this.pushIfUnique(d.name) : null;
          });
        }
      });
      
    })
  }

  pushIfUnique(value) {
    let present;
    this.categories.forEach(c => {
      if(c.name == value) {
        present = true;
      }
    });
    if(!present) {
      this.categories.push({name: value, active: false});
    }
  }

  setBcs() {
    let favBc = new Breadcrumb("My favourites", "/favourites");
    this.breadCrumbs.push(favBc);
  }

  toggleCat(cat : any) {
    for (let i = 0; i < this.categories.length; i++) {
      if(this.categories[i] == cat) {
        this.categories[i].active = !this.categories[i].active;
      }
      
    }
  }

}
