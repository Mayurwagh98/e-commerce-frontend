import useGetProducts from "../hooks/useGetProducts";
import useProductStore from "../store/slices/products";
import type { Product } from "../store/types";

const Products = () => {
  useGetProducts();
  const products = useProductStore((state) => state.products);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products &&
            products?.map((product: Product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
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
                  <p className="text-sm text-gray-500 mb-2">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-bold text-pink-600">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-400">
                      {product.discount}% off
                    </span>
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
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
