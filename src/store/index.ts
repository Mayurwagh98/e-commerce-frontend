// store/index.ts

import useProductDetails from "./slices/productDetails";
import useProductStore from "./slices/products";

// Combine all stores for easy access
const useCombinedStore = () => ({
  product: useProductStore(),
  productDetails: useProductDetails(),
});

export default useCombinedStore;
