import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBox, FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-lg p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        ERP Panel
      </h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaHome className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaUser className="mr-2" /> Kullanıcılar
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaBox className="mr-2" /> Ürünler
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaShoppingCart className="mr-2" /> Siparişler
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
