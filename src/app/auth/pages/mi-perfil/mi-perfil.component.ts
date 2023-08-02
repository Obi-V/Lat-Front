import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LatService } from 'src/app/shared/lat.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {

  public fb = inject(FormBuilder)
  public latService = inject(LatService)
  public router = inject(Router)

  public roles: string[] = ['Alumno', 'Profesor']

  public myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
    rol: ['', [Validators.required]],
  },
    {
      validator: this.checkPasswords
    })

  //Error si las contraseñas no coinciden
  passwordsDoNotMatch(): boolean {
    return this.myForm.hasError('passwordsDoNotMatch') && this.myForm.get('password2')!.dirty;
  }

  //Validator custom que comprueba si las contraseñas coinciden
  checkPasswords(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password');
    const password2 = control.get('password2');

    if (password!.value !== password2!.value) {
      control.get('password2')!.setErrors({ passwordsDoNotMatch: true });
    } else {
      control.get('password2')!.setErrors(null);
    }
    return null;
  }


  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio'
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`
        case 'email':
          return 'Este campo tiene que ser un email'
        case 'passwordsDoNotMatch':
          return 'Las contraseñas no coinciden'
      }
    }
    return null
  }

  crear() {
    if (this.myForm.valid){

      const { password2, ...nuevoUsuario} = this.myForm.value
      // TODO hay que hacer un put o patch
      //this.latService.register(nuevoUsuario).subscribe()

      this.router.navigate(['/auth/login'])
    }
    this.myForm.markAllAsTouched()
  }

}
