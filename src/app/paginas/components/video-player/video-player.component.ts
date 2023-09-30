import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Hls from 'hls.js';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

  private hls = new Hls()
  //private playing: boolean = false
  public videoURL: string | null = 'principal' // TODO: Lo que pasa la url por parámetro

  @ViewChild('video', { static: true }) private readonly video: ElementRef<HTMLVideoElement> | any

  constructor(private route: ActivatedRoute) { }


  public ngOnInit() {

    this.route.url.subscribe(segments => {
      const lastSegment = segments[segments.length - 1]; // Obtiene el último segmento que es la clave del directo en obs
      if (lastSegment) {
        this.videoURL = lastSegment.path; // El path lo transforma en string para que sea compatible
        // console.log(`Última parte de la URL: ${this.videoURL}`); Para comprobar si es correcta la url
        this.load(`http://localhost:8000/live/${this.videoURL}/index.m3u8`);
      } else {
        console.log('No se encontró la última parte de la URL.');
      }
    });
  }

  public load(currentVideo: string): void {
    if (Hls.isSupported()) {
      this.loadVideoWithHLS(currentVideo)
    } else {
      console.log('Ups! El sistema HLS no es soportado por tu navegador.')
    }
  }

  public loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
  }
}
