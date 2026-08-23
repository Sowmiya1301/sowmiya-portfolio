import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AboutImg from "../assets/about-img.png";
import SkillsImg from "../assets/skills-img.png";
import ProjectsImg from "../assets/projects-img.png";
import ContactImg from "../assets/contact-img.png";

const NavItems = [
  {
    image: AboutImg,
    title: "About Me",
    desc: "Get to know me better and my journey.",
    color: "bg-purple-100",
  },
  {
    image: SkillsImg,
    title: "Skills",
    desc: "Technologies and tools I work with.",
    color: "bg-blue-100",
  },
  {
    image: ProjectsImg,
    title: "Projects",
    desc: "Explore my latest work and case studies.",
    color: "bg-yellow-100",
  },
  {
    image: ContactImg,
    title: "Contact",
    desc: "Let's connect and build something amazing.",
    color: "bg-pink-100",
  },
];

function NavCards() {
  return (
    <div className="grid grid-cols-2 full-font md:grid-cols-4 gap-4 px-6 md:px-44 pb-4">
      {NavItems.map((item) => (
        <div
          key={item.title}
          className="relative bg-white rounded-2xl p-4 
                     shadow-sm hover:shadow-md
                     transition-all duration-300
                     hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex items-start gap-3">
            {/* Image */}
            <div
              className={`w-16 h-16 shrink-0 rounded-full ${item.color} 
                          flex items-center justify-center overflow-hidden`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-semibold text-primary-dark">{item.title}</h3>

              <p className="text-xs text-body mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute right-4 bottom-3 text-primary">
            <FiArrowRight size={18} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavCards;
