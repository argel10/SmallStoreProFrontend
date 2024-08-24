export interface Producto {
  productoId: number;
  usuario: number;
  nombre: string;
  precio_de_venta: number;
  stock_actual: number;
  stock_inicial: number;
  categoria: string;
}

export type CrearProductoDTO = Omit<Producto, "productoId">;
export type ActualizarProductoDTO = Partial<Producto>;
