import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

// Same links as your old SideNav. Defined outside the component so the list is
// created once, not on every render.
const links = [
  { id: "home", label: "Home", href: "#home", icon: <FiHome size={17} /> },
  { id: "about", label: "About", href: "#about", icon: <FiUser size={17} /> },
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

// ---------------------------------------------------------------------------
// PHONES: a round menu button in the top-right corner. Tapping it opens a
// small panel with all the links. (Shown below the "md" breakpoint, 768px.)
// ---------------------------------------------------------------------------
function MobileMenu({ activeLink }) {
  const [open, setOpen] = useState(false);

  // close with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary-dark/10 bg-white/80 text-primary-dark shadow-lg backdrop-blur-md"
      >
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          // tapping anywhere outside the panel closes it
          <motion.div
            key="backdrop"
            aria-hidden
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary-dark/20 backdrop-blur-[2px]"
          />
        )}

        {open && (
          <motion.nav
            key="panel"
            id="mobile-menu"
            aria-label="Main navigation"
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            style={{ transformOrigin: "top right" }}
            className="fixed right-4 top-[4.75rem] z-50 w-60 rounded-3xl border border-primary-dark/10 bg-white/90 p-2 shadow-xl backdrop-blur-md"
          >
            {links.map((link) => {
              const isActive = activeLink === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)} // close, then the page scrolls to the section
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-primary-dark hover:bg-primary/10"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

function TopNav() {
  const [isExpanded, setExpanded] = useState(true);
  const [activeLink, setActiveLink] = useState("home");

  // ---------- collapse / expand on scroll (desktop pill) ----------
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
    <>
      {/* DESKTOP / TABLET (768px and up): the floating pill that collapses on scroll */}
      <div className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 md:block">
        <motion.nav
          aria-label="Main navigation"
          initial={{ y: -80, opacity: 0 }}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={containerVariants}
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
                  <span>{link.label}</span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* MENU ICON: only visible when collapsed */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              variants={menuIconVariants}
              initial="expanded"
              animate={isExpanded ? "expanded" : "collapsed"}
              className="text-primary-dark"
            >
              <FiMenu size={20} />
            </motion.div>
          </div>
        </motion.nav>
      </div>

      {/* PHONES (below 768px): menu button that opens a panel */}
      <MobileMenu activeLink={activeLink} />
    </>
  );
}

export default TopNav;
