import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerySwitchComponent } from './grocery-switch.component';

describe('GrocerySwitchComponent', () => {
  let component: GrocerySwitchComponent;
  let fixture: ComponentFixture<GrocerySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocerySwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
