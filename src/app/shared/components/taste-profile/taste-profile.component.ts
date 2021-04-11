import { Component, Input, OnInit } from '@angular/core';
import { TasteProfile } from '../../models/backend-models/recipe.model';

@Component({
  selector: 'app-taste-profile',
  templateUrl: './taste-profile.component.html',
  styleUrls: ['./taste-profile.component.less']
})
export class TasteProfileComponent implements OnInit {

  @Input()
  tasteProfile : TasteProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
