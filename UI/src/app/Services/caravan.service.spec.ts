import { TestBed } from '@angular/core/testing';

import { CaravanService } from './caravan.service';

describe('CaravanService', () => {
  let service: CaravanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaravanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
