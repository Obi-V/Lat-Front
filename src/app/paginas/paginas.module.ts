import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { ProfesoresComponent } from './pages/profesores/profesores.component';


@NgModule({
  declarations: [
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
