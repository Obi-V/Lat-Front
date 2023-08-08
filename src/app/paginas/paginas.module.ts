import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { CarouselModule } from '@coreui/angular';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PageComponentsModule } from './components/page-components.module';
import { PaginasRoutingModule } from './paginas-routing.module';
import { PerfilCategoriaComponent } from './pages/perfil-categoria/perfil-categoria.component';
import { PerfilProfesorComponent } from './pages/perfil-profesor/perfil-profesor.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { SharedModule } from '../shared/shared.module';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';



@NgModule({
  declarations: [
    ProfesoresComponent,
    AsistenciaComponent,
    MainPageComponent,
    CategoriasComponent,
    PerfilCategoriaComponent,
    PerfilProfesorComponent,
    NosotrosComponent,
    MiPerfilComponent
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
