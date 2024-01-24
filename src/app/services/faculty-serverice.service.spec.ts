import { TestBed } from '@angular/core/testing';

import { FacultyServericeService } from './faculty-serverice.service';

describe('FacultyServericeService', () => {
  let service: FacultyServericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyServericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
