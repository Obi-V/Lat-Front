import { Usuario } from "./usuario.interface";

export interface LoginResponse {
  usuario: Usuario;
  token:   string;
}
