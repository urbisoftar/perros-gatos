import { TestBed } from '@angular/core/testing';

import { ListadoGatosService } from './listado-gatos.service';

describe('ListadoGatosService', () => {
  let service: ListadoGatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoGatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
