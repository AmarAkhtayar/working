import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookmodeComponent } from './cookmode.component';

describe('CookmodeComponent', () => {
  let component: CookmodeComponent;
  let fixture: ComponentFixture<CookmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
