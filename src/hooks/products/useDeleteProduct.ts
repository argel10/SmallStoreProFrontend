import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux";

export const useDeleteProduct = () => {
  const dispatch = useDispatch();
  const submitDeleteHandler = async (uuid: string) => {
    try {
      dispatch(deleteProduct(uuid) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { submitDeleteHandler };
};
