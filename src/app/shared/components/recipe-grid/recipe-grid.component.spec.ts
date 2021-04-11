import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecipeGridComponent } from './recipe-grid.component';

describe('RecipeGridComponent', () => {
  let component: RecipeGridComponent;
  let fixture: ComponentFixture<RecipeGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
