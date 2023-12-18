import { Component, Input } from '@angular/core';
import { cardCategoria } from 'src/app/interfaces/cardCategoria.interface';
import { CardPC } from 'src/app/interfaces/cardPC.interface';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  @Input()
  public cardPC ?: CardPC;

  @Input()
  public cardCategoria ?: cardCategoria;
}
