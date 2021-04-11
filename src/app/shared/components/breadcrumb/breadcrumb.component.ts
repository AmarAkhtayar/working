import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';
import { Breadcrumb } from '../../models/breadcrumb.model';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  @Input()
  breadCrumbs : Breadcrumb[] = [];
  home : Breadcrumb = new Breadcrumb("Home", "/inspiration");

 

  ngOnInit(): void {
    let homePresent = false;
    for(let i = 0; i < this.breadCrumbs.length; i++) {
      if(this.breadCrumbs[i].label == "Home") {
        homePresent = true;
        break;
      }
    }
    if(!homePresent) {
      this.breadCrumbs.unshift(this.home);
    }
  }
}
