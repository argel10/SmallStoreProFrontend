import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { AppStore } from "../../redux/store";
import { Producto } from "../../types";
import { resetCategory, updateCategory } from "../../redux";

export const useUpdateProduct = (data: Producto) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state: AppStore) => state.products);

  const [product, setProduct] = useState<Producto>({
    nombre: data?.nombre,
    precio_de_compra: data?.precio_de_compra,
    precio_de_venta: data?.precio_de_venta,
    stock_actual: data?.stock_actual,
    stock_inicial: data?.stock_inicial,
    estatus: data?.estatus,
    imagen: data?.imagen,
    dado_de_baja: data?.dado_de_baja,
    ventas: data?.ventas,
    categoria: data.categoria,
    user: data?.user,
    uuid: data.uuid,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setProduct((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const submitUpdateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newData = {
        ...product,
        user: data?.user,
        uuid: data?.uuid,
      };
      dispatch(updateCategory(newData) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(resetCategory());
    }
  }, [success]);

  return { handleChange, product, submitUpdateHandler };
};
