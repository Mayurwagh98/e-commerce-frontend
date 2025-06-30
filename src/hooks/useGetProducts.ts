import makeApiRequest from "../helpers/axiosFunction";
import { handleApiError } from "../helpers/handleApiError";
import useProductStore from "../store/slices/products";
import { BACKEND_URL } from "../utils/urls";
import { useEffect } from "react";

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
