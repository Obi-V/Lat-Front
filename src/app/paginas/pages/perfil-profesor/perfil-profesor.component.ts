import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardPC } from 'src/app/interfaces/cardPC.interface';

import { Usuario } from 'src/app/interfaces/usuario.interface';
import { LatService } from 'src/app/shared/lat.service';

@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.component.html',
  styleUrls: ['./perfil-profesor.component.css']
})
export class PerfilProfesorComponent implements OnInit {

  public profesor!: Usuario

  constructor(
    private router: Router,
    private latService: LatService
  ) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    const urlSegments = currentUrl.split('/');
    const nombre = urlSegments[urlSegments.length - 1];
    this.getProfesor(nombre);
  }

  getProfesor(nombre:string){
    this.latService.oneProfe(nombre).subscribe(
      (profesor:Usuario)=>{
        this.profesor = profesor
        console.log(profesor)
      }
    )
  }


  loMasVendido: CardPC[] = [
    {
      cardTitle: 'Curso de Java y spring Boot 25h', cardSubtitle: 'Armando Redes',
      cardDescription: 'Breve descripción del curso de java y spring boot 25h, lo de 25h no se lo cree nadie.', img: '../assets/img/Java.png',
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
      url: '/pages/categorias/prueba'
    },

    {
      cardTitle: 'Curso de Swift de 0 a experto', cardSubtitle: 'Florencia Venturini',
      cardDescription: 'Breve descripción del curso Curso de Swift de 0 a experto', img: '../assets/img/Swift2.png',
      url: '/pages/categorias/prueba'
    },

    {
      cardTitle: 'Mónica Aranjuez', cardSubtitle: 'Profesora especializada en back end',
      cardDescription: 'Profesor particular especialista en backend, cuenta con mucha experiencia docente.', img: '../assets/img/Profe4.png',
      url: '/pages/categorias/prueba'
    },
  ]
}
