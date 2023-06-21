import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LatService } from 'src/app/shared/lat.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public fb = inject(FormBuilder)
  public latService = inject(LatService)


  public myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  submit(){}

}
