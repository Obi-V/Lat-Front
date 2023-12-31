import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public fb          = inject(FormBuilder)
  public authService = inject(AuthService)
  private router     = inject(Router)

  public roles: string[] = ['Alumno', 'Profesor']

  public myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
    role: ['', [Validators.required]],
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

  register() {
    if (this.myForm.valid) {

      const { password2, ...nuevoUsuario } = this.myForm.value

      this.authService.register(nuevoUsuario).subscribe({
        next: ()=> this.router.navigateByUrl('/pages'),
        error: (message) => { Swal.fire('Error', message, 'error') }
      })
    }
    this.myForm.markAllAsTouched()
  }
}
