import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          <span className="text-pink-600">Thread</span>ory
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/dashboard" className="hover:text-pink-600 transition">
            Dashboard
          </Link>
          <Link to="/products" className="hover:text-pink-600 transition">
            Products
          </Link>
          <Link to="/categories" className="hover:text-pink-600 transition">
            Categories
          </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <button className="relative">
            <FiShoppingCart className="text-xl text-gray-700 hover:text-pink-600" />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-full text-sm hover:border-pink-600">
            <FiUser className="text-gray-600" />
            <span className="text-gray-700">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
