import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.less']
})
export class LogInComponent implements OnInit {

  constructor(public auth : AuthService, @Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void {
    
    console.log("is auth");
    this.auth.isAuthenticated$.subscribe(d => console.log(d));
    console.log(this.document.location.origin);
  }

  test() {
    console.log("is auth");
    this.auth.isAuthenticated$.subscribe(d => console.log(d));
    this.auth.logout({returnTo: 'http://localhost:4200/nl/#/'});
    this.auth.isAuthenticated$.subscribe(d => console.log(d));
  }

}
