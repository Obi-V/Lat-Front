import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthStatus, CheckTokenResponse, LoginResponse, RegisterResponse, Usuario } from '../interfaces/';
import { Router } from '@angular/router';
import { UpdateResponse } from '../interfaces/update-response.interface';
import { UsuarioUpdate } from '../interfaces/usuarioUpdate.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.checkAuthStatus().subscribe()
  }

  private readonly baseUrl: string = 'http://localhost:8080/auth'
  private http = inject(HttpClient)
  private router = inject(Router)

  private _currentUser = signal<Usuario | null>(null)
  private _authStatus = signal<AuthStatus>(AuthStatus.checking)

  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/login`

    // Con ES6 se puede hacer const body = {email, password} pero yo lo veo más claro así:
    const body = {
      username: username,
      password: password
    }

    return this.http.post<LoginResponse>(url, body).pipe(
      map(({ usuario, token }) => this.setAuthentication(usuario, token)),
      catchError(err => {
        console.error('Error al iniciar sesión:', err);
        return throwError(() => 'Error al iniciar sesión. Por favor, verifica tus credenciales e intentalo de nuevo.');
      })
    );
  }

  register(usuario: Usuario): Observable<boolean> {
    const url = this.baseUrl + '/register'

    const body = {
      username: usuario.username,
      password: usuario.password,
      email: usuario.email,
      role: usuario.role.toUpperCase()
    }

    return this.http.post<RegisterResponse>(url, body).pipe(
      map(({ usuario, token }) => this.setAuthentication(usuario, token)),
      catchError(err => {
        console.error('Error al registrar usuario:', err);
        return throwError(() => 'Error al intentar registrar el usuario. Por favor, verifica tus credenciales e intentalo de nuevo.');
      })
    );
  }

  checkAuthStatus(): Observable<boolean> {

    const url = this.baseUrl + '/check-token'
    const token = localStorage.getItem('token')

    if (!token) return of(false)

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)

    return this.http.post<CheckTokenResponse>(url, null, { headers })
      .pipe(
        map(({ usuario, token }) => this.setAuthentication(usuario, token)),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated)
          return of(false)
        })
      )
  }

  setAuthentication(usuario: Usuario, token: string): boolean {
    this._currentUser.set(usuario)
    this._authStatus.set(AuthStatus.authenticated)
    localStorage.setItem('token', token)

    return true
  }

  logout() {
    // Para hacer logout quitamos el token y reseteamos el usuario y el status
    localStorage.removeItem('token')
    this._currentUser.set(null)
    this._authStatus.set(AuthStatus.notAuthenticated)

    /* Recargamos la página para que nos saque en caso de necesitar estar autenticados
       Yo lo hice con "router" de angular pero se puede hacer más facil con javascript: window.location.reload()*/
    this.router.navigateByUrl(this.router.url);
  }

  updateUser(nuevoUsuario: UsuarioUpdate, jwt: string) {
    const url = 'http://localhost:8080/lat/usuario/' + this._currentUser()?.id

    // Hace falta el JWT porque la ruta filtra por Authority o Rol
    const headers = {
      'Authorization': 'Bearer ' + jwt
    };

    const body = nuevoUsuario

    return this.http.put<UpdateResponse>(url, body, { headers }).pipe(
      tap(() => this.router.navigateByUrl(this.router.url)),
      catchError(err => {
        console.error('Error al actualizar usuario:', err);
        return throwError(() => 'Error al actualizar usuario. Por favor, verifica tus credenciales e intentalo de nuevo.');
      }))
  }

}

