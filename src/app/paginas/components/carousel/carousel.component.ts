import { Component, Input } from '@angular/core';
import { CardPC } from 'src/app/interfaces/cardPC.interface';

@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent {


  @Input()
  slides: CardPC[] = [];

  slideConfig = {
    infinite: true,
     speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    "autoplay": true,
    "pauseOnHover": true,
    prevArrow: ('.prev'),
    nextArrow: ('.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

}
