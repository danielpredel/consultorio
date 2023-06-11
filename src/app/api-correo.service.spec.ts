import { TestBed } from '@angular/core/testing';

import { ApiCorreoService } from './api-correo.service';

describe('ApiCorreoService', () => {
  let service: ApiCorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
