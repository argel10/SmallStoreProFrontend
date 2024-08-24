import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppStore } from "../../redux/store";
import { PrivateRoutes } from "../../constants-definitions";
import { Signin } from "../../redux/states";

interface SigninProps {
  email: string;
  password: string;
}

export const useSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error } = useSelector((state: AppStore) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      Signin({
        email: user.email,
        password: user.password,
      } as SigninProps) as any
    );
  };

  useEffect(() => {
    if (success) {
      navigate(PrivateRoutes.HOMEPAGE, { replace: true });
    }
  }, [success, error, navigate]);

  return { handleChange, submit, user };
};
