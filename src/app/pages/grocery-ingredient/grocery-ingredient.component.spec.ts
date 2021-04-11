import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroceryIngredientComponent } from './grocery-ingredient.component';

describe('GroceryIngredientComponent', () => {
  let component: GroceryIngredientComponent;
  let fixture: ComponentFixture<GroceryIngredientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
