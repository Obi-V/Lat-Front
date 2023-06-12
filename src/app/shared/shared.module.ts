import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout/layout.component';
import { Error404Component } from './pages/error404/error404.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutComponent,
    Error404Component,
  ]
})
export class SharedModule { }
