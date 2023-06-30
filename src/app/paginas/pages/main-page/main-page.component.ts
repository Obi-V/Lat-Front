import { Component } from '@angular/core';
import { Slide } from '../../../interfaces/slice.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  //Propiedades para insertar en los slides
  loMasBuscado: Slide[] = [

    {
      cardTitle: 'Curso de Java y spring Boot 25h', cardSubtitle: 'Armando Redes',
      cardDescription: 'Breve descripción del curso de java y spring boot 25h, lo de 25h no se lo cree nadie.', img: '../assets/img/springlogo.png',
    },

    {
      cardTitle: 'Curso de JavaScript para principiantes', cardSubtitle: 'Antonio Jesús Lopez Gambero',
      cardDescription: 'Breve descripción del curso de JavaScript para principiantes, el curso tiene un total de 30h lectivas.', img: '../assets/img/jslogo.png',
    },

    {
      cardTitle: 'Antonio Hidalgo', cardSubtitle: 'Profesor de DAW',
      cardDescription: 'Profesor particular especialista en DAW, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe2.png',
    },

    {
      cardTitle: 'Curso de Swift de 0 a experto', cardSubtitle: 'Florencia Venturini',
      cardDescription: 'Breve descripción del curso Curso de Swift de 0 a experto', img: '../assets/img/Swift2.png',
    },

    {
      cardTitle: 'Mónica Aranjuez', cardSubtitle: 'Profesora especializada en back end',
      cardDescription: 'Profesor particular especialista en backend, cuenta con mucha experiencia docente.', img: '../assets/img/Profe4.png',
    },
  ]

  profesores: Slide[] = [

    {
      cardTitle: 'Lidia Martinez', cardSubtitle: 'Profesora para universitarios',
      cardDescription: 'Profesora particular especializada en alumnos de la carrera universitaria, cuenta con mucha experiencia docente.', img: '../assets/img/Profe6.png',
    },

    {
      cardTitle: 'Mónica Aranjuez', cardSubtitle: 'Profesora especializada en back end',
      cardDescription: 'Profesora particular especialista en backend, cuenta con mucha experiencia docente.', img: '../assets/img/Profe4.png',
    },

    {
      cardTitle: 'Fernando Montes', cardSubtitle: 'Profesor de redes',
      cardDescription: 'Profesor particular especialista en Redes y microsistemas informáticos, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe1.png',
    },

    {
      cardTitle: 'Cristina Martinez', cardSubtitle: 'Profesora particular de DAM',
      cardDescription: 'Profesor particular especialista en DAW, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe5.png',
    },

    {
      cardTitle: 'Antonio Hidalgo', cardSubtitle: 'Profesor de DAW',
      cardDescription: 'Profesor particular especialista en DAW, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe2.png',
    },
  ]

  recomendados: Slide[] = [
    {
      cardTitle: 'Curso de Swift de 0 a experto', cardSubtitle: 'Florencia Venturini',
      cardDescription: 'Breve descripción del curso Curso de Swift de 0 a experto', img: '../assets/img/Swift2.png',
    },
    {
      cardTitle: 'Mónica Aranjuez', cardSubtitle: 'Profesora especializada en back end',
      cardDescription: 'Profesor particular especialista en backend, cuenta con mucha experiencia docente.', img: '../assets/img/Profe4.png',
    },

    {
      cardTitle: 'Antonio Hidalgo', cardSubtitle: 'Profesor de DAW',
      cardDescription: 'Profesor particular especialista en DAW, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe2.png',
    },

    {
      cardTitle: 'Curso de Java y spring Boot 25h', cardSubtitle: 'Armando Redes',
      cardDescription: 'Breve descripción del curso de java y spring boot 25h, lo de 25h no se lo cree nadie.', img: '../assets/img/springlogo.png',
    },

    {
      cardTitle: 'Fernando Montes', cardSubtitle: 'Profesor de redes',
      cardDescription: 'Profesor particular especialista en Redes y microsistemas informáticos, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe1.png',
    },


    {
      cardTitle: 'Curso de JavaScript para principiantes', cardSubtitle: 'Antonio Jesús Lopez Gambero',
      cardDescription: 'Breve descripción del curso de JavaScript para principiantes, el curso tiene un total de 30h lectivas.', img: '../assets/img/jslogo.png',
    },

  ]
}
