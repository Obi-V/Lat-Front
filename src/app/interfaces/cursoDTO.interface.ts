import { CardPCDTO } from './cardPCDTO.interface';

export interface CursoDTO {
  map(arg0: (curso: any) => import("./cardPCDTO.interface").CardPCDTO): import("./cardPCDTO.interface").CardPCDTO[];
  id:              number;
  descripcion:     string;
  nombre:          string;
  subtitulo:       string;
  img:             string;
  url:             string;
}
