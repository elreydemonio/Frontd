import { TestBed } from '@angular/core/testing';

import { GestionServicioService } from './gestion-servicio.service';

describe('GestionServicioService', () => {
  let service: GestionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
