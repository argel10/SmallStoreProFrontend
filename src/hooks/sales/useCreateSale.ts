import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createSaleDTO } from "../../types";
import { createSale } from "../../redux";
import Swal from "sweetalert2";

interface dataProducto {
  uuid: string;
  vendedor: string;
  nombre: string;
  cantidad: number;
  precio: number;
}

export const useCreateSale = () => {
  const dispatch = useDispatch();

  const { uuid } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const [total, setTotal] = useState(0);
  const [dataProducts, setDataProducts] = useState<dataProducto[]>([
    {
      uuid: "",
      vendedor: "",
      nombre: "",
      cantidad: 1,
      precio: 0,
    },
  ]);

  const [sale, setSale] = useState<createSaleDTO>({
    fecha_venta: new Date(),
    total_venta: 0,
    producto: dataProducts,
    user: uuid,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setSale((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(
        createSale({
          ...sale,
          user: uuid,

          total_venta: total,
          producto: dataProducts,
        }) as any
      );

      Swal.fire({
        icon: "success",
        title: "Venta realizada con éxito",
        text: "¡La venta se ha registrado correctamente!",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { handleChange, sale, submitCreateHandler, setDataProducts, setTotal };
};
