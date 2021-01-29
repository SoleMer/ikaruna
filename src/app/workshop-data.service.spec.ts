import { TestBed } from '@angular/core/testing';

import { WorkshopDataService } from './workshop-data.service';

describe('WorkshopDataService', () => {
  let service: WorkshopDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
