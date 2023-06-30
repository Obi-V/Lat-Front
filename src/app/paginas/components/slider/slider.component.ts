import { Component, Input, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CardPC } from 'src/app/interfaces/cardPC.interface';


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @ViewChild('slickModal', { static: true }) slickModal?: SlickCarouselComponent;

  @Input()
  title:string = '';

  @Input()
  slides: CardPC[] = [];

  slideConfig = {
    infinite: true,
     speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    "autoplay": true,
    "pauseOnHover": true,
    prevArrow: ('.prev'),
    nextArrow: ('.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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

  next() {
    this.slickModal?.slickNext();
  }
  prev() {
    this.slickModal?.slickPrev();
  }
}
