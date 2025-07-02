import makeApiRequest from "../../helpers/axiosFunction";
import { BACKEND_URL } from "../../utils/urls";
import { handleApiError } from "../../helpers/handleApiError";
import useProductStore from "../../store/slices/products";
import { toast } from "../useToast";

const useDeleteProduct = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  const deleteProduct = async (productId: string) => {
    try {
      const { data } = await makeApiRequest(
        "delete",
        `/product/delete-product?productId=${productId}`,
        null,
        { withCredentials: true },
        BACKEND_URL
      );
      setProducts(data.allProducts);
      toast({
        variant: "success",
        title: "Product deleted",
        description: data.message,
      });
    } catch (error: unknown) {
      handleApiError(error);
    }
  };
  return { deleteProduct };
};

export default useDeleteProduct;
