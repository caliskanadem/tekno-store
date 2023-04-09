import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-8 h-[60px] text-white bg-gray-700">
      <h3 className="font-bold italic">Gulhan Tekno Store</h3>
      <div>
        <Link to="/" className="mr-8">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
