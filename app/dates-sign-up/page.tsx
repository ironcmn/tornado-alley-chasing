import type { Metadata } from "next";
import { Tornado } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { EMAIL, datesSignUp } from "../content";

export const metadata: Metadata = {
  title: "Dates + Sign-up, Tornado Alley Chasing",
  description:
    "2027 storm chasing trip dates with me. Every trip caps at 3 guest seats, check current availability and email to book.",
};

function SeatIcon({ filled }: { filled: boolean }) {
  return (
    <Tornado
      size={22}
      color={filled ? "var(--amber)" : "var(--txt-3)"}
      strokeWidth={filled ? 2.1 : 1.5}
      style={{ strokeDasharray: filled ? undefined : "2.2 2.2" }}
      aria-hidden
    />
  );
}

export default function DatesSignUp() {
  return (
    <>
      <PageHeader
        eyebrow={datesSignUp.eyebrow}
        line1="Dates &"
        accent="Sign-Up."
        lead={datesSignUp.lead}
      />

      <section className="section">
        <div className="container-site">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-8">
              <p className="text-[0.9rem] text-muted">{datesSignUp.capacityNote}</p>
              <div className="flex items-center gap-5 text-[0.8rem] text-muted">
                <span className="flex items-center gap-2">
                  <SeatIcon filled /> Booked
                </span>
                <span className="flex items-center gap-2">
                  <SeatIcon filled={false} /> Open
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2">
            {datesSignUp.tours.map((t, i) => {
              const seatsOpen = t.seatsTotal - t.seatsBooked;
              const full = seatsOpen === 0;
              const pct = Math.round((t.seatsBooked / t.seatsTotal) * 100);

              return (
                <Reveal key={t.title} delay={(i % 2) * 0.1}>
                  <div className="card relative h-full overflow-hidden !p-9">
                    <div
                      className="absolute inset-x-0 top-0 h-[3px]"
                      style={{
                        background: full
                          ? "var(--danger)"
                          : "linear-gradient(90deg, var(--amber), var(--amber-hot))",
                      }}
                      aria-hidden
                    />

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="badge badge-amber">{t.dateRange}</span>
                      {full ? (
                        <span className="badge badge-danger">Fully Booked</span>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-green-500/20 bg-green-500/[0.08] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[var(--safe)]">
                          {seatsOpen} Seat{seatsOpen > 1 ? "s" : ""} Open
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 tracking-[0.04em]">{t.title}</h3>
                    {t.note && <p className="mt-2 text-[0.88rem] text-muted">{t.note}</p>}

                    <div className="mt-7 flex items-center gap-2.5">
                      {Array.from({ length: t.seatsTotal }).map((_, seatIdx) => (
                        <SeatIcon key={seatIdx} filled={seatIdx < t.seatsBooked} />
                      ))}
                    </div>

                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[var(--border-s)]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          background: full
                            ? "var(--danger)"
                            : "linear-gradient(90deg, var(--amber), var(--amber-hot))",
                        }}
                      />
                    </div>

                    <p className="mt-3 text-[0.85rem] font-medium text-foreground">
                      {t.seatsBooked} Seat{t.seatsBooked === 1 ? "" : "s"} Booked ·{" "}
                      <span className={full ? "text-[var(--danger)]" : "text-[var(--safe)]"}>
                        {seatsOpen} Seat{seatsOpen === 1 ? "" : "s"} Available
                      </span>
                    </p>

                    {full ? (
                      <div className="mt-7 w-full rounded-[var(--radius-sm)] border border-red-500/20 bg-red-500/[0.08] px-[34px] py-[15px] text-center text-[0.88rem] font-bold uppercase tracking-[0.06em] text-[var(--danger)]">
                        Fully Booked
                      </div>
                    ) : (
                      <a
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                          `Availability: ${t.title} (${t.dateRange})`
                        )}`}
                        className="btn btn-outline mt-7 w-full"
                      >
                        Join Now
                      </a>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="s-divider" />

      <CtaSection
        eyebrow="Ready to Chase?"
        line1="Lock In"
        accent="Your Seat."
        body="A $300 non-refundable deposit holds your spot after your video interview with me. Seats are first come, first served."
        secondaryHref="/expenses"
        secondaryLabel="See Pricing"
        deep
      />
    </>
  );
}
