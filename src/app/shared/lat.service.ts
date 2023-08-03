import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LatService {

  private readonly baseUrl: string = 'http://localhost:8080/lat/'

  private http = inject(HttpClient)

  oneProfe(nombre: string) {
    const url = this.baseUrl+ `usuario/profesor/${nombre}`

    return this.http.get<Usuario>(url)
    .pipe(
      catchError(err => throwError(()=> err.error.message))
    )
  }
}
