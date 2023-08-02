import { Usuario } from "./usuario.interface";

export interface CheckTokenResponse {
  usuario: Usuario;
  token:   string;
}
