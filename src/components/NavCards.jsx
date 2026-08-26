import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AboutImg from "../assets/about-icon.png";
import SkillsImg from "../assets/skills-icon.png";
import ProjectsImg from "../assets/project-icon.png";
import ContactImg from "../assets/contact-icon.png";

const NavItems = [
  {
    image: AboutImg,
    title: "About Me",
    desc: (
      <>
        Get to know me better and
        <br /> my journey.
      </>
    ),
  },
  {
    image: SkillsImg,
    title: "Skills",
    desc: (
      <>
        Technologies and tools <br /> I work with.
      </>
    ),
  },
  {
    image: ProjectsImg,
    title: "Projects",
    desc: (
      <>
        Explore my latest work and <br /> case studies.
      </>
    ),
  },
  {
    image: ContactImg,
    title: "Contact",
    desc: (
      <>
        Let's connect and build <br /> something amazing.
      </>
    ),
  },
];

function NavCards() {
  return (
    <div className="grid grid-cols-2 full-font md:grid-cols-4 gap-4 px-6 md:px-32 pb-4">
      {NavItems.map((item) => (
        <div
          key={item.title}
          className="relative bg-white rounded-2xl p-4 md:p-5 
                     shadow-sm hover:shadow-md
                     transition-all duration-300 w-75 h-30
                     hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex items-start gap-3 md:gap-4">
            {/* Image */}
            <div
              className={`w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-surface 
                          flex items-center justify-center overflow-hidden`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-7 h-7 md:w-9 md:h-9 object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-sm md:text-base font-semibold text-primary-dark">
                {item.title}
              </h3>

              <p className="text-xs text-body mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute right-3 md:right-4 bottom-2 text-primary">
            <FiArrowRight size={18} className="md:hidden" />
            <FiArrowRight size={18} className="hidden md:inline" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavCards;
