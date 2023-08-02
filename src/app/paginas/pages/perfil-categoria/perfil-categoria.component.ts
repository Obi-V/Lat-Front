import { Component } from '@angular/core';
import { CardPC } from 'src/app/interfaces/cardPC.interface';

@Component({
  selector: 'app-perfil-categoria',
  templateUrl: './perfil-categoria.component.html',
  styleUrls: ['./perfil-categoria.component.css']
})
export class PerfilCategoriaComponent {

  categoria =  { name: 'Front End', img: '../assets/img/Front end.png'}

  loMasVendido: CardPC[] = [

    {
      cardTitle: 'Curso de Java y spring Boot 25h', cardSubtitle: 'Armando Redes',
      cardDescription: 'Breve descripción del curso de java y spring boot 25h, lo de 25h no se lo cree nadie.', img: '../assets/img/springlogo.png',
      url: '/pages/categorias/prueba'
    },

    {
      cardTitle: 'Curso de JavaScript para principiantes', cardSubtitle: 'Antonio Jesús Lopez Gambero',
      cardDescription: 'Breve descripción del curso de JavaScript para principiantes, el curso tiene un total de 30h lectivas.', img: '../assets/img/jslogo.png',
      url: '/pages/categorias/prueba'
    },

    {
      cardTitle: 'Antonio Hidalgo', cardSubtitle: 'Profesor de DAW',
      cardDescription: 'Profesor particular especialista en DAW, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe2.png',
      url: '/pages/perfil-profesor/profeprueba'
    },

    {
      cardTitle: 'Curso de Swift de 0 a experto', cardSubtitle: 'Florencia Venturini',
      cardDescription: 'Breve descripción del curso Curso de Swift de 0 a experto', img: '../assets/img/Swift2.png',
      url: '/pages/categorias/prueba'
    },

    {
      cardTitle: 'Mónica Aranjuez', cardSubtitle: 'Profesora especializada en back end',
      cardDescription: 'Profesor particular especialista en backend, cuenta con mucha experiencia docente.', img: '../assets/img/Profe4.png',
      url: '/pages/perfil-profesor/profeprueba'
    },
  ]
}
