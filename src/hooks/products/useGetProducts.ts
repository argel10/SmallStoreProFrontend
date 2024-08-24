import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../redux";

export const useGetProducts = () => {
  const dispatch = useDispatch();
  const { products, success } = useSelector(
    (state: AppStore) => state.products
  );
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllProducts() as any);
  }, [dispatch, success]);

  return { products, handleSearch, searchTerm };
};
