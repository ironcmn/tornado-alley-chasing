import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { expenses } from "../content";

export const metadata: Metadata = {
  title: "Expenses, Tornado Alley Chasing",
  description:
    "Transparent pricing for storm chasing with me. $150/day guide fee plus shared daily expenses, all laid out up front.",
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
                  <div className="mt-5 rounded-[var(--radius)] border border-[rgba(245,158,11,0.2)] bg-[var(--amber-dim)] px-[18px] py-3.5 text-[0.88rem] leading-[1.65] text-muted">
                    {expenses.accessNote}
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
                  <div className="mt-8 border-t border-line pt-7">
                    <div className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-accent">
                      {expenses.paymentMethods.label}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {expenses.paymentMethods.methods.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center rounded-full border border-line bg-[var(--bg-deep)] px-3.5 py-[7px] text-[0.8rem] font-semibold text-muted"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-[0.85rem] leading-[1.65] text-muted">
                      {expenses.paymentMethods.note}
                    </p>
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
              <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-deep)] p-10">
                <div className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  {expenses.total.label}
                </div>
                <div className="font-display text-5xl">
                  {expenses.total.value}{" "}
                  <span className="align-middle text-base text-muted">/ day</span>
                </div>
                <div className="mt-2 text-[0.85rem] text-muted">{expenses.total.note}</div>
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

        </div>
      </section>

      <div className="s-divider" />

      <CtaSection
        eyebrow="No Hidden Costs"
        line1="Questions?"
        accent="Just Ask Me."
        body="Every trip is different. Email me to discuss your specific dates, group size, and what to budget."
        secondaryHref="/chasing-with-me"
        secondaryLabel="What to Expect"
        deep
      />
    </>
  );
}
