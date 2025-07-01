import { useEffect, useRef, useState } from "react";
import { FiShoppingCart, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: unknown) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
        <div className="flex items-center space-x-6 relative" ref={dropdownRef}>
          {/* Cart */}
          <button className="relative">
            <FiShoppingCart className="text-xl text-gray-700 hover:text-pink-600" />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-full text-sm hover:border-pink-600"
            >
              <FiUser className="text-gray-600" />
              <span className="text-gray-700">Profile</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-sm">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <FiUser className="inline-block mr-2" />
                  My Account
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <FiSettings className="inline-block mr-2" />
                  Settings
                </Link>
                <button
                  onClick={() => alert("Logging out...")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <FiLogOut className="inline-block mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
