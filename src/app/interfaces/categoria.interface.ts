import { Curso } from "./curso.interface";
import { Profesor } from "./profesor.interface";

export interface Categoria {

  name : string,

  cardDescription: string ,

  img: string,

  cursos: Curso [],

  profesores: Profesor [],
}
