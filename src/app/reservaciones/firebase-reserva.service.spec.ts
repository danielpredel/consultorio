import { TestBed } from '@angular/core/testing';

import { FirebaseReservaService } from './firebase-reserva.service';

describe('FirebaseReservaService', () => {
  let service: FirebaseReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
