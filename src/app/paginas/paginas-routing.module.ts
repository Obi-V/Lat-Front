import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout/layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CursoComponent } from './pages/curso/curso.component';
import { PerfilProfesorComponent } from './pages/perfil-profesor/perfil-profesor.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { PerfilCategoriaComponent } from './pages/perfil-categoria/perfil-categoria.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'principal',
        component:MainPageComponent
      },
      {
        path:'categorias',
        component:CategoriasComponent
      },
      {
        path:'categorias/prueba',
        component: PerfilCategoriaComponent
      },
      {
        path:'curso',
        component:CursoComponent
      },
      {
        path:'perfil-profesor/profeprueba',
        component:PerfilProfesorComponent
      },
      {
        path:'profesores',
        component:ProfesoresComponent
      },
      {
        path:'asistencia',
        component:AsistenciaComponent
      },
      {
        path:'nosotros',
        component:NosotrosComponent
      },
      {
        path:'mi-perfil',
        canActivate: [isAuthenticatedGuard],
        component: MiPerfilComponent
      },
      {
        path:'**',
        redirectTo:'principal'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
