import React, { useState } from "react";
import { Menu, Home, User, Settings } from "lucide-react";
import Navbar from "../Navbar/Navbar";

const Sidebar: React.FC = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar />{" "}
      <div className="flex h-auto">
        {/* Sidebar */}
        <div
          className={`bg-gray-900 text-white p-5 pt-8 relative duration-300 ${
            isOpen ? "w-64" : "w-20"
          }`}
        >
          {/* Toggle Button */}
          <button
            className="absolute top-6 right-3 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Sidebar Items */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-4">
              <Home size={20} />
              {isOpen && <span>Home</span>}
            </div>
            <div className="flex items-center space-x-4">
              <User size={20} />
              {isOpen && <span>Profile</span>}
            </div>
            <div className="flex items-center space-x-4">
              <Settings size={20} />
              {isOpen && <span>Settings</span>}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-7 h-screen overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
