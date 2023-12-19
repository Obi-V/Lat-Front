import { Component, OnInit, inject } from '@angular/core';
import { Curso, Usuario } from 'src/app/interfaces';
import { CardPC } from 'src/app/interfaces/cardPC.interface';
import { CardPCDTO } from 'src/app/interfaces/cardPCDTO.interface';
import { CursoDTO } from 'src/app/interfaces/cursoDTO.interface';
import { LatService } from 'src/app/shared/lat.service';

@Component({
  selector: 'app-perfil-categoria',
  templateUrl: './perfil-categoria.component.html',
  styleUrls: ['./perfil-categoria.component.css']
})

export class PerfilCategoriaComponent implements OnInit{

  categoria =  { name: 'Front End', img: '../assets/img/Front end.png'}

  public curso!: Curso
  public profe!: Usuario

  private latService = inject(LatService)

  misCursos :any= [];

  ngOnInit(): void {
    this.getcurso();
  }

  getcurso() {
    this.latService.getAllCursosDTO().subscribe(
      (cursos: CursoDTO[]) => {
        cursos.forEach(curso => {
          this.misCursos.push(this.convertirACard(curso));
        });
        console.log(this.misCursos);
      }
    );
  }

  convertirACard(curso: CursoDTO): CardPCDTO {
    return {
      id:        curso.id,
      cardTitle: curso.nombre,
      cardSubtitle: curso.subtitulo,
      cardDescription: curso.descripcion,
      img: curso.url,
      url: '/pages/curso'
    };
  }

  aniadir(cursoId: number){
    this.latService.aniadirCurso(cursoId).subscribe()

  }
}
