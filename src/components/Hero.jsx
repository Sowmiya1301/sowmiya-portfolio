import React from "react";
import sowmi from "../assets/sowmi-img.png";
import { FiArrowRight, FiDownload } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative flex-1 flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
      <div className="flex-1 flex flex-col full-font justify-center pl-8 md:pl-35 pr-8 md:pr-12">
        {/* left */}
        <p className="text-primary font-semibold text-lg mb-2 ">Hello, I'm</p>
        <h1 className="text-7xl md:text-6xl hero-font font-extrabold text-primary-dark leading-tight">
          Sowmiya <br />
          Uthayakumar
        </h1>
        {/* <p className="mt-4 w-fit  items-center bg-primary/10 text-primary-dark border border-primary/20 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
          Web Developer
        </p> */}
        <p className="mt-6 text-body max-w-md">
          I build modern, responsive and user-friendly websites that help brands
          grow and make an impact.
        </p>
        <div className="flex mt-8 gap-4">
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
            View My Work
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7DD3FC] text-primary-dark">
              <FiArrowRight size={18} />
            </span>
          </button>
          <button className="flex items-center gap-2 border border-primary-dark text-primary-dark px-6 py-3 rounded-full font-medium hover:bg-primary-dark hover:text-white transition-colors">
            Download CV
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F3F6FA] text-primary-dark">
              <FiDownload size={18} />
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-end">
        <img
          src={sowmi}
          alt="image of developer"
          className="w-full h-full max-w-[744px] object-contain object-right"
        />
      </div>
    </section>
  );
}

export default Hero;
