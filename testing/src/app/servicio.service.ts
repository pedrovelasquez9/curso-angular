import { Injectable } from '@angular/core';

@Injectable()
export class MasterService {
  getValue() {
    return 'hola';
  }
}

@Injectable()
export class ServicioService {

  constructor(private masterService: MasterService) { }
    getValue() { 
      return this.masterService.getValue();
    }

}
