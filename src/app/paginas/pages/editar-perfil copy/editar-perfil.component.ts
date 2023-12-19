import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioUpdate } from 'src/app/interfaces/usuarioUpdate.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  private route = inject(ActivatedRoute)
  private authService = inject(AuthService)
  public fb = inject(FormBuilder)

  private idUser!: number
  public usuario!: Usuario
 public myForm: FormGroup;

  constructor() {
    // Inicializar el formulario vacío aquí
    this.myForm = this.fb.group({
      username: [''],
      email: [''],
      role: [''],
      pais: [''],
      respuesta: [''],
      descripcion: ['', [Validators.minLength(5)]],
      subtitulo: ['', [Validators.minLength(5)]],
      habilidades: [''],
      idiomas: [''],
      img: ['', [Validators.minLength(5)]],
    });
  }

  ngOnInit() {
    // Acceder al parámetro 'id' de la URL
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('ID obtenido de la URL:', id);
      this.idUser = id;

      this.authService.oneUser(this.idUser).subscribe(
        (user: Usuario) => {
          this.usuario = user;
          console.log(this.usuario);

          // Inicializar el formulario con los datos del usuario después de obtenerlos
          this.inicializarFormulario();
        },
        (error) => {
          console.error('Error al obtener usuario:', error);
        }
      );
    });
  }

  // Función para inicializar el formulario con los datos del usuario
  inicializarFormulario() {
    this.myForm.setValue({
      username: this.usuario?.username || '',
      email: this.usuario?.email || '',
      role: this.usuario?.role ? this.usuario.role.toLocaleLowerCase() : '',
      pais: this.usuario?.pais || '',
      respuesta: this.usuario?.respuesta || '',
      descripcion: this.usuario?.descripcion || '',
      subtitulo: this.usuario?.subtitulo || '',
      habilidades: this.usuario?.habilidades?.toString() || '',
      idiomas: this.usuario?.idiomas?.toString() || '',
      img: this.usuario?.img || '',
    });
  }

  // Dividir el string por comas y eliminar espacios
  convertirStringToArray(string: string): string[] {
    return string.split(',').map(item => item.trim());
  }

  // Obtener los valores del formulario transformando a lista habilidades e idiomas
  obtenerValoresFormulario(): UsuarioUpdate {

    const { habilidades, idiomas, username, email, role, ...valores } = this.myForm.value;

    const arrHabilidades = habilidades != null ? this.convertirStringToArray(habilidades) : [];
    const arrIdiomas = idiomas != null ? this.convertirStringToArray(idiomas) : [];

    // Crear un nuevo objeto con las mismas propiedades que "valores" y agregar las propiedades "habilidades" e "idiomas"
    const valoresActualizados: UsuarioUpdate = { ...valores, habilidades: arrHabilidades, idiomas: arrIdiomas };

    return valoresActualizados;
  }

  update() {

    const valoresNuevos = this.obtenerValoresFormulario()

    this.authService.updateOtroUser(valoresNuevos, this.idUser).subscribe({
      next: () => window.location.reload()
    })
  }
}
