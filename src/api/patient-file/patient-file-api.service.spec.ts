import { TestBed } from '@angular/core/testing';

import { PatientFileApiService } from './patient-file-api.service';

describe('PatientFileApiService', () => {
  let service: PatientFileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientFileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
