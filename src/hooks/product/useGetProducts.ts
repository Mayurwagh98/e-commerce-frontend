import { useEffect } from "react";
import makeApiRequest from "../../helpers/axiosFunction";
import useProductStore from "../../store/slices/products";
import { BACKEND_URL } from "../../utils/urls";
import { handleApiError } from "../../helpers/handleApiError";

const useGetProducts = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await makeApiRequest(
        "get",
        `/product/all-product`,
        null,
        { withCredentials: true },
        BACKEND_URL
      );
      setProducts(data.products);
    } catch (error: unknown) {
      handleApiError(error);
    }
  };
};

export default useGetProducts;
