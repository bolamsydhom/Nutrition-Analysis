import { TestBed } from '@angular/core/testing';

import { IngredientsAnlysisService } from './ingredients-anlysis.service';

describe('IngredientsAnlysisService', () => {
  let service: IngredientsAnlysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsAnlysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
