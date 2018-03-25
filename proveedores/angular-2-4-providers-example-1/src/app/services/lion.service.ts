import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable()
export class LionService extends AnimalService {
	name = 'Lion';
	food = 'Meat';
}