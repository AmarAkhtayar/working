import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyCarouselComponent } from './my-carousel.component';

describe('MyCarouselComponent', () => {
  let component: MyCarouselComponent;
  let fixture: ComponentFixture<MyCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
