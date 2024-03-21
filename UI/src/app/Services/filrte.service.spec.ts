import { TestBed } from '@angular/core/testing';

import { FilrteService } from './filrte.service';

describe('FilrteService', () => {
  let service: FilrteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilrteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
