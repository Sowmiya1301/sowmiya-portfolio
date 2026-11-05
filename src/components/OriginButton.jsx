import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

// Simplified from the shadcn "origin-button": no TypeScript, no shadcn theme
// variables, and it renders a link (<a>) because your hero buttons are links.
//
// The effect: when the cursor enters, a circle grows from the exact spot where
// the cursor came in until it covers the whole button.

const FILL_TRANSITION = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

// The circle must be big enough to reach the FARTHEST corner from the cursor.
// Radius = distance to that corner, diameter = 2 x radius.
function getCoverDiameter(width, height, x, y) {
  return Math.ceil(
    2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(width - x, y),
        Math.hypot(x, height - y),
        Math.hypot(width - x, height - y),
      ),
  );
}

// Props:
//  className          the button's normal look (shape, border, background...).
//                     Do NOT put a text color here, use textClassName.
//  textClassName      text color normally
//  hoverTextClassName text color while the circle covers the button
//  fillClassName      color of the circle that grows from the cursor
//  href, download...  passed straight to the <a>
function OriginButton({
  children,
  className = "",
  textClassName = "text-white",
  hoverTextClassName = "text-white",
  fillClassName = "bg-primary-dark",
  ...props
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 }); // where the circle starts
  const [coverSize, setCoverSize] = useState(0); // how big the circle must grow

  const updateOrigin = useCallback((x, y) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setOrigin({ x, y });
    setCoverSize(getCoverDiameter(rect.width, rect.height, x, y));
  }, []);

  // cursor position relative to the button's top-left corner
  const fromPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    updateOrigin(event.clientX - rect.left, event.clientY - rect.top);
  };

  // keyboard focus has no cursor, so grow from the middle instead
  const fromCenter = () => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    updateOrigin(rect.width / 2, rect.height / 2);
  };

  return (
    <motion.a
      {...props}
      ref={ref}
      onPointerEnter={(event) => {
        fromPointer(event);
        setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) {
          fromCenter();
          setHovered(true);
        }
      }}
      onBlur={() => setHovered(false)}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        hovered ? hoverTextClassName : textClassName
      } ${className}`}
    >
      {/* THE GROWING CIRCLE: sits behind the label, starts at scale 0 */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scale: hovered && coverSize > 0 ? 1 : 0 }}
        transition={FILL_TRANSITION}
        className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${fillClassName}`}
        style={{
          width: coverSize,
          height: coverSize,
          left: origin.x,
          top: origin.y,
        }}
      />

      {/* LABEL: above the circle (relative + z-10) */}
      <span className="relative z-10 inline-flex items-center justify-center gap-3">
        {children}
      </span>
    </motion.a>
  );
}

export default OriginButton;
