import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSlideshowComponent } from './info-slideshow.component';

describe('InfoSlideshowComponent', () => {
  let component: InfoSlideshowComponent;
  let fixture: ComponentFixture<InfoSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
