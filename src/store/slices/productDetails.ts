import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductDetailsState {
  productDetails: any;
  loading: boolean;
  error: string | null;
  setProductDetails: (productDetails: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const sotreProductDetails = (set) => ({
  productDetails: null,
  loading: false,
  error: null,
  setProductDetails: (productDetails: unknown) =>
    set({ productDetails }, false, "setProductDetails"),
});

const useProductDetails = create<ProductDetailsState>()(
  devtools(sotreProductDetails, { name: "ProductDetailsStore" })
);

export default useProductDetails;
