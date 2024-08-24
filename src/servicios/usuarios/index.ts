import { urlApi } from "../../api";
import { CrearUsuarioDTO } from "../../types/user";

export const iniciarSesionApi = async (correo: string, contraseña: string) => {
  const { data } = await urlApi.post("/iniciar-sesion", { correo, contraseña });
  return data;
};

export const registrarseApi = async (usuario: CrearUsuarioDTO) => {
  const { data } = await urlApi.post("/registrarse", usuario);
  return data;
};
