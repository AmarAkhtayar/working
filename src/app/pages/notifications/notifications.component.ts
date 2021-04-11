import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less']
})
export class NotificationsComponent implements OnInit {

  notificationsEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  preferenceChange(e) {
    console.log(e.srcElement.checked);
    if (e.srcElement.id == 'switch-all') {
      if (e.srcElement.checked == false) { //if main switch is going to false
        var inputs = Array.from(document.getElementsByTagName('input'));
        for (let inp of inputs) {
          if (inp.id.includes('switch') && !inp.id.includes('all')) { //select only other switch fields
            inp.checked = false; //notifications disabled
          }
        }

      }
      else { //if main switch is going to true
        var inputs = Array.from(document.getElementsByTagName('input'));
        for (let inp of inputs) {
          if (inp.id.includes('switch') && !inp.id.includes('all')) {
            inp.checked = true;
          }
        }

      }
    }

    if (e.srcElement.id == 'switch-rec' || e.srcElement.id == 'switch-produp' || e.srcElement.id == 'switch-promup') {
      var inputs = Array.from(document.getElementsByTagName('input'));
      console.log(e.srcElement.id);
      if (e.srcElement.checked == true) { //if secondary goes to true
        var changeMain = true;
        console.log('totrue');
        for (let inp of inputs) { //check if others are also true
          if (inp.id.includes('switch') && !inp.id.includes('all') && inp.checked == false) { //select only secondary switch fields and check if one of those is turned off
            console.log(inp.id + ' is false');
            changeMain = false;
          }
        }
        console.log('change main is', changeMain)
        if (changeMain == true) { //if all are true 
          var mainswitch = <HTMLInputElement>document.getElementById('switch-all');
          mainswitch.checked = true;
        }
      }
      else { //if secondary goes to false;
        console.log('to false')
        var mainswitch = <HTMLInputElement>document.getElementById('switch-all');
        mainswitch.checked = false;
      }

    }
    
  }

}
