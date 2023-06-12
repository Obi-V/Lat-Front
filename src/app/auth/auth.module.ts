import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
