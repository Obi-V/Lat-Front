import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout/layout.component';
import { Error404Component } from './pages/error404/error404.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    LayoutComponent,
    Error404Component,
  ]
})
export class SharedModule { }
