import { Curso } from "./curso.interface";

export interface Usuario {

  /* Obligatorio, se hace en el registro */
  id:                    number;
  username:              string;
  password:              string;
  email:                 string;
  role:                  string;

  /* A partir de aquí hay que completarlo en el perfil */
  pais?:        string;
  habilidades?: string[];
  idiomas?:     string[];
  respuesta?:   string;

  img?:         string;
  subtitulo?:   string;
  descripcion?: string;
  cursos?:      Curso[];

  /* UserDetails */
  enabled:               boolean;
  authorities:           String[];
  accountNonLocked:      boolean;
  accountNonExpired:     boolean;
  credentialsNonExpired: boolean;
}
