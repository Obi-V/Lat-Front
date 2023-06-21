import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';


@NgModule({
  declarations: [
    ProfesoresComponent,
    AsistenciaComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
