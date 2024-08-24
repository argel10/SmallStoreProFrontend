import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux";

export const useDeleteCategory = () => {
  const dispatch = useDispatch();
  const submitDeleteHandler = async (uuid: string) => {
    try {
      dispatch(deleteCategory(uuid) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { submitDeleteHandler };
};
