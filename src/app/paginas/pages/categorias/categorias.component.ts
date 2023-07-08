import { Component } from '@angular/core';
import { cardCategoria } from 'src/app/interfaces/cardCategoria.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  constructor() { }

  public categorias: cardCategoria[] = [

    /* TODO sacar esto de la base de datos a través de un service */

    { cardTitle: 'Front End', img: '../assets/img/Front end.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Back End', img: '../assets/img/Back end.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Principiante', img: '../assets/img/Principiante.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'HTML y CSS', img: '../assets/img/htmlcss.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'JavaScript', img: '../assets/img/JavaScript.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'React', img: '../assets/img/React.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Kotlin', img: '../assets/img/Kotlin.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Node JS', img: '../assets/img/Nodejs.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Java', img: '../assets/img/Java.png',link: '/pages/categorias/prueba'},

    { cardTitle: 'Front End', img: '../assets/img/Front end.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Back End', img: '../assets/img/Back end.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Principiante', img: '../assets/img/Principiante.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'HTML y CSS', img: '../assets/img/htmlcss.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'JavaScript', img: '../assets/img/JavaScript.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'React', img: '../assets/img/React.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Kotlin', img: '../assets/img/Kotlin.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Node JS', img: '../assets/img/Nodejs.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Java', img: '../assets/img/Java.png',link: '/pages/categorias/prueba'},

    { cardTitle: 'Front End', img: '../assets/img/Front end.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Back End', img: '../assets/img/Back end.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Principiante', img: '../assets/img/Principiante.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'HTML y CSS', img: '../assets/img/htmlcss.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'JavaScript', img: '../assets/img/JavaScript.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'React', img: '../assets/img/React.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Kotlin', img: '../assets/img/Kotlin.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Node JS', img: '../assets/img/Nodejs.png',link: '/pages/categorias/prueba'},
    { cardTitle: 'Java', img: '../assets/img/Java.png',link: '/pages/categorias/prueba'},

  ]

}
