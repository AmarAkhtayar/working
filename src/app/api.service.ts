import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeCard } from './shared/models/backend-models/recipe-card.model';
import { Recipe } from './shared/models/backend-models/recipe.model';
import * as config from '../../auth_config.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private apiUrl: string = "https://api.staging.verdi.today";
  // private apiUrl : string = 'http://verdi.today:8082';
  private apiUrl : String = "https://swapmeals-api-bpmr5alz2q-ez.a.run.app";

  constructor(private http: HttpClient) {
  }



  public getRecipesMock(): Observable<any> {
    return this.http.get("./assets/recipeexample.json");
  }

  public getRecipes(): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/recipes/list", {"page": 0,
    "limit": 10});
    // return this.http.get<any>(this.apiUrl + "/recipes/list"); 
  }

  public getRecommendedRecipes() : Observable<any> {
    return this.http.get<any>(this.apiUrl + "/recipes/recommended/get");
  }
  public getTrendingRecipes() : Observable<any> {
    return this.http.get<any>(this.apiUrl + "/recipes/trending/get");
  }

  public getRecipeByID(id : string) : Observable<any> {
    let data : Recipe;
    return this.http.get<any>(this.apiUrl + "/recipes/" + id);
  }

  //test auth
  ping$(): Observable < any > {
    return this.http.post(`${config.apiUri}`, {
      "page": 0,
      "limit": 10,
    });
  }

}

