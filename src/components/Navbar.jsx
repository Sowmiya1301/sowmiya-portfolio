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

      <button className="group bg-primary w-40 h-12 flex items-center justify-between text-white text-sm md:text-base px-4 md:px-5 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors">
        Let's talk
        <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#7DD3FC] text-surface group-hover:bg-[#0C4A6E] group-hover:text-white transition-colors">
          <FiArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
