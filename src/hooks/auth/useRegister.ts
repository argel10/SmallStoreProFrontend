import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { CreateUserDTO } from "../../types";
import { Signup } from "../../redux/states";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../constants-definitions";

export const useRegister = (url: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success } = useSelector((state: AppStore) => state.auth);

  const [user, SetUser] = useState<CreateUserDTO>({
    name: "",
    email: "",
    password: "",
    photo: "",
    phone: "",
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      SetUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(Signup({ ...user, photo: url }) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      navigate(PrivateRoutes.HOMEPAGE, { replace: true });
    }
  }, [success]);

  return { handleChange, user, submitCreateHandler };
};
