import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  title: string = 'Lo más buscado'

  cardTitle: string = 'Profezor Tusmuerto'
  cardSubtitle:string = 'Es un hijueputa marihuano'
  cardDescription: string = `Dice que es casi doctor de medesina china, pero que no ha llevao los papele. Técnica secreta: Bum un Blast, nesesita un segundo Blast. Va veni Dios y va pega en la tierra, como nunca ante ha visto`

  @ViewChild('slickModal', { static: true }) slickModal?: SlickCarouselComponent;

  slides = [
    { img: '../assets/img/Profe1.png' },
    { img: '../assets/img/Profe2.png' },
    { img: '../assets/img/Profe3.png' },
    { img: '../assets/img/Profe4.png' },
    { img: '../assets/img/Profe5.png' },
    { img: '../assets/img/Profe6.png' },
  ]

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
