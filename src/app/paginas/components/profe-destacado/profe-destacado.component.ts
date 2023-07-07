import { Component } from '@angular/core';
import { profeDestacado } from 'src/app/interfaces/profeDestacado.interface';

@Component({
  selector: 'profe-destacado',
  templateUrl: './profe-destacado.component.html',
  styleUrls: ['./profe-destacado.component.css']
}
)
export class ProfeDestacadoComponent {

  profe: profeDestacado = {
    nombre: 'Antonio Jesús Lopez Gambero',
    descripcion: ` el profesor especializado en JavaScript  más aclamado por los alumnos.
    Caracterizado por su gran carisma y sus eficaces lecciones.
    Además de contar con una gran experiencia previa en otros sectores
    de la investigación.`,
    imagen: '../assets/img/Gambero.png'
  }
}
