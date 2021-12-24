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

  agregar() {
    if (this.nuevo.nombre.trim().length === 0){ //validación para no enviar algo vacío
      return;
    }

    console.log(this.nuevo);

    this.personajes.push(this.nuevo);    
    this.nuevo = {
      nombre:'',
      poder: 0
    }

    
    //this.personajes.push();
    //limpiar this formulario
  }

}
