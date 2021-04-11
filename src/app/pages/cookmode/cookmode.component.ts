import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'app-cookmode',
  templateUrl: './cookmode.component.html',
  styleUrls: ['./cookmode.component.less']
})
export class CookmodeComponent implements OnInit {

  recipe : any;
  instructions : any;

  breadCrumbs : Breadcrumb[] = [];

  constructor(private api : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.api.getRecipesMock().subscribe(d => {
      this.recipe = d[0];
      console.log(d[0]);
      this.instructions = d[0].instructions;
    })
  }

  close() : string {
    return this.router.url.slice(0, -9);
  }

  photo() {
    localStorage.setItem('uploadPhoto', 'true');
    
  }

}
