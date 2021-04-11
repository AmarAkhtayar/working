import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { RecipeCard } from 'src/app/shared/models/backend-models/recipe-card.model';
import { createThis } from 'typescript';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.less']
})
export class InspirationComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  recipes: any[] = [];
  trendingRecipes : RecipeCard[] =[];

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe(data => {
      console.log(data);
      this.recipes= data.result;
      this.recipes.forEach(r => {
        console.log(r.image);
        r.image = "assets/exfood8.png";
        console.log(r.image);
      });
    });
    this.apiService.getTrendingRecipes().subscribe(data => {
      this.trendingRecipes = data.result;
    })
  }

}
