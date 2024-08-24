export interface Usuario {
  usuarioId: number;
  nombre: string;
  apellido: string;
  correo: string;
  contraseña: string;
  rol: string;
}

export type CrearUsuarioDTO = Omit<Usuario, "usuarioId">;
export type UsuarioPartial = Partial<Usuario>;
