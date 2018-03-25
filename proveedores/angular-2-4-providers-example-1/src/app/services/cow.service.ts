import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable()
export class CowService extends AnimalService {
	name = 'Cow';
	food = 'Grass';	
}