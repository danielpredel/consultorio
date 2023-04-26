import { TestBed } from '@angular/core/testing';

import { AlmacenamientoCitasService } from './almacenamiento-citas.service';

describe('AlmacenamientoCitasService', () => {
  let service: AlmacenamientoCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenamientoCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
