import { Star, Truck, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const categories = [
  { label: "Electronics", count: 154, image: "💻" },
  { label: "Fashion", count: 320, image: "👗", discount: "30%" },
  { label: "Home Appliances", count: 65, image: "🏠" },
  { label: "Mobile Phones", count: 548, image: "📱", discount: "15%" },
  { label: "Books", count: 48, image: "📚", discount: "10%" },
  { label: "Fitness", count: 59, image: "🏋️" },
];

const featuredProducts = [
  {
    name: "Smartphone X",
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.5,
  },
  {
    name: "Wireless Headphones",
    price: "$199",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww",
    rating: 4.2,
  },
  {
    name: "Smartwatch Pro",
    price: "$249",
    image:
      "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
  },
  {
    name: "Gaming Laptop",
    price: "$1299",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    rating: 4.8,
  },
];

const EcommerceDashboard = () => {
  return (
    <>
      <Sidebar
        children={
          <div className="font-sans bg-white text-gray-800">
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="md:col-span-2 bg-blue-50 rounded-lg p-6 relative">
                <h2 className="text-lg font-semibold">Smart & Affordable</h2>
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                  LATEST ELECTRONICS
                </h1>
                <p className="text-sm mt-2">
                  starting at <span className="font-semibold">$199.99</span>
                </p>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded-md text-sm">
                  Shop Now »
                </button>
                <img
                  src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D"
                  alt="Electronics"
                  className="absolute bottom-2 right-2 w-40 md:w-48"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600">
                    Trending
                  </h3>
                  <h2 className="text-lg font-bold">Fashion</h2>
                  <button className="mt-2 px-4 py-1 bg-black text-white text-sm rounded">
                    Shop Now »
                  </button>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-green-600">
                    Bestsellers
                  </h3>
                  <h2 className="text-lg font-bold">Mobiles</h2>
                  <button className="mt-2 px-4 py-1 bg-black text-white text-sm rounded">
                    Shop Now »
                  </button>
                </div>
              </div>
            </section>

            {/* Category Items */}
            <section className="px-6 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="bg-white shadow-sm rounded-lg p-4 text-center relative"
                >
                  <div className="text-3xl mb-2">{cat.image}</div>
                  <h4 className="text-sm font-semibold">{cat.label}</h4>
                  <p className="text-xs text-gray-500">{cat.count} Items</p>
                  {cat.discount && (
                    <span className="absolute top-2 right-2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                      {cat.discount}
                    </span>
                  )}
                </div>
              ))}
            </section>

            {/* Featured Products */}
            <section className="px-6 py-10">
              <h2 className="text-xl font-bold mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-lg shadow-sm p-4 text-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-sm font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {product.price}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            product.rating > i
                              ? "fill-yellow-400"
                              : "fill-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="px-6 py-10 bg-gray-50 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Truck className="w-10 h-10 text-blue-500 mb-2" />
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-gray-500">On orders above $100</p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-green-500 mb-2" />
                <h4 className="font-semibold">Secure Payments</h4>
                <p className="text-sm text-gray-500">
                  100% protected transactions
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-10 h-10 text-yellow-500 mb-2" />
                <h4 className="font-semibold">Top Rated</h4>
                <p className="text-sm text-gray-500">Trusted by thousands</p>
              </div>
            </section>
          </div>
        }
      />
    </>
  );
};

export default EcommerceDashboard;
