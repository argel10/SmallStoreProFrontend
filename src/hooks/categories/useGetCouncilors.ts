import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../redux";

export const useGetCategories = () => {
  const dispatch = useDispatch();
  const { categories, success } = useSelector(
    (state: AppStore) => state.categories
  );
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllCategories() as any);
  }, [dispatch, success]);

  return { categories, handleSearch, searchTerm };
};
