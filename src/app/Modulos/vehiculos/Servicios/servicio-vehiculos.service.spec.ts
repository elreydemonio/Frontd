import { TestBed } from '@angular/core/testing';

import { ServicioVehiculosService } from './servicio-vehiculos.service';

describe('ServicioVehiculosService', () => {
  let service: ServicioVehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
