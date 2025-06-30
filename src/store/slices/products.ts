// store/slices/productSlice.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Product } from "../types";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  setProducts: (products: Product[]) => void;
}

const storeProducts = (set) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: (products: unknown) => set({ products }, false, "setProducts"),
});

// Correct way to use devtools
const useProductStore = create<ProductState>()(
  devtools(storeProducts, { name: "ProductStore" })
);

export default useProductStore;
