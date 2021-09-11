import { Injectable } from '@angular/core';
import { Informations } from '../models/informations';
import { information } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getInformations(): Informations[]{
    return information;
  }
}
