// store/index.ts

import useProductDetails from "./slices/productDetails";
import useProductStore from "./slices/products";
import useStoreProfile from "./slices/userProfile";

// Combine all stores for easy access
const useCombinedStore = () => ({
  product: useProductStore(),
  productDetails: useProductDetails(),
  myProfile: useStoreProfile(),
});

export default useCombinedStore;
