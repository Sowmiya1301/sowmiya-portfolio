import { IoIosHeart } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex justify-between items-center pl-6 sm:pl-8 md:pl-32 pr-6 sm:pr-8 md:pr-16 py-3 md:py-4 bg-surface">
      <div className="flex items-center gap-1">
        <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-dark logo-font">
          Sowmiya
        </span>
        <IoIosHeart className="text-primary-dark rotate-[8deg]" size={16} />
      </div>

      <button className="bg-primary flex items-center gap-1.5 md:gap-2 text-white text-sm md:text-base px-4 md:px-5 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors">
        Let's Connect
        <FiArrowRight size={16} className="md:hidden" />
        <FiArrowRight size={18} className="hidden md:inline" />
      </button>
    </nav>
  );
}

export default Navbar;
