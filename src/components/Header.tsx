// src/components/Header.tsx

import { Link } from "react-router-dom";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Crypto Tracker</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-gray-400">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
