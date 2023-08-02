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

  oneProfe(nombre: string) {
    const url = this.baseUrl+ `perfil-profesor/${nombre}`

    return this.http.get<Usuario>(url)
    .pipe(
      catchError(err => throwError(()=> err.error.message))
    )
  }
}
