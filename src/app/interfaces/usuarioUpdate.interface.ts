export interface UsuarioUpdate {

  /* Esta interface la vamos a usar para mandar este objeto a Actualizar
     el usuario desde la página de mi-perfil */
  pais?:        string | null;
  habilidades?: string[];
  idiomas?:     string[];
  respuesta?:   string| null;

  img?:         string| null;
  subtitulo?:   string| null;
  descripcion?: string| null;

}
