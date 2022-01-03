import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes:Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 9000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  addNewChar(personaje: Personaje) {
    this.personajes.push(personaje);
  }
}
