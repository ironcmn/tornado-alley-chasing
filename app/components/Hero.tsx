"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { intro } from "../content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: the video recedes slower than the page while the copy lifts and fades.
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-svh overflow-hidden">
      <motion.video
        style={{ y: videoY }}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-accent"
        >
          {intro.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display max-w-4xl text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-7xl"
        >
          Learn to Forecast and Chase{" "}
          <span className="text-accent">Tornadoes</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#dates"
            className="rounded-full bg-accent px-8 py-3 font-semibold text-background transition-transform hover:scale-105"
          >
            See 2027 Dates
          </a>
          <a
            href="#about"
            className="rounded-full border border-line px-8 py-3 font-semibold text-foreground/90 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
          >
            Why Chase With Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]"
        >
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
