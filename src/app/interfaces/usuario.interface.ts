import { Curso } from "./curso.interface";

export interface Usuario {
  id:           number;
  nombre:       string;
  password:     string;
  email:        string;
  rol:          string;
  img?:         string;
  subtitulo?:   string;
  descripcion?: string;
  cursos?:      Curso[];

  pais?:        string;
  habilidades?: string[];
  idiomas?:     string[];
  respuesta?:   string;
}
