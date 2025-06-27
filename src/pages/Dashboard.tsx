import React from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User2,
  MapPin,
  ChevronDown,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";

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
    image: "https://via.placeholder.com/300x200?text=Smartphone",
    rating: 4.5,
  },
  {
    name: "Wireless Headphones",
    price: "$199",
    image: "https://via.placeholder.com/300x200?text=Headphones",
    rating: 4.2,
  },
  {
    name: "Smartwatch Pro",
    price: "$249",
    image: "https://via.placeholder.com/300x200?text=Smartwatch",
    rating: 4.7,
  },
  {
    name: "Gaming Laptop",
    price: "$1299",
    image: "https://via.placeholder.com/300x200?text=Laptop",
    rating: 4.8,
  },
];

const EcommerceDashboard = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" className="h-6" />
          <div className="relative">
            <button className="px-4 py-2 border rounded-md text-sm">
              Category
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products..."
              className="px-4 py-2 border rounded-md w-64 text-sm"
            />
            <Search className="absolute top-2.5 right-3 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <User2 className="w-5 h-5" />
            <span className="text-sm">LOGIN</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-5 h-5" />
            <span className="text-sm">3-ITEMS</span>
          </div>
          <div className="flex items-center space-x-1">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm">3-ITEMS</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">SURAT, IN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex items-center space-x-6 px-6 py-3 text-sm border-b">
        <div className="text-lg">☰</div>
        <a href="#" className="hover:text-primary">
          Home
        </a>
        <a href="#" className="hover:text-primary">
          Categories
        </a>
        <a href="#" className="hover:text-primary">
          Products
        </a>
        <a href="#" className="hover:text-primary">
          Deals
        </a>
        <a href="#" className="hover:text-primary">
          Support
        </a>
        <a href="#" className="hover:text-primary">
          Account
        </a>
      </nav>

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
            src="https://via.placeholder.com/300x200?text=Electronics+Banner"
            alt="Electronics"
            className="absolute bottom-2 right-2 w-40 md:w-48"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600">Trending</h3>
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
            className="bg-white shadow-sm rounded-lg p-4 text-center border relative"
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
              className="border rounded-lg shadow-sm p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.price}</p>
              <div className="flex items-center justify-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      product.rating > i ? "fill-yellow-400" : "fill-gray-300"
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
          <p className="text-sm text-gray-500">100% protected transactions</p>
        </div>
        <div className="flex flex-col items-center">
          <Star className="w-10 h-10 text-yellow-500 mb-2" />
          <h4 className="font-semibold">Top Rated</h4>
          <p className="text-sm text-gray-500">Trusted by thousands</p>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDashboard;
