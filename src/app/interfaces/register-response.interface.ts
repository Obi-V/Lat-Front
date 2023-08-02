import { Usuario } from "./usuario.interface";

export interface RegisterResponse {
  usuario: Usuario;
  token:   string;
}
