import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-15 py-4 bg-surface">
      <div className="flex items-center gap-1 px-23">
        <span className="text-3xl font-semibold text-primary-dark logo-font">
          Sowmiya
        </span>
        <span>
          <IoIosHeart className="text-primary-dark rotate-[8deg]" size={20} />
        </span>
      </div>
      <button className="bg-primary flex gap-2 items-center text-white full-font px-5 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors ">
        Let's Connect
        <FiArrowRight size={18} />
      </button>
    </nav>
  );
}

export default Navbar;
