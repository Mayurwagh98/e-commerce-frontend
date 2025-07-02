import { useNavigate } from "react-router-dom";
import type { Product } from "../../store/types";
import useDeleteProduct from "../../hooks/product/useDeleteProduct";

const SingleProduct = ({ product }: { product: Product }) => {
  const naivgate = useNavigate();
  const { deleteProduct } = useDeleteProduct();
  return (
    <div
      key={product._id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-48 w-full object-cover rounded-t-2xl"
        onClick={() => naivgate("/product-details/" + product._id)}
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
        <div className="flex justify-between items-center">
          <button className="mt-4 w-[45%] bg-black hover:bg-pink-700 text-white py-2 px-4 rounded-lg">
            Add to Cart
          </button>
          <button
            className="mt-4 w-[45%] bg-red-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg"
            onClick={() => deleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
