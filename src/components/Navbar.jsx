import { IoIosHeart } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="relative z-20 flex h-16 items-center justify-between bg-surface px-6 py-4 sm:px-8 md:h-20 md:px-32">
      <div className="flex items-center gap-1">
        <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-dark logo-font">
          Sowmiya
        </span>
        <IoIosHeart className="text-primary-dark rotate-[8deg]" size={16} />
      </div>
      <button
        type="button"
        onClick={() => {
          window.location.href = "mailto:usowmiya00@gmail.com";
        }}
        className=" bg-primary w-35 h-12 full-font  items-center  text-white text-sm md:text-base px-4 md:px-5 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
      >
        Let's talk
        {/* <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#7DD3FC] text-surface group-hover:bg-[#0C4A6E] group-hover:text-white transition-colors">
          <FiArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </span> */}
      </button>
    </nav>
  );
}

export default Navbar;
