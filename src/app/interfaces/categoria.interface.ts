import { Curso } from "./curso.interface";
import { Profesor } from "./profesores.interface";

export interface Categoria {

  name : string,

  cardDescription: string ,

  img: string,

  cursos: Curso [],

  profesores: Profesor [],
}
