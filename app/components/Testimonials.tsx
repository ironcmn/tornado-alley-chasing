"use client";

import { motion } from "motion/react";
import { testimonials } from "../content";

export default function Testimonials() {
  return (
    <div className="columns-1 gap-5 md:columns-2 xl:columns-3 [&>figure]:mb-5 [&>figure]:break-inside-avoid">
      {testimonials.items.map((t, i) => (
        <motion.figure
          key={`${t.name}-${t.year}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
          className="flex h-fit flex-col rounded-2xl border border-line bg-foreground/[0.03] p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-accent" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <span className="font-display text-sm font-semibold text-muted">{t.year}</span>
          </div>
          <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 border-t border-line pt-4">
            <div className="font-display font-semibold uppercase tracking-wide">{t.name}</div>
            <div className="text-xs text-muted">{t.origin}</div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
