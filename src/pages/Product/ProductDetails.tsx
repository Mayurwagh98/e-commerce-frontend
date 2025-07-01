import useGetProductDetails from "../../hooks/product/useProductDetails";
import useProductDetails from "../../store/slices/productDetails";
import { Star } from "lucide-react";

const ProdcutDetails = () => {
  useGetProductDetails();
  const productDetails = useProductDetails((state) => state.productDetails);
  const discountedPrice = Math.round(
    productDetails?.price -
      (productDetails?.discount / 100) * productDetails?.price
  );
  return (
    <>
      {productDetails && (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen p-6">
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden h-[60vh">
            {/* Product Image */}
            <div className="w-full h-96 md:h-auto">
              <img
                src={productDetails?.imageUrl}
                alt={productDetails?.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* productDetails Info */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {productDetails?.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mt-2 capitalize">
                  {productDetails?.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(productDetails?.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill={
                        i < Math.floor(productDetails?.rating)
                          ? "#facc15"
                          : "none"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {productDetails?.rating.toFixed(1)}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-2xl font-semibold text-green-600">
                    ₹{discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through">
                    ₹{productDetails?.price}
                  </span>
                  <span className="text-sm text-red-500 font-medium">
                    {productDetails?.discount}% off
                  </span>
                </div>

                {/* Stock */}
                <div className="mt-2 text-sm text-gray-500">
                  {productDetails?.stock > 0
                    ? `In stock (${productDetails?.stock} available)`
                    : "Out of stock"}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                  Add to Cart
                </button>
                <button className="flex-1 bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-500 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProdcutDetails;
