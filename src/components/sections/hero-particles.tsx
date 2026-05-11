"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  phase: number;
  opacity: number;
};

const gridGap = 24;
const dotColor = "#171820";
const cursorRadius = 330;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function createDots(width: number, height: number) {
  const dots: Dot[] = [];
  const offsetX = (width % gridGap) / 2;
  const offsetY = (height % gridGap) / 2;

  for (let y = offsetY; y <= height + gridGap; y += gridGap) {
    for (let x = offsetX; x <= width + gridGap; x += gridGap) {
      dots.push({
        x,
        y,
        originX: x,
        originY: y,
        phase: (x * 0.017 + y * 0.013) % (Math.PI * 2),
        opacity: 0.18 + ((x + y) % 3) * 0.025,
      });
    }
  }

  return dots;
}

function ellipticalFade(
  x: number,
  y: number,
  centerX: number,
  centerY: number,
  radiusX: number,
  radiusY: number,
) {
  const dx = (x - centerX) / radiusX;
  const dy = (y - centerY) / radiusY;
  return Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy));
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let animationFrame = 0;
    let reduceMotion = prefersReducedMotion();

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = dotColor;

      const mouse = mouseRef.current;
      const contentFadeX = width * 0.5;
      const contentFadeY = height * 0.48;
      const contentRadiusX = Math.max(280, width * 0.34);
      const contentRadiusY = Math.max(230, height * 0.32);

      for (const dot of dots) {
        const dx = dot.originX - mouse.x;
        const dy = dot.originY - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const cursorInfluence = mouse.active
          ? Math.max(0, 1 - distance / cursorRadius)
          : 0;
        const centerFade = ellipticalFade(
          dot.originX,
          dot.originY,
          contentFadeX,
          contentFadeY,
          contentRadiusX,
          contentRadiusY,
        );

        const drift = reduceMotion
          ? 0
          : Math.sin(time * 0.0015 + dot.phase) * 0.55;
        const push = reduceMotion ? 0 : cursorInfluence * 18;
        const targetX = dot.originX + (dx / distance) * push + drift;
        const targetY = dot.originY + (dy / distance) * push + drift * 0.5;

        dot.x += (targetX - dot.x) * 0.16;
        dot.y += (targetY - dot.y) * 0.16;

        const cursorFade = cursorInfluence * 0.9;
        const contentAlpha = 1 - centerFade * 0.72;
        const alpha = Math.max(
          0.018,
          dot.opacity * contentAlpha * (1 - cursorFade),
        );

        context.globalAlpha = alpha;
        context.beginPath();
        context.arc(dot.x, dot.y, 1.05, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      dots = createDots(width, height);
      draw();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      mouseRef.current = { x, y, active };
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      reduceMotion = mediaQuery.matches;
      window.cancelAnimationFrame(animationFrame);
      draw();
      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    if (!reduceMotion) {
      animationFrame = window.requestAnimationFrame(draw);
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    mediaQuery.addEventListener("change", onMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      mediaQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      ref={canvasRef}
    />
  );
}
