import { Curso } from "./curso.interface";
import { Usuario } from "./usuario.interface";

export interface Categoria {

  name : string,
  description: string,
  img: string,
  cursos: Curso [],
  profesores: Usuario [],
}
