"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { EMAIL } from "../content";

const links = [
  { href: "/", label: "Home" },
  { href: "/chase-history", label: "Chase History" },
  { href: "/chasing-with-me", label: "Chasing With Me" },
  { href: "/expenses", label: "Expenses" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/training", label: "1-on-1 Training" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={
        solid || open
          ? {
              background: "rgba(4,4,13,0.92)",
              backdropFilter: "blur(24px) saturate(1.4)",
              boxShadow: "0 1px 0 var(--border)",
            }
          : undefined
      }
    >
      <nav className="container-site flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.06em]"
          onClick={() => setOpen(false)}
        >
          TAC<span className="accent">.</span>
        </Link>
        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 text-[0.82rem] font-medium whitespace-nowrap transition-colors ${
                pathname === l.href
                  ? "text-accent bg-[var(--amber-dim)]"
                  : "text-muted hover:text-accent hover:bg-[var(--amber-dim)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            className="ml-2 rounded-lg bg-accent px-4 py-2 text-[0.82rem] font-bold text-[var(--txt-inv)] transition-all hover:bg-[var(--amber-hot)] hover:shadow-[0_0_20px_var(--amber-glow)]"
          >
            Book a Chat
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-foreground transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-foreground transition-all ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                    pathname === l.href
                      ? "text-accent bg-[var(--amber-dim)]"
                      : "text-foreground/80 hover:bg-foreground/5"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`mailto:${EMAIL}`}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-sm font-bold text-[var(--txt-inv)]"
              >
                Book a Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
