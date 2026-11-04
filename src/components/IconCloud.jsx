import { useEffect, useMemo, useRef } from "react";

const ICON_SIZE = 40;
const SPHERE_RADIUS = 100;

// Spread points evenly over a sphere.
function fibonacciSphere(count) {
  const points = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;

    points.push({
      x: Math.cos(phi) * r * SPHERE_RADIUS,
      y: y * SPHERE_RADIUS,
      z: Math.sin(phi) * r * SPHERE_RADIUS,
    });
  }

  return points;
}

// 3D rotation and projection.
function project(point, rot) {
  const cosX = Math.cos(rot.x);
  const sinX = Math.sin(rot.x);
  const cosY = Math.cos(rot.y);
  const sinY = Math.sin(rot.y);

  const x = point.x * cosY - point.z * sinY;
  const z = point.x * sinY + point.z * cosY;
  const y = point.y * cosX + z * sinX;

  return { x, y, z, scale: (z + 200) / 300 };
}

function IconCloud({ images = [] }) {
  const canvasRef = useRef(null);

  const rotation = useRef({ x: 0, y: 0 });
  const sprites = useRef([]);

  const points = useMemo(
    () => fibonacciSphere(images.length || 20),
    [images.length],
  );

  // Load icons.
  useEffect(() => {
    let cancelled = false;

    sprites.current = images.map((src) => {
      const canvas = document.createElement("canvas");
      canvas.width = ICON_SIZE;
      canvas.height = ICON_SIZE;

      const sprite = { canvas, loaded: false };
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        if (cancelled) return;

        ctx.beginPath();
        ctx.arc(ICON_SIZE / 2, ICON_SIZE / 2, ICON_SIZE / 2, 0, Math.PI * 2);
        ctx.clip();

        ctx.drawImage(img, 0, 0, ICON_SIZE, ICON_SIZE);
        sprite.loaded = true;
      };

      img.src = src;

      return sprite;
    });

    return () => {
      cancelled = true;
    };
  }, [images]);

  // Automatic infinite rotation.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let frame;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Rotate continuously forever.
      rotation.current.y += 0.003;

      // Draw icons according to their depth.
      points
        .map((p, i) => ({
          ...project(p, rotation.current),
          i,
        }))
        .sort((a, b) => a.z - b.z)
        .forEach(({ x, y, z, scale, i }) => {
          const sprite = sprites.current[i];

          if (!sprite || !sprite.loaded) return;

          ctx.save();
          ctx.translate(cx + x, cy + y);
          ctx.scale(scale, scale);

          ctx.globalAlpha = Math.max(0.2, Math.min(1, (z + 150) / 200));

          ctx.drawImage(sprite.canvas, -ICON_SIZE / 2, -ICON_SIZE / 2);

          ctx.restore();
        });

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [points]);

  return (
    <div className="relative w-full aspect-square">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="h-full w-full"
        role="img"
        aria-label="Rotating 3D cloud of technology icons"
      />
    </div>
  );
}

export default IconCloud;
