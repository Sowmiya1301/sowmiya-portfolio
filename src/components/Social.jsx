import React from "react";
import UseAnimations from "react-useanimations";

import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";

function Social() {
  const links = [
    {
      id: "github",
      href: "https://github.com/Sowmiya1301",
      icon: github,
      label: "GitHub",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/sowmiya-uthayakumar",
      icon: linkedin,
      label: "LinkedIn",
    },
    {
      id: "mail",
      href: "mailto:usowmiya00@gmail.com",
      icon: mail,
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-7">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target={link.id === "mail" ? "_self" : "_blank"}
          rel={link.id === "mail" ? undefined : "noopener noreferrer"}
          aria-label={link.label}
          title={link.label}
          className="flex h-8 w-8 items-center justify-center text-primary-dark transition-all duration-200 hover:-translate-y-1 hover:text-primary"
        >
          <UseAnimations
            animation={link.icon}
            size={26}
            autoplay={false}
            loop={false}
          />
        </a>
      ))}
    </div>
  );
}

export default Social;
