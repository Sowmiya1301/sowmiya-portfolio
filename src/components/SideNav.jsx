import React, { useEffect, useState } from "react";
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";

function SideNav() {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    {
      id: "home",
      label: "Home",
      href: "#home",
      icon: <FiHome size={17} />,
    },
    {
      id: "about",
      label: "About",
      href: "#about",
      icon: <FiUser size={17} />,
    },
    {
      id: "skills",
      label: "Skills",
      href: "#skills",
      icon: <FiCode size={17} />,
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      icon: <FiBriefcase size={17} />,
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      icon: <FiMail size={17} />,
    },
  ];

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          const currentSection = visibleSections.reduce((prev, current) => {
            return current.intersectionRatio > prev.intersectionRatio
              ? current
              : prev;
          });

          setActiveLink(currentSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-1.5 p-1.5 rounded-full bg-white backdrop-blur-md border border-primary-dark/10 shadow-sm">
        {links.map((link) => {
          const isActive = activeLink === link.id;

          return (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.label}
              className={`
                group relative
                flex items-center justify-center
                w-10 h-10
                rounded-full
                transition-all duration-300
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-primary-dark hover:bg-primary/10"
                }
              `}
            >
              {link.icon}

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute left-14 top-1/2 -translate-y-1/2
                  whitespace-nowrap
                  rounded-md
                  bg-primary-dark
                  px-2.5 py-1.5
                  text-xs text-white
                  opacity-0 translate-x-1
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-200
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    top-1/2 -left-1
                    -translate-y-1/2
                    w-2 h-2
                    rotate-45
                    bg-primary-dark
                  "
                />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
