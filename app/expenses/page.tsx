import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { expenses } from "../content";

export const metadata: Metadata = {
  title: "Expenses, Tornado Alley Chasing",
  description:
    "Transparent pricing for storm chasing with David Williams. $150/day guide fee plus shared daily expenses. Far below industry average.",
};

export default function Expenses() {
  return (
    <>
      <PageHeader
        eyebrow="Transparent Pricing"
        line1="Expenses"
        accent="& Costs."
        lead={expenses.lead}
      />

      <section className="section">
        <div className="container-site">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
            {/* Main price card */}
            <Reveal>
              <div className="eyebrow">Guide Fee</div>
              <h2 className="mb-8">
                The <span className="accent">Numbers.</span>
              </h2>
              <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-card">
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, var(--amber), var(--amber-hot))" }}
                  aria-hidden
                />
                <div className="border-b border-line p-10">
                  <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-accent">
                    {expenses.rateLabel}
                  </div>
                  <div className="price-hero">
                    $150 <span className="price-unit">/ day</span>
                  </div>
                  <p className="mt-3.5 text-[0.92rem] text-muted">{expenses.rateNote}</p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius)] border border-green-500/20 bg-green-500/[0.08] px-[18px] py-2.5 text-[0.82rem] font-semibold text-[var(--safe)]">
                    ✓ {expenses.compareBadge}
                  </div>
                </div>
                <div className="p-10 pt-8">
                  <div className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-accent">
                    Payment Schedule
                  </div>
                  <div className="mt-2 divide-y divide-line">
                    {expenses.payment.map((p) => (
                      <div key={p.when} className="grid grid-cols-[120px_1fr] items-center gap-6 py-5">
                        <div className="font-display text-[0.95rem] tracking-[0.08em] text-accent">
                          {p.when}
                        </div>
                        <div className="text-[0.9rem] text-muted">{p.what}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Daily breakdown */}
            <Reveal delay={0.15}>
              <div className="eyebrow">Daily Expenses</div>
              <h3 className="mb-2">
                Your Daily <span className="accent">Field Budget.</span>
              </h3>
              <p className="mb-7 text-[0.9rem] text-muted">{expenses.dailyLead}</p>
              <div className="divide-y divide-line">
                {expenses.breakdown.map((b) => (
                  <div key={b.name} className="flex items-center justify-between gap-4 py-[18px]">
                    <div>
                      <div className="mb-0.5 text-[0.95rem] font-medium text-foreground">
                        {b.name}
                      </div>
                      <div className="text-[0.78rem] text-[var(--txt-3)]">{b.note}</div>
                    </div>
                    <div
                      className={
                        b.variable
                          ? "whitespace-nowrap text-base text-muted"
                          : "font-display whitespace-nowrap text-xl tracking-[0.04em] text-accent"
                      }
                    >
                      {b.amount}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid items-center gap-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-deep)] p-10 sm:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    {expenses.total.label}
                  </div>
                  <div className="font-display text-5xl">
                    {expenses.total.value}{" "}
                    <span className="align-middle text-base text-muted">/ day</span>
                  </div>
                  <div className="mt-2 text-[0.85rem] text-muted">{expenses.total.note}</div>
                </div>
                <div className="text-center">
                  <div className="font-display mb-1 text-[0.85rem] tracking-[0.1em] text-[var(--txt-3)]">
                    vs. industry avg.
                  </div>
                  <div className="font-display text-3xl text-[var(--txt-3)] line-through">
                    {expenses.total.vs}
                  </div>
                  <div className="text-[0.75rem] text-[var(--txt-3)]">per day elsewhere</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Included / excluded */}
          <div className="mt-16 grid gap-7 md:grid-cols-2">
            <Reveal>
              <div className="card h-full !p-8">
                <div className="font-display mb-6 flex items-center gap-2.5 text-xl tracking-[0.06em] text-[var(--safe)]">
                  ✓ What&apos;s Covered
                </div>
                <ul className="check-list">
                  {expenses.covered.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card h-full !p-8">
                <div className="font-display mb-6 flex items-center gap-2.5 text-xl tracking-[0.06em] text-[var(--danger)]">
                  ✕ Guest Responsibility
                </div>
                <ul className="x-list">
                  {expenses.guestResponsibility.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Comparison */}
          <Reveal>
            <div className="eyebrow mt-20">Price Comparison</div>
            <h3 className="mb-2">
              TAC vs. <span className="accent">The Competition.</span>
            </h3>
            <p className="text-[0.95rem] text-muted">{expenses.comparison.lead}</p>
          </Reveal>
          <div className="mt-8 grid items-center gap-7 md:grid-cols-[1fr_auto_1fr]">
            <Reveal>
              <div className="card !border-[var(--border)] !bg-[var(--bg-card-h)] !p-8 text-center">
                <div className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Tornado Alley Chasing
                </div>
                <div className="font-display my-3 text-6xl leading-none text-accent">
                  {expenses.comparison.tac.price}
                </div>
                <div className="text-[0.78rem] text-muted">{expenses.comparison.tac.note}</div>
                <div className="mt-3.5 flex flex-col gap-1.5">
                  {expenses.comparison.tac.badges.map((b) => (
                    <span key={b} className="badge badge-amber justify-center">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="font-display text-center text-2xl text-[var(--txt-3)]" aria-hidden>
              VS
            </div>
            <Reveal delay={0.1}>
              <div className="card !p-8 text-center">
                <div className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Typical Tour Operators
                </div>
                <div className="font-display my-3 text-6xl leading-none text-[var(--txt-3)]">
                  {expenses.comparison.others.price}
                </div>
                <div className="text-[0.78rem] text-[var(--txt-3)]">
                  {expenses.comparison.others.note}
                </div>
                <div className="mt-3.5 flex flex-col gap-1.5">
                  {expenses.comparison.others.badges.map((b) => (
                    <span key={b} className="badge badge-danger justify-center">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="s-divider" />

      <CtaSection
        eyebrow="No Hidden Costs"
        line1="Questions?"
        accent="Just Ask David."
        body="Every trip is different. Email David to discuss your specific dates, group size, and what to budget."
        secondaryHref="/chasing-with-me"
        secondaryLabel="What to Expect"
        deep
      />
    </>
  );
}
