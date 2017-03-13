import { TestBed, inject } from '@angular/core/testing';

import { RateSessionService } from './rate-session.service';

describe('RateSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateSessionService]
    });
  });

  it('should ...', inject([RateSessionService], (service: RateSessionService) => {
    expect(service).toBeTruthy();
  }));
});
