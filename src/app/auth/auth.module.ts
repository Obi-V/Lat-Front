import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MiPerfilComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    MiPerfilComponent
  ]
})
export class AuthModule { }
