import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styles: [
  ]
})
export class CustomButtonComponent {
  @Input()
  text ?: string;
}
