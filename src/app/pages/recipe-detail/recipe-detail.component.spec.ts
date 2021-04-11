import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecipeDetailComponent } from './recipe-detail.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/api.service';
import { Observable, of } from 'rxjs';
import { SEOService } from 'src/app/shared/services/seo.service';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;
  let apiService: ApiService;
  let seoService : SEOService;
  let recipes;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [RecipeDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    apiService = TestBed.inject(ApiService);
    seoService = TestBed.inject(SEOService);
    //let recipes = apiService.getRecipes().subscribe()
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;


    let testRecipesText = '{"id":"00563295f7","title":"Espresso Mini Muffins with Chocolate Ganache","picture":"assets/exfood8.png","author":{"id":1,"display_name":"Max Mustermann","number_recipes":5,"number_followers":10},"rating":3.5,"times_recipe_cooked":20,"generated":true,"category":{"time_of_day":{"id":4,"name":"dessert"},"type_1":{"id":1,"name":"muffins"},"type_2":{"id":1,"name":"Espresso Mini Muffins"},"cuisine":{"id":1,"name":"American"},"diet":[{"id":1,"name":"gluten free"}]},"time":{"cooking":10,"preparation":10,"total":20},"tags":["tag1","tag2"],"serves":12,"nutrients":{"carbs":{"value":210,"unit":"kcal"},"carbohydrates":{"value":10,"unit":"gram"},"protein":{"value":10,"unit":"gram"},"saturated_fat":{"value":10,"unit":"gram"},"unsaturated_fat":{"value":10,"unit":"gram"},"salt":{"value":10,"unit":"gram"},"fibers":{"value":10,"unit":"gram"}},"allergens":["allergen tag","antoher allergen tag"],"taste_profile":{"sweet":1,"sour":0,"umami(savoury)":3,"salty":2,"bitter":0,"hot+spicy":0,"cold+mint":0},"user_comments":[{"rating":4.5,"titel":"Some Titel","comment":"tasty","date_time":"hh:mm DD.MM.YYYY"},{"rating":1,"titel":"Bah bah","comment":"To much ingredients. To much time. Taste is very wrong. Dont ever try to cook this. This is not good!!!","date_time":"hh:mm DD.MM.YYYY"},{"rating":1,"titel":"Bah bah","comment":"To much ingredients. To much time. Taste is very wrong. Dont ever try to cook this. This is not good!!!","date_time":"hh:mm DD.MM.YYYY"},{"rating":5,"titel":"Very good","comment":"This is a really tasty recipe. Even the kids like it! It is also easy to make. This is my new favorite.","date_time":"hh:mm DD.MM.YYYY"}],"ingredients":[{"id":1234,"name":"Almond Flour","category":["gluten free"],"attributes":null,"quantity":0.75,"unit":{"singular":"cup","plural":"cups","shorthand":"c"},"original_line":"3/4 cups Almond Meal Or Almond Flour","extra":null},{"id":4567,"name":"Espresso Beans","category":null,"attributes":["Ground"],"quantity":1,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"1 Tablespoon Ground Espresso Beans","extra":null},{"id":5678,"name":"Soda","category":null,"attributes":["Baking"],"quantity":0.25,"unit":{"singular":"Teaspoon","plural":"Teaspoons","shorthand":"Tsp"},"original_line":"1/4 teaspoons Baking Soda","extra":null},{"id":6789,"name":"Nutmeg","category":null,"attributes":["Ground"],"quantity":0.25,"unit":{"singular":"Teaspoon","plural":"Teaspoons","shorthand":"Tsp"},"original_line":"1/4 teaspoons Ground Nutmeg","extra":null},{"id":7890,"name":"Salt","category":null,"attributes":null,"quantity":1,"unit":{"singular":"Pinch","plural":"Pinches","shorthand":"p"},"original_line":"1 pinch Salt","extra":null},{"id":8901,"name":"Egg","category":null,"attributes":null,"quantity":1,"unit":{"singular":"Whole","plural":null,"shorthand":null},"original_line":"1 whole Egg","extra":null},{"id":9012,"name":"Coconut Oil","category":null,"attributes":null,"quantity":2,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"2 Tablespoons Coconut Oil","extra":null,"swapables":[{"id":76541,"name":"Soja Milk","category":null,"attributes":null,"quantity":2,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"2 Tablespoons Coconut Milk","extra":null},{"id":7654,"name":"Amandel Milk","category":null,"attributes":null,"quantity":2,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"2 Tablespoons Coconut Milk","extra":null}]},{"id":123,"name":"Maple Syrup","category":null,"attributes":null,"quantity":2,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"2 Tablespoons Maple Syrup","extra":null},{"id":9876,"name":"Vanilla","category":null,"attributes":null,"quantity":0.5,"unit":{"singular":"Teaspoons","plural":"Teaspoons","shorthand":"Tsp"},"original_line":"1/2 teaspoons Vanilla","extra":null},{"id":8765,"name":"fluid Chocolate","category":null,"attributes":["Dark"],"quantity":2,"unit":{"singular":"ounce","plural":"ounces","shorthand":"oz."},"original_line":"2 ounces, fluid Dark Chocolate","extra":null},{"id":7654,"name":"Coconut Milk","category":null,"attributes":null,"quantity":2,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"2 Tablespoons Coconut Milk","extra":null,"swapables":[{"id":76541,"name":"Soja Milk","category":null,"attributes":null,"quantity":2,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"2 Tablespoons Coconut Milk","extra":null},{"id":7654,"name":"Amandel Milk","category":null,"attributes":null,"quantity":2,"unit":{"singular":"Tablespoon","plural":"Tablespoons","shorthand":"Tbsp"},"original_line":"2 Tablespoons Coconut Milk","extra":null}]}],"instructions":[{"step":1,"original_line":"Preheat oven to 350 degrees F. Grease a mini muffin tin well with coconut oil or greasing method of your choice.","sub":[{"instruction":"Preheat oven to 350 degrees F","ingredients":null,"activities":[{"id":1,"name":"preheat","equipment":1,"time":null,"parameters":{"temperature":350,"UOM":"Fahrenheit"}}],"equipment":[{"id":1,"name":"oven"}],"extra":null}]},{"step":2,"original_line":"Preheat oven to 350 degrees F. Grease a mini muffin tin well with coconut oil or greasing method of your choice.","sub":[{"instruction":"Grease a mini muffin tin well with coconut oil or greasing method of your choice","ingredients":[9012],"activities":[{"id":2,"name":"Grease","equipment":2,"time":null,"parameters":{}}],"equipment":[{"id":2,"name":"muffin tin"}],"extra":null}]},{"step":3,"original_line":"In a food processor, combine all the dry ingredients for the muffins: almond meal, ground espresso beans, baking soda, nutmeg, and salt.","sub":[{"instruction":"In a food processor, combine all the dry ingredients for the muffins: almond meal, ground espresso beans, baking soda, nutmeg, and salt","ingredients":[1234,4567,5678,6789,7890],"activities":[{"id":3,"name":"combine","equipment":3,"time":null,"parameters":{}}],"equipment":[{"id":3,"name":"food processor"}],"extra":null}]},{"step":4,"original_line":"Pulse to combine.","sub":[{"instruction":"Pulse to combine","ingredients":null,"activities":[{"id":3,"name":"combine","equipment":3,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]},{"step":5,"original_line":"Add in the wet ingredients for the muffins: egg, coconut oil, maple syrup, and vanilla.","sub":[{"instruction":"Add in the wet ingredients for the muffins: egg, coconut oil, maple syrup, and vanilla","ingredients":[8901,9012,123,9876],"activities":[{"id":4,"name":"Add","equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]},{"step":6,"original_line":"Mix on high until everything is nice and smooth.","sub":[{"instruction":"Mix on high until everything is nice and smooth","ingredients":null,"activities":[{"id":5,"name":"mix","equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]},{"step":7,"original_line":"Fill greased muffin tins 3/4 of the way full.","sub":[{"instruction":"Fill greased muffin tins 3/4 of the way full","ingredients":null,"activities":[{"id":6,"name":"Fill","equipment":2,"time":null,"parameters":{}}],"equipment":[{"id":2,"name":"muffin tin"}],"extra":"3/4 of the way full"}]},{"step":8,"original_line":"You should have just enough to make 12, if you really scrape the bowl clean.","sub":[{"instruction":"You should have just enough to make 12, if you really scrape the bowl clean","ingredients":null,"activities":[{"id":10,"name":"make","equipment":10,"time":null,"parameters":{}}],"equipment":[{"id":10,"name":"bowl"}],"extra":null}]},{"step":9,"original_line":"Bake for 8-9 minutes until a toothpick comes out clean.","sub":[{"instruction":"Bake for 8-9 minutes until a toothpick comes out clean","ingredients":null,"activities":[{"id":11,"name":"Bake","equipment":1,"time":8.5,"parameters":{"temperature":350,"UOM":"Fahrenheit"}}],"equipment":[{"id":1,"name":"oven"}],"extra":null}]},{"step":10,"original_line":"Do not over bake!","sub":[{"instruction":"Do not over bake!","ingredients":null,"activities":[{"id":11,"name":"Bake","equipment":1,"time":null,"parameters":{"temperature":350,"UOM":"Fahrenheit"}}],"equipment":[{"id":1,"name":"oven"}],"extra":null}]},{"step":11,"original_line":"Allow muffins to cool","sub":[{"instruction":"Allow muffins to cool","ingredients":[5476],"activities":[{"id":12,"name":"cool","equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]},{"step":12,"original_line":"Make the ganache","sub":[{"instruction":"Make the ganache","ingredients":null,"activities":[{"id":10,"name":"Make","equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]},{"step":13,"original_line":"In a microwave safe bowl, combine the coconut milk and chocolate, microwave for 30 seconds, stir, microwave for 15 more seconds if it is not melted","sub":[{"instruction":"In a microwave safe bowl, combine the coconut milk and chocolate","ingredients":[7654,8765],"activities":[{"id":3,"name":"combine","equipment":10,"time":null,"parameters":{}}],"equipment":[{"id":10,"name":"bowl"}],"extra":null},{"instruction":"microwave for 30 seconds","ingredients":null,"activities":[{"id":20,"name":"microwave","equipment":20,"time":0.5,"parameters":{}}],"equipment":[{"id":20,"name":"microwave"}],"extra":null},{"instruction":"stir","ingredients":null,"activities":[{"id":21,"name":"stir","equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null},{"instruction":"microwave for 15 more seconds if it is not melted","ingredients":null,"activities":[{"id":20,"name":"microwave","equipment":20,"time":0.25,"parameters":{}}],"equipment":[{"id":20,"name":"microwave"}],"extra":null}]},{"step":14,"original_line":"Be careful not to burn it","sub":[{"instruction":"Be careful not to burn it","ingredients":null,"activities":[{"id":null,"name":null,"equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]},{"step":15,"original_line":"Top muffins with desired amount of ganache","sub":[{"instruction":"Top muffins with desired amount of ganache","ingredients":[5476,6743],"activities":[{"id":22,"name":"top","equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]},{"step":16,"original_line":"Enjoy!","sub":[{"instruction":"Enjoy!","ingredients":null,"activities":[{"id":null,"name":null,"equipment":null,"time":null,"parameters":{}}],"equipment":[{}],"extra":null}]}]}';

    let testRecipes: any[] = [];
    testRecipes.push(JSON.parse(testRecipesText));
    let spy = spyOn(apiService, "getRecipes")
      .and.returnValue(of(testRecipes));
    let spycheck = spyOn(component, "isChecked").and.returnValue(false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1 tag with recipe title', () => {
    let h1 = fixture.nativeElement.querySelector("h1");
    expect(h1.textContent).toEqual(component.recipe.title);
  });

  it('should adjust serves function', () => {
    //check if function works
    expect(component.recipe.serves).toEqual(12);
    component.adjustServings('inc');
    fixture.detectChanges();
    expect(component.recipe.serves).toEqual(13);
    component.adjustServings('dec');
    component.adjustServings('dec');
    fixture.detectChanges();
    expect(component.recipe.serves).toEqual(11);
  });

  it('should adjust serves button', () => {
    component.recipe.serves = 12;
    fixture.detectChanges();
    expect(component.recipe.serves).toEqual(12);

    fixture.debugElement.query(By.css('.servings.left')).nativeElement.click();
    fixture.detectChanges();
    expect(component.recipe.serves).toEqual(11);

    fixture.debugElement.query(By.css('.servings.right')).nativeElement.click();
    fixture.detectChanges();
    expect(component.recipe.serves).toEqual(12);

  });


  it('test title of page', () => {
    var title = seoService.getTitle();
    console.log(title)
    expect(title).toEqual(component.recipe.title + ' | SwapMeals');

    seoService.addTitle('hallo');
    fixture.detectChanges();
    title = seoService.getTitle();
    expect(title).toEqual('hallo');

  });

});
