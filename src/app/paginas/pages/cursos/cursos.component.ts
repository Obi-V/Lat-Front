import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
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

  private authService = inject(AuthService)

  public usuario = this.authService.currentUser()

  misCursos :any= [];

  constructor(
    private latService: LatService
  ) {}

  ngOnInit(): void {
    this.getcurso();
  }

  getcurso() {
    this.latService.misCursos().subscribe(
      (cursos: Curso[]) => {
        cursos.forEach(curso => {
          this.misCursos.push(this.convertirACard(curso));
        });

        console.log(this.misCursos);
      }
    );
  }

  convertirACard(curso: Curso): CardPC {
    return {
      cardTitle: curso.nombre,
      cardSubtitle: curso.subtitulo,
      cardDescription: curso.descripcion,
      img: curso.url,
      url: '/pages/curso'
    };
  }

  hayCursos(){
    return this.misCursos.length
  }

  eliminarCursos(){
    this.latService.eliminarCursos().subscribe(
      ()=> location.reload()
    )
  }
}
