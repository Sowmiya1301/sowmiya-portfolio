import React, { useState } from "react";
import { FiHome, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Social() {
  const [active, setActive] = useState("home");

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
      external: true,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/sowmiya-uthayakumar",
      icon: <FiLinkedin size={20} />,
      external: true,
    },
    {
      id: "mail",
      href: "mailto:usowmiya00@gmail.com",
      icon: <FiMail size={20} />,
    },
  ];

  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-5 z-50">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          onClick={() => setActive(link.id)}
          className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
            active === link.id
              ? "text-primary"
              : "text-primary-dark hover:text-primary"
          }`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default Social;
