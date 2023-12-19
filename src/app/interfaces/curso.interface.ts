
export interface Curso {
  map(arg0: (curso: any) => import("./cardPC.interface").CardPC): import("./cardPC.interface").CardPC[];
  descripcion:     string;
  nombre:          string;
  subtitulo:       string;
  img:             string;
  url:             string;
}
