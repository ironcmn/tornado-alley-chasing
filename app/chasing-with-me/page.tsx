import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import QuoteBlock from "../components/QuoteBlock";
import CtaSection from "../components/CtaSection";
import { EMAIL, philosophy } from "../content";

export const metadata: Metadata = {
  title: "Chasing With Me, Tornado Alley Chasing",
  description:
    "You're a chase partner, not a passenger. Learn what it's really like to chase tornadoes with David Williams.",
};

export default function ChasingWithMe() {
  return (
    <>
      <PageHeader
        eyebrow="The Experience"
        line1="Chasing"
        accent="With Me."
        lead="You're not watching from the tour van. You're in the data, in the decisions, and in the storm. David brings you in as a genuine chase partner from day one."
      />

      <section className="section">
        <div className="container-site">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Sticky program card */}
            <Reveal>
              <div className="card overflow-hidden !p-0 lg:sticky lg:top-24">
                <div className="relative border-b border-line bg-[var(--bg-deep)] p-10 text-center">
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div className="font-display relative text-3xl tracking-[0.06em]">
                    Tornado Alley Chasing
                  </div>
                  <div className="relative mt-1.5 text-[0.8rem] uppercase tracking-[0.12em] text-muted">
                    {philosophy.card.title}
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-8">
                  <div className="flex justify-between gap-4">
                    {philosophy.card.stats.map((s) => (
                      <div key={s.label} className="flex-1 text-center">
                        <div className="stat-value !text-3xl">{s.value}</div>
                        <div className="stat-label !text-[0.72rem]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="s-divider" />
                  <ul className="check-list !gap-2.5">
                    {philosophy.card.checks.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="btn btn-primary mt-2 w-full justify-center"
                  >
                    Email David to Start
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Philosophy + how it works */}
            <div>
              <Reveal>
                <div className="eyebrow">Our Philosophy</div>
                <h2>
                  Partners,
                  <br />
                  <span className="accent">Not Passengers.</span>
                </h2>
              </Reveal>
              <div className="mt-6 space-y-7 text-[1.05rem] text-muted">
                {philosophy.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.08}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <div className="eyebrow mt-12">How It Works</div>
              </Reveal>
              <ol className="mt-6 list-none">
                {philosophy.howItWorks.map((step, i) => (
                  <Reveal key={step.title} delay={0.1 + i * 0.06}>
                    <li className="relative grid grid-cols-[48px_1fr] gap-6 pb-10 last:pb-0">
                      {i < philosophy.howItWorks.length - 1 && (
                        <span
                          className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-[var(--border)] to-transparent"
                          aria-hidden
                        />
                      )}
                      <span className="font-display z-10 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-[var(--border)] bg-card text-xl text-accent">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="pt-2.5">{step.title}</h4>
                        <p className="mt-2 text-[0.92rem] text-muted">{step.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* Requirements */}
          <Reveal>
            <div className="eyebrow mt-20">Requirements &amp; Expectations</div>
            <h2 className="mb-10">
              What David <span className="accent">Needs From You.</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {philosophy.requirements.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.1}>
                <div className="card h-full !p-8">
                  <h4 className="mb-5 flex items-center gap-2.5 !text-[1.1rem] tracking-[0.06em]">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--amber-dim)] text-sm text-accent"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {r.title}
                  </h4>
                  <ul className="check-list">
                    {r.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Waiver */}
          <Reveal delay={0.1}>
            <div className="mt-14 rounded-[var(--radius)] border border-red-500/15 bg-red-500/[0.06] px-7 py-6">
              <div className="font-display mb-2.5 flex items-center gap-2.5 text-[1.1rem] tracking-[0.06em] text-red-400">
                ⚠ Important Notice
              </div>
              <p className="text-[0.92rem] text-muted">{philosophy.waiver}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="s-divider" />

      {/* What you'll learn */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <div className="mb-14 text-center">
              <div className="eyebrow eyebrow-center">{philosophy.learn.eyebrow}</div>
              <h2>
                You&apos;ll Walk Away <span className="accent">Knowing More.</span>
              </h2>
              <p className="mx-auto mt-4 text-muted">{philosophy.learn.lead}</p>
            </div>
          </Reveal>
          <div className="grid gap-7 md:grid-cols-3">
            {philosophy.learn.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="card h-full">
                  <h4 className="mb-2.5 !text-[1.1rem]">{c.title}</h4>
                  <p className="text-[0.9rem] text-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="section bg-[var(--bg-deep)]">
        <div className="container-site mx-auto flex max-w-3xl flex-col gap-6">
          <QuoteBlock
            quote="Your morning and evening forecasting sessions were incredible and taught me so much more."
            author="Jay, California, 2022"
          />
          <QuoteBlock
            quote="David's knowledge of meteorology is off the charts. His teaching methods are 1st-rate."
            author="Dave, Wisconsin, 2025"
            delay={0.1}
          />
        </div>
      </section>

      <CtaSection
        eyebrow="Ready to Partner Up?"
        line1="Your Place In"
        accent="The Team Is Open."
        body="Maximum three guests. Always a video interview first. Email David to start the conversation."
        secondaryHref="/expenses"
        secondaryLabel="See Full Pricing"
      />
    </>
  );
}
