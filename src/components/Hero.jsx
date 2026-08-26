import sowmi from "../assets/sowmi-img.png";
import { FiArrowRight, FiDownload } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative flex-1 flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
      <div className="flex-1 flex flex-col full-font justify-center pl-6 sm:pl-8 md:pl-32 pr-6 sm:pr-8 md:pr-12">
        <p className="text-primary font-semibold text-base md:text-lg mb-2">
          Hello, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl hero-font font-extrabold text-primary-dark leading-tight">
          Sowmiya <br className="hidden md:block" />
          Uthayakumar
        </h1>

        <p className="mt-4 md:mt-6 text-sm md:text-base text-body max-w-md">
          I build modern, responsive and user-friendly websites that help brands
          grow and make an impact.
        </p>

        <div className="flex flex-wrap mt-6 md:mt-8 gap-4">
          <button className="group flex items-center gap-4 bg-primary text-white px-4 md:pl-6 pr-4 py-2.5 md:py-3 text-sm md:text-base rounded-full font-medium hover:bg-primary-dark transition-colors">
            See My Work
            <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#7DD3FC] text-surface group-hover:bg-[#0C4A6E] group-hover:text-white transition-colors">
              <FiArrowRight size={16} />
            </span>
          </button>

          <button className="group flex items-center gap-2 border border-primary-dark text-primary-dark px-5 md:pl-6 pr-4 py-2.5 md:py-3 text-sm md:text-base rounded-full font-medium hover:bg-primary-dark hover:text-white transition-colors">
            View Resume
            <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#F3F6FA] text-primary-dark group-hover:bg-[#0C4A6E] group-hover:text-white transition-colors">
              <FiDownload size={16} />
            </span>
          </button>
        </div>
      </div>

      <div className="w-full h-64 sm:h-80 md:h-auto md:flex-1 flex justify-center md:justify-end">
        <img
          src={sowmi}
          alt="image of developer"
          className="w-full h-full max-w-full md:w-full md:max-w-[744px] object-contain object-right md:object-right"
        />
      </div>
    </section>
  );
}

export default Hero;
