import { Component, OnInit, inject } from '@angular/core';
import { LatService } from 'src/app/shared/lat.service';
import { Usuario } from '../../../interfaces/usuario.interface';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  private authService = inject(AuthService)
  public usuario = this.authService.currentUser()
  public nickName = this.usuario?.username

  comentarios: string[] = [];
  nuevoComentario: string = '';
  maxComentarios: number = 12;

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

