import { TestBed, inject } from '@angular/core/testing';

import { SessionDetailsService } from './session-details.service';

describe('SessionDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionDetailsService]
    });
  });

  it('should ...', inject([SessionDetailsService], (service: SessionDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
