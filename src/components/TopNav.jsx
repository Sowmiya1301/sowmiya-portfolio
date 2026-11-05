import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FiMenu } from "react-icons/fi";

// Same links as your old SideNav. Defined outside the component so the list is
// created once, not on every render.
const links = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];

// How far you must scroll UP (after it collapsed) before it opens again
const EXPAND_SCROLL_THRESHOLD = 80;

// Variants = named animation states. The <nav> switches between "expanded" and
// "collapsed", and every child that has the same state names follows along.
const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07, // links appear one after another
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem", // same as the height (h-12), so it becomes a circle
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren", // wait until the links have faded out
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", damping: 15 },
  },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const menuIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 15, stiffness: 300, delay: 0.15 },
  },
};

function TopNav() {
  const [isExpanded, setExpanded] = useState(true);
  const [activeLink, setActiveLink] = useState("home");

  // ---------- collapse / expand on scroll ----------
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const scrollPositionOnCollapse = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    // scrolling DOWN and past 150px -> shrink to a circle
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    }
    // scrolling UP by 80px or more since it collapsed -> open again
    else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }

    lastScrollY.current = latest;
  });

  // clicking the circle opens it (instead of following a link)
  const handleNavClick = (e) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  // ---------- highlight the link of the section you're looking at ----------
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        // the intro slide-down is handled by initial -> animate below
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={`relative flex h-12 items-center overflow-hidden rounded-full border border-primary-dark/10 bg-white/80 shadow-lg backdrop-blur-md ${
          !isExpanded ? "cursor-pointer justify-center" : ""
        }`}
      >
        {/* LINKS */}
        <motion.div
          className={`flex items-center gap-1 px-1.5 ${
            !isExpanded ? "pointer-events-none" : ""
          }`}
        >
          {links.map((link) => {
            const isActive = activeLink === link.id;

            return (
              <motion.a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                tabIndex={isExpanded ? 0 : -1}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
                className={`flex h-9 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-primary-dark hover:bg-primary/10"
                }`}
              >
                {link.icon}
                {/* labels only from the "sm" screen size up, icons only on phones */}
                <span className="hidden sm:inline">{link.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* MENU ICON: only visible when collapsed */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            initial="expanded"
            variants={menuIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            className="text-primary-dark"
          >
            <FiMenu size={20} />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}

export default TopNav;
