import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes:Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 9000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];
  

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { }

  addNewChar(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
