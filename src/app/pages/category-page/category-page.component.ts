import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.less']
})
export class CategoryPageComponent implements OnInit {

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }
  sub;
  recipes;

  title : string = "Failed loading";

  breadCrumbs : Breadcrumb[] = [];

  isCook : boolean = false;



  ngOnInit(): void {
    if (window.location.pathname.split('/')[1] != "cook") {
      this.sub = this.activatedRoute.paramMap.subscribe(params => {
        let category = params.get('category')
        let subCategory = params.get('sub-category');

        let catBc = new Breadcrumb(this.titleCase(category), "/" + category);
        this.breadCrumbs.push(catBc);
        this.title = this.titleCase(category);
        if (subCategory != null) {
          let subcatBc = new Breadcrumb(this.titleCase(subCategory), "/" + category + "/" + subCategory);
          this.breadCrumbs.push(subcatBc);
          this.title = this.titleCase(subCategory);
        };

        this.api.getRecipesMock().subscribe(data => {
          this.recipes = data;
        });


      });
    }
    else {
      let cookname = this.titleCase(window.location.pathname.split('/')[2]);
      this.isCook = true;
      this.title = this.titleCase(cookname);
      this.api.getRecipesMock().subscribe(data => {
        this.recipes = data;
      });
    }
  }

  titleCase(str) : string {
    var splitStr : string[]= str.toLowerCase().split('-');
    let result;
    
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    result = splitStr.join(' ');
    return result; 
 }
 
 
}

