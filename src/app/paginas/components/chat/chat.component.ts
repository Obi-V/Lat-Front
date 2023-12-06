import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  comentarios: string[] = [];
  nuevoComentario: string = '';
  maxComentarios: number = 9;

  addComentario() {
    if (this.nuevoComentario.trim() !== '') {
      this.comentarios.push(this.nuevoComentario.trim());

      // Verificar si se ha alcanzado el límite de comentarios
      if (this.comentarios.length > this.maxComentarios) {
        // Eliminar el comentario más antiguo
        this.comentarios.shift();
      }

      this.nuevoComentario = '';
    }
  }

}

