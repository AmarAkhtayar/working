import { TestBed } from '@angular/core/testing';

import { ColorHandlingService } from './color-handling.service';

describe('ColorHandlingService', () => {
  let service: ColorHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
