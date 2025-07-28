import { TestBed } from '@angular/core/testing';

import { WsjfService } from './wsjf.service';

describe('WsjfService', () => {
  let service: WsjfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsjfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
