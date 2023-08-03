import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces';
import { profeDestacado } from 'src/app/interfaces/profeDestacado.interface';

@Component({
  selector: 'profe-destacado-perfil',
  templateUrl: './profe-destacado-perfil.component.html',
  styleUrls: ['./profe-destacado-perfil.component.css']
})
export class ProfeDestacadoPerfilComponent {

  @Input()
  profesor!: Usuario
}
