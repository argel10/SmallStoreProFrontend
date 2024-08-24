import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { AppStore } from "../../redux/store";
import { Categoria } from "../../types";
import { resetCategory, updateCategory } from "../../redux";

export const useUpdateCategory = (data: Categoria) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state: AppStore) => state.categories);

  const [category, setCategory] = useState<Categoria>({
    nombre: data.nombre,
    estatus: data.estatus,
    usuario: data.usuario,
    uuid: data.uuid,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCategory((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const submitUpdateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newCategory = {
        ...category,
        usuario: data?.usuario,
        uuid: data?.uuid,
      };
      dispatch(updateCategory(newCategory) as any);
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

  return { handleChange, category, submitUpdateHandler };
};
