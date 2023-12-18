import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/interfaces';
import { CardPC } from 'src/app/interfaces/cardPC.interface';

import { Usuario } from 'src/app/interfaces/usuario.interface';
import { LatService } from 'src/app/shared/lat.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public curso!: Curso
  public profe!: Usuario

  constructor(
    private router: Router,
    private latService: LatService
  ) {}

  ngOnInit(): void {
    // const currentUrl = this.router.url;
    // const urlSegments = currentUrl.split('/');
    // const nombre = urlSegments[urlSegments.length - 1];
    // this.getcurso(nombre);
  }

  // getcurso(nombre:string){
  //   this.latService.oneCurso(nombre).subscribe(
  //     (curso:Curso)=>{
  //       this.curso = curso
  //       console.log(curso)
  //     }
  //   )
  // }

  misCursos: CardPC[] = [
    {
      cardTitle: 'Curso de Swift de 0 a experto',
      cardSubtitle: 'Florencia Venturini',
      cardDescription: 'Breve descripción del curso Curso de Swift de 0 a experto',
      img: '../assets/img/Swift2.png',
      url: '/pages/categorias/prueba'
    },
    {
      cardTitle: 'Antonio Hidalgo', cardSubtitle: 'Profesor de DAW',
      cardDescription: 'Profesor particular especialista en DAW, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe2.png',
      url: '/pages/perfil-profesor/profeprueba'
    },
    {
      cardTitle: 'Curso de Java y spring Boot 25h', cardSubtitle: 'Armando Redes',
      cardDescription: 'Breve descripción del curso de java y spring boot 25h, lo de 25h no se lo cree nadie.', img: '../assets/img/springlogo.png',
      url: '/pages/perfil-profesor/profeprueba'
    },


    {
      cardTitle: 'Fernando Montes', cardSubtitle: 'Profesor de redes',
      cardDescription: 'Profesor particular especialista en Redes y microsistemas informáticos, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe1.png',
      url: '/pages/perfil-profesor/profeprueba'
    },

    {
      cardTitle: 'Curso de JavaScript para principiantes', cardSubtitle: 'Antonio Jesús Lopez Gambero',
      cardDescription: 'Breve descripción del curso de JavaScript para principiantes, el curso tiene un total de 30h lectivas.', img: '../assets/img/jslogo.png',
      url: '/pages/categorias/prueba'
    },


    {
      cardTitle: 'Cristina Martinez', cardSubtitle: 'Profesora particular de DAM',
      cardDescription: 'Profesor particular especialista en DAW, cuenta con mucha experiencia docente. ', img: '../assets/img/Profe5.png',
      url: '/pages/perfil-profesor/profeprueba'
    },



    {
      cardTitle: 'Curso de Swift de 0 a experto',
      cardSubtitle: 'Florencia Venturini',
      cardDescription: 'Breve descripción del curso Curso de Swift de 0 a experto',
      img: '../assets/img/Swift2.png',
      url: '/pages/categorias/prueba'
    },
    {
      cardTitle: 'Curso de Java y spring Boot 25h', cardSubtitle: 'Armando Redes',
      cardDescription: 'Breve descripción del curso de java y spring boot 25h, lo de 25h no se lo cree nadie.', img: '../assets/img/springlogo.png',
      url: '/pages/perfil-profesor/profeprueba'
    },
    {
      cardTitle: 'Curso de JavaScript para principiantes', cardSubtitle: 'Antonio Jesús Lopez Gambero',
      cardDescription: 'Breve descripción del curso de JavaScript para principiantes, el curso tiene un total de 30h lectivas.', img: '../assets/img/jslogo.png',
      url: '/pages/categorias/prueba'
    },


  ]
}
