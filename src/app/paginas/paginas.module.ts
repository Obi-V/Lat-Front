import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { CarouselModule } from '@coreui/angular';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { PageComponentsModule } from './components/page-components.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PerfilCategoriaComponent } from './pages/perfil-categoria/perfil-categoria.component';
import { PerfilProfesorComponent } from './pages/perfil-profesor/perfil-profesor.component';


@NgModule({
  declarations: [
    ProfesoresComponent,
    AsistenciaComponent,
    MainPageComponent,
    CategoriasComponent,
    PerfilCategoriaComponent,
    PerfilProfesorComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    CarouselModule,
    MaterialModule,
    PageComponentsModule,
    SharedModule,
    MaterialModule,
  ],

})
export class PaginasModule { }
