import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LatService {

  private readonly baseUrl: string = 'http://localhost:8080/lat'

  private http = inject(HttpClient)

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/login`

    // Con ES6 se puede hacer const body = {email, password} pero yo lo veo más claro así:
    const body = {
      email: email,
      password: password
    }

    return this.http.post<any>(url, body)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      )
  }

  register(usuario: Usuario): Observable<boolean> {
    const url = this.baseUrl + '/usuarios/'

    const body = {
      nombre: usuario.nombre,
      password: usuario.password,
      email: usuario.email,
      rol: usuario.rol.toUpperCase()
    }

    return this.http.post<any>(url, body)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      )
  }

  oneProfe(nombre: string) {
    const url = this.baseUrl+ `perfil-profesor/${nombre}`

    return this.http.get<Usuario>(url)
    .pipe(
      catchError(err => throwError(()=> err.error.message))
    )
  }
}
