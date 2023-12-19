import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout/layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { DirectoComponent } from './pages/directo/directo.component';
import { PerfilProfesorComponent } from './pages/perfil-profesor/perfil-profesor.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { PerfilCategoriaComponent } from './pages/perfil-categoria/perfil-categoria.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursoComponent } from './pages/Curso/curso.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { esAdminGuard } from '../guards/es-admin.guard';
import { EditarPerfilComponent } from './pages/editar-perfil copy/editar-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'principal',
        component: MainPageComponent
      },
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'categorias/prueba',
        component: PerfilCategoriaComponent
      },
      {
        path: 'directo',
        canActivate: [isAuthenticatedGuard],
        component: DirectoComponent
      },
      {
        path: 'perfil-profesor/profeprueba',
        component: PerfilProfesorComponent
      },
      {
        path: 'profesores',
        component: ProfesoresComponent
      },
      {
        path: 'asistencia',
        component: AsistenciaComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'mi-perfil',
        canActivate: [isAuthenticatedGuard],
        component: MiPerfilComponent
      },
      {
        path: 'editar-perfil/:id',
        component: EditarPerfilComponent
      },
      {
        path: 'cursos',
        canActivate: [isAuthenticatedGuard],
        component: CursosComponent
      },
      {
        path: 'curso',
        canActivate: [isAuthenticatedGuard],
        component: CursoComponent
      },
      {
        path: 'administrador',
        canActivate: [esAdminGuard],
        component: AdministradorComponent

      },
      {
        path: '**',
        redirectTo: 'principal'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
