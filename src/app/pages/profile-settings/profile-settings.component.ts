import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.less']
})
export class ProfileSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setLanguage(baseHref : string) {
    console.log(document.getElementsByTagName('base')[0].getAttribute('href'));
    document.getElementsByTagName('base')[0].setAttribute('href', "/" + baseHref + "/");
    console.log(document.getElementsByTagName('base')[0].getAttribute('href'));
  }

}
