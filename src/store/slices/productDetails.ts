import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { ProductDetailsState } from "../types";

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
