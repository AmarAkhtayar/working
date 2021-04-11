import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';

@Component({
  selector: 'app-grocery-ingredient',
  templateUrl: './grocery-ingredient.component.html',
  styleUrls: ['./grocery-ingredient.component.less']
})
export class GroceryIngredientComponent implements OnInit {

  constructor() { }

  breadCrumbs : Breadcrumb[] = [];

  ngOnInit(): void {
    var labels = document.getElementsByTagName('label');
    for(var i = 0; i < labels.length; i++) {
      labels[i].style.fontWeight = '600';
      labels[i].style.fontSize = '16px';
    }
    
    let grocBc = new Breadcrumb("My grocery list", "/my-ingredient-list");
    this.breadCrumbs.push(grocBc);
    // this.bcService.addBreadCrumb("My grocery list", "/my-ingredient-list")
  }

  toggleIngs(name : string) {
    //name can be: oils, vegetables
    var ings = document.getElementById('ing-' + name);
    var svg  = document.getElementById('arrow-' + name);

    if(ings.style.display == 'none') {
      ings.style.display = 'block';
      svg.classList.add('turn');
    }
    else {
      ings.style.display = 'none';
      svg.classList.remove('turn');
    }


  }
  editAmount() {
    localStorage.setItem('editAmount', "true");
  }
  toggleIng(id) {
    var cb = document.getElementById("cb-" + id);
    var info = document.getElementById("ing-" + id);
    var label = <HTMLElement> cb.childNodes[0].childNodes[0].childNodes[2];

    if(info.style.opacity == '0.4') {
      // console.log(info.style.opacity)
      // console.log('no here')
      info.style.opacity = '1';
      label.style.opacity = '1';
    }
    else {
      // console.log('here');
      info.style.opacity = '0.4';
      label.style.opacity = '0.4';
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

  getUrlTitle(t) : string {
    return t.replace(/ /g,"-").replace(/,/g,"");
  }

}
