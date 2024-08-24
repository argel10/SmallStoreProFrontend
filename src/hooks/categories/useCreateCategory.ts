import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { createCategoryDTO } from "../../types";
import { createCategory } from "../../redux";

export const useCreateCategory = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state: AppStore) => state.categories);
  const { uuid } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";

  const [category, setCategory] = useState<createCategoryDTO>({
    nombre: "",
    estatus: "",
    usuario: uuid,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCategory((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(createCategory({ ...category, usuario: uuid }) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      setCategory({
        nombre: "",
        estatus: "",
        usuario: uuid,
      });
    }
  }, [success]);

  return { handleChange, category, submitCreateHandler };
};
