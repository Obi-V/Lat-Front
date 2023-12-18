import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}
  public videoUrl!: SafeResourceUrl;

  ngOnInit() {
    const youtubeVideoId = 'z95mZVUcJ-E'; //ID del video de YouTube (Copiar url a partir de la 'v=')
    const url = `https://www.youtube.com/embed/${youtubeVideoId}`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
