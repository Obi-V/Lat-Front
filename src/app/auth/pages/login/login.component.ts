import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public fb          = inject(FormBuilder)
  public authService = inject(AuthService)
  public router      = inject(Router)

  public myForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  login() {

    if (this.myForm.valid) {

      const { username, password } = this.myForm.value

      if (typeof username === 'string' && typeof password === 'string') {
        this.authService.login(username, password).subscribe({
          next: ()=> this.router.navigateByUrl('/pages'),
          error: (message) => {
            Swal.fire('Error', message, 'error')
          }
        })
      }
    }
    this.myForm.markAllAsTouched()
  }
}
