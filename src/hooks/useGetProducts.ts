import makeApiRequest from "../helpers/axiosFunction";
import { handleApiError } from "../helpers/handleApiError";
import { BACKEND_URL } from "../utils/urls";
import { useEffect } from "react";

const useGetProducts = () => {
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
      console.log("data:", data);
    } catch (error: unknown) {
      handleApiError(error);
    }
  };
};

export default useGetProducts;
