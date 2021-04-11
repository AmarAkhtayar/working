import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less']
})
export class MyProfileComponent implements OnInit {

  firstName : any = "voornaam";
  lastName : any = "achternaam";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value : any) {
    console.log(value);
  }

}
