import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TasteProfileComponent } from './taste-profile.component';

describe('TasteProfileComponent', () => {
  let component: TasteProfileComponent;
  let fixture: ComponentFixture<TasteProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TasteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
