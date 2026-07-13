import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import ChaseLogAccordion from "../components/ChaseLogAccordion";
import { chaseLogs } from "../content";
import { chaseLogYears } from "../chaseLogsEntries";

export const metadata: Metadata = {
  title: "Chase Logs, Tornado Alley Chasing",
  description:
    "Every documented storm chase day since 2016, browsable by season, with the real field notes and photos from each intercept.",
};

function tagClass(tag: string) {
  const t = tag.toUpperCase();
  if (t === "BUST") return "border-red-500/20 bg-red-500/[0.08] text-[var(--danger)]";
  if (t.includes("TORNADO")) return "border-[rgba(245,158,11,0.3)] bg-[var(--amber-dim)] text-accent";
  return "border-line bg-card text-muted";
}

export default function ChaseLogs() {
  return (
    <>
      <PageHeader
        eyebrow={chaseLogs.eyebrow}
        line1="Chase"
        accent="Logs."
        lead={chaseLogs.lead}
      />

      <section className="bg-[var(--bg-deep)] pb-20">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-[var(--border-s)] md:grid-cols-4">
              {chaseLogs.stats.map((s) => (
                <div key={s.label} className="bg-card px-6 py-8 text-center">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="s-divider" />

      <section className="section">
        <div className="container-site">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-8">
              <p className="text-[0.9rem] text-muted">
                Grouped by season, newest first. Tap a day to read the field notes and photos.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[0.78rem] text-muted">
                <span className={`rounded-full border px-3 py-1.5 ${tagClass("TORNADO")}`}>Tornado</span>
                <span className={`rounded-full border px-3 py-1.5 ${tagClass("SEVERE")}`}>Severe / Structure / Funnel</span>
                <span className={`rounded-full border px-3 py-1.5 ${tagClass("BUST")}`}>Bust</span>
              </div>
            </div>
          </Reveal>

          <ChaseLogAccordion years={chaseLogYears} />
        </div>
      </section>

      <div className="s-divider" />

      <CtaSection
        eyebrow="Write The Next Entry"
        line1="Your Chase Day"
        accent="Isn't Logged Yet."
        body="Every entry above started with someone emailing me. Yours could be the next line in the record."
        secondaryHref="/dates-sign-up"
        secondaryLabel="See Open Dates"
        deep
      />
    </>
  );
}
