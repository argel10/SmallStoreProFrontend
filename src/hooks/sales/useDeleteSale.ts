import { useDispatch } from "react-redux";
import { deleteSale } from "../../redux";

export const useDeleteSale = () => {
  const dispatch = useDispatch();
  const submitDeleteHandler = async (uuid: string) => {
    try {
      dispatch(deleteSale(uuid) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { submitDeleteHandler };
};
