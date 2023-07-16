import { Video } from "./video.interface";

export interface Curso {

  nombre:          string;
  subtitulo:       string;
  description:     string;
  img:             string;
  videos:          Video[];
}
