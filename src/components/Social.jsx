import React from "react";
import { FiHome, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Social() {
  const links = [
    {
      id: "home",
      href: "#home",
      icon: <FiHome size={20} />,
    },
    {
      id: "github",
      href: "https://github.com/Sowmiya1301",
      icon: <FiGithub size={20} />,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/sowmiya-uthayakumar",
      icon: <FiLinkedin size={20} />,
    },
    {
      id: "mail",
      href: "mailto:usowmiya00@gmail.com",
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
            target={link.id === "home" ? "_self" : "_blank"}
            rel={link.id === "home" ? undefined : "noopener noreferrer"}
            aria-label={link.id}
            className="
              flex items-center justify-center
              w-9 h-9
              rounded-full
              text-slate-800
              hover:text-sky-500
              transition-colors duration-200
            "
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Social;
