import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Social() {
  const links = [
    {
      id: "github",
      href: "https://github.com/Sowmiya1301",
      icon: <FiGithub size={22} />,
      label: "GitHub",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/sowmiya-uthayakumar",
      icon: <FiLinkedin size={22} />,
      label: "LinkedIn",
    },
    {
      id: "mail",
      href: "mailto:usowmiya00@gmail.com",
      icon: <FiMail size={22} />,
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center gap-4 py-1 px-3 mt-5">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target={link.id === "mail" ? "_self" : "_blank"}
          rel={link.id === "mail" ? undefined : "noopener noreferrer"}
          aria-label={link.label}
          title={link.label}
          className="
            text-primary-dark
            hover:text-primary
            transition-all duration-200
            hover:-translate-y-1
          "
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default Social;
