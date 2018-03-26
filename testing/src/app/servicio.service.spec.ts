import { TestBed, inject } from '@angular/core/testing';

import { ServicioService, MasterService } from './servicio.service';

describe('ServicioService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterService]
    });
  });

  it('debería crearse el servicio', inject([MasterService], (service: MasterService) => {
    expect(service).toBeTruthy();
  }));
  it('debería usar MasterService', () => {
    service = TestBed.get(MasterService);
    expect(service.getValue()).toBe('hola');
  })
});
