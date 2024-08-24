import { urlApi } from "../../api";
import { CrearProductoDTO, Producto } from "../../types/producto";

export const obtenerProductos = async (): Promise<Producto[]> => {
  const { data } = await urlApi.get("/productos");
  return data.data;
};

export const crearUnProducto = async (producto: CrearProductoDTO) => {
  const { data } = await urlApi.post("/productos", producto);
  return data.data;
};

export const eliminarUnProducto = async (productoId: number) => {
  const { data } = await urlApi.delete(`/productos/${productoId}`);
  return data.data;
};
