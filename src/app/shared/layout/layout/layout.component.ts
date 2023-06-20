import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  imagePath: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('../assets/img/LogoArbol.png');
  }

}
