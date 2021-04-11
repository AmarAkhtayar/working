import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingTimerComponent } from './cooking-timer.component';

describe('CookingTimerComponent', () => {
  let component: CookingTimerComponent;
  let fixture: ComponentFixture<CookingTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
