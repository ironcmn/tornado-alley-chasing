"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { intro } from "../content";
import { FRAME_COUNT, frameSrc } from "../introFrames";

// How many viewport-heights of scrolling the intro occupies in total.
const SCROLL_LENGTH_VH = 500;
// The film plays over the first part of that scroll; the remainder is a
// "hold zone" where the final frame and headline stay pinned, absorbing
// leftover scroll momentum so fast scrollers don't fly past the site.
const FILM_END = 0.8;
// Where (in overall progress) the headline starts fading in.
const TITLE_AT = 0.62;
const TITLE_FULL = 0.78;

export default function IntroScrub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrame = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll wheels move in ~100px notches; the spring turns each notch into a
  // short glide instead of a multi-frame jump.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
    restDelta: 0.0005,
  });

  const titleOpacity = useTransform(smoothProgress, [TITLE_AT, TITLE_FULL], [0, 1]);
  const titleY = useTransform(smoothProgress, [TITLE_AT, TITLE_FULL], [40, 0]);
  const cueOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  // On portrait screens a centered crop of the 16:9 video shows only the road;
  // the two tornado funnels sit at roughly 15% and 75% of the frame width. So on
  // narrow viewports the crop window pans from the left funnel to the right one
  // as the user scrolls, keeping a tornado in view the whole flythrough.
  const focalX = useRef(0.5);

  function computeFocal(p: number) {
    const canvas = canvasRef.current;
    if (!canvas || canvas.width >= canvas.height) return 0.5;
    const filmP = Math.min(p / FILM_END, 1);
    return 0.15 + filmP * 0.6;
  }

  // Draw a frame cover-fitted to the canvas, falling back to the nearest
  // already-loaded frame so fast scrolling never shows a blank canvas.
  function draw(index: number) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let img = framesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let d = 1; d < FRAME_COUNT && !img; d++) {
        const lo = framesRef.current[index - d];
        const hi = framesRef.current[index + d];
        if (lo?.complete && lo.naturalWidth > 0) img = lo;
        else if (hi?.complete && hi.naturalWidth > 0) img = hi;
      }
    }
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const overflowX = dw - cw;
    const dx = overflowX > 0 ? -focalX.current * overflowX : (cw - dw) / 2;
    ctx.drawImage(img, dx, (ch - dh) / 2, dw, dh);
  }

  useMotionValueEvent(smoothProgress, "change", (p) => {
    const filmP = Math.min(p / FILM_END, 1);
    const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(filmP * (FRAME_COUNT - 1))));
    const focal = computeFocal(p);
    const panned = Math.abs(focal - focalX.current) > 0.001;
    if (index !== currentFrame.current || panned) {
      currentFrame.current = index;
      focalX.current = focal;
      draw(index);
    }
  });

  useEffect(() => {
    // Load the first frame eagerly, then the rest; redraw whenever the frame
    // that's currently on screen finishes loading.
    framesRef.current = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        if (Math.abs(i - currentFrame.current) < 2) draw(currentFrame.current);
      };
      return img;
    });

    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      focalX.current = computeFocal(scrollYProgress.get());
      draw(currentFrame.current);
    };
    resize();
    window.addEventListener("resize", resize);

    // Velocity brake: the hold zone absorbs normal momentum, but a hard fling
    // can still blow through ~100vh in a few frames. If the scroll crosses the
    // intro→site boundary downward at high speed, stop once exactly on the end
    // scene. Re-arms only after scrolling back up into the film, so deliberate
    // scrolling (and everything upward) is never hijacked.
    let prevY = window.scrollY;
    let prevT = performance.now();
    let brakeArmed = true;
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const y = window.scrollY;
      const t = performance.now();
      const boundary = container.offsetHeight - window.innerHeight;
      const velocity = (y - prevY) / Math.max(t - prevT, 1); // px per ms
      if (brakeArmed && prevY < boundary && y > boundary && velocity > 1.5) {
        window.scrollTo({ top: boundary, behavior: "instant" });
        brakeArmed = false;
      } else if (y < boundary - window.innerHeight) {
        brakeArmed = true;
      }
      prevY = window.scrollY;
      prevT = t;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      id="top"
      className="relative"
      style={{ height: `${SCROLL_LENGTH_VH}vh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        {/* Darkens as the flythrough ends so the headline sits on a calm frame. */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [TITLE_AT, TITLE_FULL], [0, 0.55]) }}
          className="absolute inset-0 bg-background"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent">
            {intro.tagline}
          </p>
          <h1 className="font-display max-w-4xl text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-7xl">
            Learn to Forecast and Chase{" "}
            <span className="text-accent">Tornadoes</span>
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/expenses"
              className="rounded-full bg-accent px-8 py-3 font-semibold text-background transition-transform hover:scale-105"
            >
              See Pricing
            </a>
            <a
              href="#about"
              className="rounded-full border border-line px-8 py-3 font-semibold text-foreground/90 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Why Chase With Me
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground/80"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]"
          >
            <span>Scroll to start the chase</span>
            <span aria-hidden>↓</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
