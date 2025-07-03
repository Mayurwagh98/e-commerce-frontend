import makeApiRequest from "../../helpers/axiosFunction";
import { BACKEND_URL } from "../../utils/urls";
import { handleApiError } from "../../helpers/handleApiError";
import { toast } from "../useToast";
import type { ProductFormData } from "../../store/types";
import { useState } from "react";

const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const createProduct = async (payload: ProductFormData, setOpenDrawer) => {
    try {
      setLoading(true);
      const { data } = await makeApiRequest(
        "post",
        `/product/add-product`,
        payload,
        { withCredentials: true },
        BACKEND_URL
      );
      if (data.success) {
        toast({
          variant: "success",
          title: "Product Added",
          description: data.message,
        });
        setOpenDrawer(false);
      }
    } catch (error: unknown) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };
  return { createProduct, loading };
};

export default useCreateProduct;
