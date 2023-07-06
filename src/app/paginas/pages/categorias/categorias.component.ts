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

    { cardTitle: 'Front End', img: '../assets/img/Front end.png'},
    { cardTitle: 'Back End', img: '../assets/img/Back end.png'},
    { cardTitle: 'Principiante', img: '../assets/img/Principiante.png'},
    { cardTitle: 'HTML y CSS', img: '../assets/img/htmlcss.png'},
    { cardTitle: 'JavaScript', img: '../assets/img/JavaScript.png'},
    { cardTitle: 'React', img: '../assets/img/React.png'},
    { cardTitle: 'Kotlin', img: '../assets/img/Kotlin.png'},
    { cardTitle: 'Node JS', img: '../assets/img/Nodejs.png'},
    { cardTitle: 'Java', img: '../assets/img/Java.png'},

    { cardTitle: 'Front End', img: '../assets/img/Front end.png'},
    { cardTitle: 'Back End', img: '../assets/img/Back end.png'},
    { cardTitle: 'Principiante', img: '../assets/img/Principiante.png'},
    { cardTitle: 'HTML y CSS', img: '../assets/img/htmlcss.png'},
    { cardTitle: 'JavaScript', img: '../assets/img/JavaScript.png'},
    { cardTitle: 'React', img: '../assets/img/React.png'},
    { cardTitle: 'Kotlin', img: '../assets/img/Kotlin.png'},
    { cardTitle: 'Node JS', img: '../assets/img/Nodejs.png'},
    { cardTitle: 'Java', img: '../assets/img/Java.png'},

    { cardTitle: 'Front End', img: '../assets/img/Front end.png'},
    { cardTitle: 'Back End', img: '../assets/img/Back end.png'},
    { cardTitle: 'Principiante', img: '../assets/img/Principiante.png'},
    { cardTitle: 'HTML y CSS', img: '../assets/img/htmlcss.png'},
    { cardTitle: 'JavaScript', img: '../assets/img/JavaScript.png'},
    { cardTitle: 'React', img: '../assets/img/React.png'},
    { cardTitle: 'Kotlin', img: '../assets/img/Kotlin.png'},
    { cardTitle: 'Node JS', img: '../assets/img/Nodejs.png'},
    { cardTitle: 'Java', img: '../assets/img/Java.png'},

  ]

}
