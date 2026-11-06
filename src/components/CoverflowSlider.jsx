// Coverflow Slider by Made for Award: https://www.madeforaward.com/ui/galleries/coverflow-slider
// Free and open source (MIT). Changed to plain JSX, and to show any React
// children (your ProjectCards) instead of image URLs.

import { Children, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

gsap.registerPlugin(Draggable, InertiaPlugin);

// Wide containers. The numbers describe how the cards fan out.
const CONFIG_DESKTOP = {
  cardWidth: [320, 0.3, 400], // [min px, share of the container width, max px]
  gap: 330, // distance from the centre card to the first side card
  step: 200, // distance between the next side cards
  stepDecay: 0.71, // each further card is a bit closer than the last
  depth: 90, // how far side cards sit behind the centre card
  depthStep: 15,
  rotBase: 55, // how much the first side card turns (degrees)
  rotStep: 80,
  perspective: 1100,
  centerScale: 1, // 1 keeps the centre card's text crisp
  scaleDrop: 0.15,
  scaleStep: 0.15,
  dragUnit: 420, // how many px of dragging move the slider by one card
  designWidth: 1650,
  minScale: 0.62,
};

// Containers narrower than 768px
const CONFIG_MOBILE = {
  cardWidth: [260, 0.78, 340],
  gap: 200,
  step: 110,
  depth: 60,
  depthStep: 12,
  rotBase: 55,
  rotStep: 70,
  perspective: 800,
  scaleDrop: 0.15,
  scaleStep: 0.12,
  dragUnit: 240,
  designWidth: 400,
  minScale: 0.75,
};

const FADE_ZONE = 0.45;
const MAX_THROW = 1.8;

// Props:
//  children         the cards (one child = one card)
//  spacing          horizontal spacing multiplier
//  tilt             card rotation multiplier (0 = flat)
//  visiblePerSide   cards shown on each side of the centre (1 on phones)
//  intro            fan the cards out from a stack on mount
//  background       must match the section background (the edges fade into it)
//  label            accessible name for the carousel
//
// How it works: Draggable moves an invisible "proxy" element, so dragging only
// changes a number (position). Every card is then placed from its distance to
// that number. The distance wraps the shorter way round, so it never ends.
export default function CoverflowSlider({
  children,
  spacing = 1,
  tilt = 1,
  visiblePerSide = 2,
  intro = true,
  background = "#EAF7FC",
  label = "Projects carousel",
  className = "",
}) {
  const items = Children.toArray(children);
  const count = items.length;

  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const live = useRef({ spacing, tilt, visiblePerSide });
  const redraw = useRef(null);
  const api = useRef({ go: () => {} }); // lets the arrow buttons move the slider

  useEffect(() => {
    live.current = { spacing, tilt, visiblePerSide };
    redraw.current?.();
  }, [spacing, tilt, visiblePerSide]);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const cards = cardRefs.current.slice(0, count);
    if (!root || !stage || !count) return;

    const wrapOffset = gsap.utils.wrap(-count / 2, count / 2);
    const CONFIG = { ...CONFIG_DESKTOP };
    gsap.set(cards, { xPercent: -50, yPercent: -50 }); // anchor each card by its centre

    let rs = 1; // responsive scale factor
    let spread =
      intro && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 1; // 0 -> 1 during the intro
    let position = 0; // which card is in the centre (0 = first, 1 = second...)
    let mobile = false;

    const render = () => {
      const { spacing, tilt } = live.current;
      const visible = mobile ? 1 : live.current.visiblePerSide;

      for (let i = 0; i < count; i++) {
        const off = wrapOffset(i - position); // 0 = centre, negative = left
        const d = Math.abs(off);
        const side = Math.sign(off);
        const t = Math.min(d, 1); // 0 -> 1 while leaving the centre slot
        const rest = Math.max(d - 1, 0); // slots beyond the first side card
        // spacing shrinks toward the edges
        const stack =
          CONFIG.step *
          ((1 - CONFIG.stepDecay ** rest) / (1 - CONFIG.stepDecay));

        gsap.set(cards[i], {
          x: side * (t * CONFIG.gap + stack) * spacing * rs * spread,
          z: -(t * CONFIG.depth + rest * CONFIG.depthStep) * rs * spread,
          rotationY:
            -side *
            (t * CONFIG.rotBase + rest * CONFIG.rotStep) *
            tilt *
            spread,
          scale:
            CONFIG.centerScale - t * CONFIG.scaleDrop - rest * CONFIG.scaleStep,
          opacity: gsap.utils.clamp(
            0,
            1,
            (visible + FADE_ZONE - d) / FADE_ZONE,
          ),
          zIndex: Math.round((count - d) * 10),
          // only the centre card can be clicked, so its links work and the
          // links on tilted side cards can't be hit by accident
          pointerEvents: d < 0.5 ? "auto" : "none",
          force3D: true,
        });
      }
    };
    redraw.current = render;

    const proxy = document.createElement("div");
    const update = () => {
      position = -draggable.x / CONFIG.dragUnit;
      render();
    };

    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: root,
      inertia: true,
      // after a throw, settle exactly on a card
      snap: (value) => Math.round(value / CONFIG.dragUnit) * CONFIG.dragUnit,
      maxDuration: MAX_THROW,
      onDrag: update,
      onThrowUpdate: update,
      // settle on a card even if the throw tween never runs
      onDragEnd() {
        if (this.tween?.isActive()) return;
        gsap.to(proxy, {
          x: Math.round(this.x / CONFIG.dragUnit) * CONFIG.dragUnit,
          duration: 0.5,
          ease: "power3.out",
          onUpdate: () => {
            draggable.update();
            update();
          },
        });
      },
    })[0];

    // Used by the arrow buttons and the keyboard: move one card (dir = 1 or -1)
    api.current.go = (dir) => {
      gsap.killTweensOf(proxy);
      draggable.update();
      const current =
        Math.round(draggable.x / CONFIG.dragUnit) * CONFIG.dragUnit;
      gsap.to(proxy, {
        x: current - dir * CONFIG.dragUnit,
        duration: 0.6,
        ease: "power3.out",
        onUpdate: () => {
          draggable.update();
          update();
        },
      });
    };

    // Sizes follow the container: the mobile config applies under 768px.
    const resize = () => {
      const w = root.clientWidth;
      mobile = w < 768;
      Object.assign(
        CONFIG,
        mobile ? { ...CONFIG_DESKTOP, ...CONFIG_MOBILE } : CONFIG_DESKTOP,
      );

      const [min, share, max] = CONFIG.cardWidth;
      const cardW = Math.min(Math.max(min, w * share), max);
      for (const card of cards) card.style.width = `${cardW}px`;

      // Project cards have different heights, so make the slider as tall as the
      // tallest card (plus some room) instead of guessing a number.
      const tallest = Math.max(...cards.map((card) => card.offsetHeight));
      const wanted = `${Math.ceil(tallest * CONFIG.centerScale + 96)}px`;
      if (root.style.height !== wanted) root.style.height = wanted;

      stage.style.perspective = `${CONFIG.perspective}px`;
      // re-map the proxy so a changed dragUnit doesn't jump the slider
      gsap.set(proxy, { x: -position * CONFIG.dragUnit });
      draggable.update();
      rs = gsap.utils.clamp(CONFIG.minScale, 1, w / CONFIG.designWidth);
      render();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(root);
    resize();
    // text can change height once the web fonts have loaded
    document.fonts?.ready.then(resize).catch(() => {});

    const fan =
      spread < 1 &&
      gsap.to(
        { value: 0 },
        {
          value: 1,
          duration: 1.9,
          delay: 0.5,
          ease: "expo.inOut",
          onUpdate() {
            spread = this.targets()[0].value;
            render();
          },
        },
      );

    return () => {
      if (fan) fan.kill();
      gsap.killTweensOf(proxy);
      draggable.kill();
      ro.disconnect();
      redraw.current = null;
    };
  }, [count, intro]);

  const fade = (dir) => ({
    background: `linear-gradient(${dir}, ${background}, transparent)`,
  });

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") api.current.go(1);
    if (e.key === "ArrowLeft") api.current.go(-1);
  };

  return (
    <div className={className}>
      <div
        ref={rootRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative h-[640px] w-full cursor-grab touch-pan-y select-none overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:cursor-grabbing"
        style={{ background }}
      >
        {/* edges blend into the background */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[500] w-[10%] min-w-10"
          style={fade("to right")}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[500] w-[10%] min-w-10"
          style={fade("to left")}
        />

        {/* vanishing point at the centre keeps both sides mirrored */}
        <div
          ref={stageRef}
          className="absolute inset-0 [perspective-origin:50%_50%]"
        >
          {items.map((child, i) => (
            <div
              key={child.key ?? i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute left-1/2 top-1/2 rounded-2xl shadow-[0_30px_60px_-30px_rgba(11,42,74,0.35)] will-change-[transform,opacity]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS: for mouse and keyboard users who don't drag */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => api.current.go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-dark/15 bg-white text-primary-dark transition-colors hover:bg-primary hover:text-white"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => api.current.go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-dark/15 bg-white text-primary-dark transition-colors hover:bg-primary hover:text-white"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
