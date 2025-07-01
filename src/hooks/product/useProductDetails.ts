import { useEffect } from "react";
import makeApiRequest from "../../helpers/axiosFunction";
import { BACKEND_URL } from "../../utils/urls";
import { useParams } from "react-router-dom";
import { handleApiError } from "../../helpers/handleApiError";
import useProductDetails from "../../store/slices/productDetails";

const useGetProductDetails = () => {
  const setProductDetails = useProductDetails(
    (state) => state.setProductDetails
  );
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getProductDetails();
    }
  }, []);

  const getProductDetails = async () => {
    try {
      const { data } = await makeApiRequest(
        "get",
        `/product/product-details?productId=${id}`,
        null,
        { withCredentials: true },
        BACKEND_URL
      );
      setProductDetails(data.product);
    } catch (error: unknown) {
      handleApiError(error);
    }
  };
};

export default useGetProductDetails;
