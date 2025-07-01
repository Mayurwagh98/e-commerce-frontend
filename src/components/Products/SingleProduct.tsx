import { useNavigate } from "react-router-dom";
import type { Product } from "../../store/types";

const SingleProduct = ({ product }: { product: Product }) => {
  const naivgate = useNavigate();
  return (
    <div
      key={product._id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
      onClick={() => naivgate("/product-details/" + product._id)}
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-48 w-full object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold capitalize text-gray-800">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-pink-600">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-400">{product.discount}% off</span>
        </div>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <span>⭐ {product.rating}</span>
          <span>{product.stock} in stock</span>
        </div>
        <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
