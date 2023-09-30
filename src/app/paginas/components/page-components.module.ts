import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfeDestacadoComponent } from './profe-destacado/profe-destacado.component';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ProfeDestacadoPerfilComponent } from './profe-destacado-perfil/profe-destacado-perfil.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    CarouselComponent,
    ProfeDestacadoComponent,
    SliderComponent,
    CardComponent,
    ProfeDestacadoPerfilComponent,
    VideoPlayerComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CarouselComponent,
    ProfeDestacadoComponent,
    SliderComponent,
    CardComponent,
    ProfeDestacadoPerfilComponent,
    VideoPlayerComponent,
    ChatComponent
  ]
})
export class PageComponentsModule { }
