import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { createProductDTO } from "../../types";
import { createProduct } from "../../redux";
import { useUploadImage } from "../files";

export const useCreateProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, uploadImage, imageUrl } = useUploadImage();
  const { success } = useSelector((state: AppStore) => state.products);
  const { uuid } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";

  const [category, setCategory] = useState("");

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  console.log(category);

  const [product, setProduct] = useState<createProductDTO>({
    nombre: "",
    precio_de_compra: 0,
    precio_de_venta: 0,
    stock_actual: 0,
    stock_inicial: 0,
    estatus: "",
    imagen: "",
    dado_de_baja: 0,
    ventas: 0,
    categoria: "",
    user: uuid,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setProduct((prev) => ({
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
        createProduct({
          ...product,
          user: uuid,
          imagen: imageUrl,
          stock_inicial: product.stock_actual,
          categoria: category,
        }) as any
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      setProduct({
        nombre: "",
        precio_de_compra: 0,
        precio_de_venta: 0,
        stock_actual: 0,
        stock_inicial: 0,
        estatus: "",
        imagen: "",
        dado_de_baja: 0,
        ventas: 0,
        categoria: "",
        user: uuid,
      });
    }
  }, [success]);

  return {
    handleChange,
    product,
    submitCreateHandler,
    isLoading,
    uploadImage,
    imageUrl,
    handleCategoryChange,
  };
};
