import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';
import { PaginasRoutingModule } from './paginas/paginas-routing.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./paginas/paginas.module').then(m => m.PaginasModule)
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
