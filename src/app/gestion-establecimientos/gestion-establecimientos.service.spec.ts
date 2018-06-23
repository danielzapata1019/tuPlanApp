import { TestBed, inject } from '@angular/core/testing';

import { GestionEstablecimientosService } from './gestion-establecimientos.service';

describe('GestionEstablecimientosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionEstablecimientosService]
    });
  });

  it('should be created', inject([GestionEstablecimientosService], (service: GestionEstablecimientosService) => {
    expect(service).toBeTruthy();
  }));
});
