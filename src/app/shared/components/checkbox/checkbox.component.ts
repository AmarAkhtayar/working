import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {
  
  @Input()
  value : string = "value?";

  @Input()
  uniqueId : string = "id?";

  @Input()
  isSwap : boolean = false;

  @Input()
  isSmaller : boolean = false;

  @Input()
  isCard : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setChecked() {
    var checkbox = <HTMLInputElement> document.getElementById(this.uniqueId);
    checkbox.checked = true;
  }
  isChecked() : boolean {
    var checkbox = <HTMLInputElement> document.getElementById(this.uniqueId);
    return checkbox.checked;
  }
}
