import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthStatus, Usuario } from 'src/app/interfaces';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  private router = inject(Router)
  private authService = inject(AuthService)
  public usuario = this.authService.currentUser()


  imagePath: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('../assets/img/LogoArbol.png');
  }

  public sidebarItems = [
    { label: 'Principal', icon: 'assignment', url: './principal' },
    { label: 'Categorias', icon: 'swipe_vertical', url: './categorias' },
    { label: 'Nosotros', icon: 'co_present', url: './nosotros' },
    { label: 'Asistencia', icon: 'support_agent', url: './asistencia' },
  ]

  admin() {
    if (this.usuario != null) {
      return this.usuario.role === 'ADMIN'
    }
    return false
  }

  public noLogeado = [
    { label: 'Login', icon: 'login', url: './login' },
    { label: 'Registrarse', icon: 'assignment_ind', url: './register' },
  ]

  public cuentaLink = { label: 'Mi perfil', icon: 'account_circle', url: './mi-perfil' }

  public administrador = { label: 'Administrador', icon: 'admin_panel_settings', url: './administrador' }

  getRootUrl(): string {
    const currentUrl = this.router.url;
    const parts = currentUrl.split('/');
    return parts[1];
  }

  authenticated(): boolean {
    if (this.authService.authStatus() === AuthStatus.authenticated) return true;

    return false
  }

  logout() {
    this.authService.logout()
    location.reload()
  }
}
