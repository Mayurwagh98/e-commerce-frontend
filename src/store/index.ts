// store/index.ts

import useProductStore from "./slices/products";

// Combine all stores for easy access
const useCombinedStore = () => ({
  product: useProductStore(),
});

export default useCombinedStore;
