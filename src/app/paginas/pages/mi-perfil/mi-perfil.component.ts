import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioUpdate } from 'src/app/interfaces/usuarioUpdate.interface';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {

  private authService = inject(AuthService)
  public fb = inject(FormBuilder)

  public usuario = this.authService.currentUser()

  public myForm = this.fb.group({
    username: [this.usuario!.username],
    email: [this.usuario!.email],
    role: [this.usuario!.role.toLocaleLowerCase()],

    //A partir de aquí es lo que se puede cambiar y va en la request
    pais: [this.usuario!.pais, [Validators.minLength(5)]],
    respuesta: [this.usuario!.respuesta],
    descripcion: [this.usuario!.descripcion, [Validators.minLength(5)]],
    subtitulo: [this.usuario!.subtitulo, [Validators.minLength(5)]],
    /*Lo pongo toString para que sea siempre un string, si se setea el valor directamente de la base de datos,
    hasta que no se modifica será un string [] y da problemas */
    habilidades: [this.usuario!.habilidades?.toString()],
    idiomas: [this.usuario!.idiomas?.toString()],
    img: [this.usuario!.img, [Validators.minLength(5)]],
  })

  // Dividir el string por comas y eliminar espacios
  convertirStringToArray(string: string): string[] {
    return string.split(',').map(item => item.trim());
  }

  // Obtener los valores del formulario transformando a lista habilidades e idiomas
  obtenerValoresFormulario():UsuarioUpdate {

    const { habilidades, idiomas, username, email, role, ...valores } = this.myForm.value;

    const arrHabilidades = habilidades != null ? this.convertirStringToArray(habilidades) : [];
    const arrIdiomas = idiomas != null ? this.convertirStringToArray(idiomas) : [];

    // Crear un nuevo objeto con las mismas propiedades que "valores" y agregar las propiedades "habilidades" e "idiomas"
    const valoresActualizados:UsuarioUpdate = { ...valores, habilidades: arrHabilidades, idiomas: arrIdiomas };

    return valoresActualizados;
  }

  update() {

    const jwt           = localStorage.getItem('token')?? ''
    const valoresNuevos = this.obtenerValoresFormulario()

    this.authService.updateUser(valoresNuevos, jwt).subscribe({
      next: () => window.location.reload()
    })
  }
}
