import { Component } from '@angular/core';
import { cardCategoria } from 'src/app/interfaces/cardCategoria.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  constructor() { }


  public objCategorias: cardCategoria[] = [

    /* Se puede sacar esto de la base de datos a través de un service si quisieramos añadir o quitar secciones, en mi caso no lo hago porque quiero que tenga estas por defecto */
    { cardTitle: 'Front End', img: '../assets/img/Front end.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'Back End', img: '../assets/img/Back end.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'Principiante', img: '../assets/img/Principiante.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'HTML y CSS', img: '../assets/img/htmlcss.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'JavaScript', img: '../assets/img/JavaScript.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'React', img: '../assets/img/React.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'Kotlin', img: '../assets/img/Kotlin.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'Node JS', img: '../assets/img/Nodejs.png', url: '/pages/categorias/prueba' },
    { cardTitle: 'Java', img: '../assets/img/Java.png', url: '/pages/categorias/prueba' },

  ]

  public categorias: cardCategoria[] = [
    ...this.objCategorias,
    ...this.objCategorias,
    ...this.objCategorias,
  ]

}
