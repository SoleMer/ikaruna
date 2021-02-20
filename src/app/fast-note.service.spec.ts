import { TestBed } from '@angular/core/testing';

import { FastNoteService } from './fast-note.service';

describe('FastNoteService', () => {
  let service: FastNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
