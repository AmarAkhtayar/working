import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  @Input()
  page : string = "";

  @Input()
  shadow : boolean = false;

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }
  cardIsFilled() : boolean {
    return localStorage.getItem('grocery-list') == 'filled';
  }

}
