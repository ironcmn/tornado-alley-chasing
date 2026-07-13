"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PhotoCarousel from "./PhotoCarousel";
import type { ChaseLogYear } from "../chaseLogsEntries";

function tagClass(tag: string) {
  const t = tag.toUpperCase();
  if (t === "BUST") return "border-red-500/20 bg-red-500/[0.08] text-[var(--danger)]";
  if (t.includes("TORNADO")) return "border-[rgba(245,158,11,0.3)] bg-[var(--amber-dim)] text-accent";
  return "border-line bg-card text-muted";
}

// Video captions like "Video #1" were logged next to embedded video players we
// didn't port (photos only), so they'd read as dangling references on their own.
function isVideoLabel(line: string) {
  return /^videos?\s*#?\d*$/i.test(line.trim());
}

export default function ChaseLogAccordion({ years }: { years: ChaseLogYear[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="space-y-14">
      {years.map((y) => (
        <div key={y.year}>
          <div className="mb-6 flex flex-wrap items-baseline gap-4 border-b border-line pb-4">
            <div className="font-display text-4xl tracking-[0.05em] text-accent">{y.year}</div>
            <span
              className="h-px flex-1"
              style={{ background: "linear-gradient(to right, var(--border), transparent)" }}
              aria-hidden
            />
            {y.entries && (
              <span className="whitespace-nowrap text-[0.8rem] text-muted">
                {y.entries.length} chase day{y.entries.length === 1 ? "" : "s"}
              </span>
            )}
          </div>

          {y.note ? (
            <p className="text-[0.95rem] italic text-muted">{y.note}</p>
          ) : (
            <div className="space-y-3">
              {y.entries!.map((e) => {
                const key = `${y.year}-${e.date}`;
                const open = openKey === key;
                const text = e.text.filter((t) => !isVideoLabel(t));

                return (
                  <div
                    key={key}
                    className="overflow-hidden rounded-[var(--radius-lg)] border bg-card transition-colors"
                    style={{ borderColor: open ? "var(--border)" : "var(--border-s)" }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenKey(open ? null : key)}
                      aria-expanded={open}
                      className="flex w-full flex-wrap items-center gap-3 px-5 py-4 text-left"
                    >
                      <strong className="font-display text-lg tracking-[0.05em] text-foreground">
                        {e.date}
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className={`rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.06em] ${tagClass(
                              t
                            )}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span
                        className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-base leading-none text-muted transition-transform duration-300"
                        style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-5 pb-7 pt-5">
                            {text.map((t, i) => (
                              <p
                                key={i}
                                className={`text-[0.92rem] leading-[1.7] text-muted ${i > 0 ? "mt-3" : ""}`}
                              >
                                {t}
                              </p>
                            ))}
                            {e.photos.length > 0 ? (
                              <PhotoCarousel photos={e.photos} />
                            ) : (
                              <p className="mt-5 text-[0.8rem] italic text-[var(--txt-3)]">
                                No photos logged for this day.
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
