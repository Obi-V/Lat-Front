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
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},

    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},

    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},

    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},
    { cardTitle: 'Front', img: '../assets/img/Swift.png'},

  ]

}
