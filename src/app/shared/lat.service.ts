import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { Curso } from '../interfaces';
import { CursoDTO } from '../interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class LatService {

  private readonly baseUrl: string = 'http://localhost:8080/lat/'

  private http = inject(HttpClient)
  private authService = inject(AuthService)

  public usuario = this.authService.currentUser()

  getAllUsers() {
    const url = this.baseUrl + `usuario/`;
    return this.http.get<Usuario[]>(url)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );
  }

  getAllCursos() {
    const url = this.baseUrl + `curso/`;
    return this.http.get<Curso[]>(url)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );
  }

  getAllCursosDTO() {
    const url = this.baseUrl + `curso/`;
    return this.http.get<CursoDTO[]>(url)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );
  }

  blockUser(idUser: number) {
    const url = this.baseUrl + `usuario/block/${idUser}`;

    return this.http.put<Usuario>(url,{"role": "BLOQUEADO"})
      .pipe(
        catchError(err => throwError(() => err.error.message))
      )
  }

  eliminarUser(idUser: number) {
    const url = this.baseUrl + `usuario/${idUser}`;

    return this.http.delete<Usuario>(url)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      )
  }

  misCursos() {
    const url = this.baseUrl + `usuario/cursos/${this.usuario?.username}`;

    return this.http.get<Curso[]>(url)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );
  }

  aniadirCurso(idCurso: number){
    const url = this.baseUrl + `usuario/cursos/${this.usuario?.username}/${idCurso}`;
    return this.http.post<Curso[]>(url,'')
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );
  }

  eliminarCursos(){
    const url = this.baseUrl + `usuario/cursos/${this.usuario?.id}`;
    return this.http.delete<Curso[]>(url)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      );
  }

  oneProfe(nombre: string) {
    const url = this.baseUrl + `usuario/profesor/${nombre}`

    return this.http.get<Usuario>(url)
      .pipe(
        catchError(err => throwError(() => err.error.message))
      )
  }
}
