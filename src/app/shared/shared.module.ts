import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout/layout.component';
import { Error404Component } from './pages/error404/error404.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    Error404Component,
    CustomButtonComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports:[
    LayoutComponent,
    Error404Component,
    CustomButtonComponent,
    FooterComponent
  ]
})
export class SharedModule { }
