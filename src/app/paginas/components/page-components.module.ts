import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfeDestacadoComponent } from './profe-destacado/profe-destacado.component';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    CarouselComponent,
    ProfeDestacadoComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    CarouselComponent,
    ProfeDestacadoComponent,
    SliderComponent,
  ]
})
export class PageComponentsModule { }
