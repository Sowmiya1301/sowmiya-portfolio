import React, { useState } from "react";
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";

function SideNav() {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    {
      id: "home",
      label: "Home",
      href: "#home",
      icon: <FiHome size={20} />,
    },
    {
      id: "about",
      label: "About Me",
      href: "#about",
      icon: <FiUser size={20} />,
    },
    {
      id: "skills",
      label: "Skills",
      href: "#skills",
      icon: <FiCode size={20} />,
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      icon: <FiBriefcase size={20} />,
    },
    {
      id: "contact",
      label: "Contact Me",
      href: "#contact",
      icon: <FiMail size={20} />,
    },
  ];

  return (
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4 p-2.5 bg-white border border-gray-200 rounded-full shadow-md">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            title={link.label}
            onClick={() => setActiveLink(link.id)}
            className={`
              flex items-center justify-center
              w-9 h-9
              rounded-full
              transition-all duration-200
              ${
                activeLink === link.id
                  ? "text-sky-500 bg-sky-50"
                  : "text-slate-800 hover:text-sky-500 hover:bg-sky-50"
              }
            `}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
