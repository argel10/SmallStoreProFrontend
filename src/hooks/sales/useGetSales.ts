import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { useEffect, useState } from "react";
import { getAllSales } from "../../redux";

export const useGetSales = () => {
  const dispatch = useDispatch();
  const { sales, success } = useSelector((state: AppStore) => state.sales);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    dispatch(getAllSales() as any);
  }, [dispatch, success]);

  return { sales, handleSearch, searchTerm };
};
