import useGetProductDetails from "../../hooks/product/useProductDetails";
import useProductDetails from "../../store/slices/productDetails";

const ProdcutDetails = () => {
  useGetProductDetails();
  const productDetails = useProductDetails((state) => state.productDetails);

  return <></>;
};

export default ProdcutDetails;
