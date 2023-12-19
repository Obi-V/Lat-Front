import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces';
import { LatService } from 'src/app/shared/lat.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  private router = inject(Router)

  ngOnInit(): void {
    this.getAllUsers();
  }
  private latService = inject(LatService)

  allUsuarios :any= [];

  eliminarUser(idUser: number){
    this.latService.eliminarUser(idUser).subscribe(
      ()=> { console.log('Usuario eliminado con éxito'),
             location.reload()}
    )
  }

  blockUser(idUser: number){
    this.latService.blockUser(idUser).subscribe(
      ()=> { console.log('Usuario bloqueado con éxito'),
             location.reload()}
    )
  }

  editUser(idUser: number){
    this.router.navigate(['/pages/editar-perfil', idUser]);
  }

  getAllUsers() {
    this.latService.getAllUsers().subscribe(
      (usuarios: Usuario[]) => {
        usuarios.forEach(usuario => {
          this.allUsuarios.push(usuario);
        });
        console.log(this.allUsuarios);
      }
    );
  }
}
