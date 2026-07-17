import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import QuoteBlock from "../components/QuoteBlock";
import CtaSection from "../components/CtaSection";
import { EMAIL, training } from "../content";

export const metadata: Metadata = {
  title: "1-on-1 Training, Tornado Alley Chasing",
  description:
    "Online meteorology training with me. $50/hour via Zoom. Beginner to advanced storm forecasting, Skew-T, supercells, upper air charts.",
};

export default function Training() {
  return (
    <>
      <PageHeader
        eyebrow="Online · 1-on-1"
        line1="Meteorology"
        accent="Training."
        lead={training.lead}
      />

      <section className="section">
        <div className="container-site">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Price card */}
            <Reveal>
              <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-card">
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, var(--amber), var(--amber-hot))" }}
                  aria-hidden
                />
                <div className="relative border-b border-line p-10 text-center">
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div className="price-hero relative">
                    {training.price} <span className="price-unit">/ hr</span>
                  </div>
                  <div className="relative mt-1 text-[0.85rem] tracking-[0.08em] text-muted">
                    {training.priceNote}
                  </div>
                </div>
                <div className="p-10 pt-8">
                  <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
                    Platforms
                  </div>
                  <div className="mb-7 flex flex-wrap gap-2.5">
                    {training.platforms.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-[var(--bg-deep)] px-3.5 py-[7px] text-[0.8rem] font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        <span className="h-[7px] w-[7px] rounded-full bg-accent" aria-hidden />
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
                    What&apos;s Included
                  </div>
                  <ul className="check-list">
                    {training.included.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t border-line pt-6">
                    <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
                      {training.paymentMethods.label}
                    </div>
                    <div className="mb-4 flex flex-wrap gap-2.5">
                      {training.paymentMethods.methods.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center rounded-full border border-line bg-[var(--bg-deep)] px-3.5 py-[7px] text-[0.8rem] font-semibold text-muted"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <p className="text-[0.82rem] leading-[1.6] text-[var(--txt-3)]">
                      {training.paymentMethods.note}
                    </p>
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="btn btn-primary mt-7 w-full justify-center"
                  >
                    Book a Session
                  </a>
                </div>
              </div>
            </Reveal>

            {/* About + how to book */}
            <div>
              <Reveal delay={0.1}>
                <div className="eyebrow">About the Sessions</div>
                <h2 className="mb-6">
                  Learn Weather.
                  <br />
                  <span className="accent">Your Way.</span>
                </h2>
                <div className="space-y-6 text-[1.02rem] text-muted">
                  {training.aboutParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="eyebrow mt-10">How to Book</div>
              </Reveal>
              <div className="mt-5">
                {[
                  {
                    title: "Email Me",
                    body: `Send a message to ${EMAIL}. Tell me what you're hoping to learn and your current knowledge level.`,
                  },
                  {
                    title: "Agree on Topics & Time",
                    body: "I will help shape the session around your goals, or provide a structured outline if you'd rather I lead the content.",
                  },
                  {
                    title: "Join the Session",
                    body: "Log onto Zoom, Google Meet, or Discord. I share my screen and walk you through the material live, with full Q&A throughout.",
                  },
                  {
                    title: "Pay $50",
                    body: "A flat $50 per hour, no complex packages, no hidden fees. Book more sessions whenever you're ready to continue learning.",
                  },
                ].map((s, i) => (
                  <Reveal key={s.title} delay={0.1 + i * 0.06}>
                    <div className="flex items-start gap-5 border-b border-line py-5 last:border-0">
                      <div className="font-display w-8 shrink-0 text-2xl leading-none text-accent opacity-50">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h5 className="mb-1 text-[0.95rem] tracking-[0.04em]">{s.title}</h5>
                        <p className="text-[0.88rem] leading-[1.55] text-muted">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Topics */}
          <Reveal>
            <div className="eyebrow mt-20">Curriculum</div>
            <h2 className="mb-2">
              What You <span className="accent">Can Learn.</span>
            </h2>
            <p className="text-[0.95rem] text-muted">
              Sessions span all levels. Beginners start with the basics; advanced students go
              deeper into operational forecasting techniques used in the field.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {training.topics.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.1}>
                <div className="card h-full !rounded-[var(--radius-lg)] !p-7">
                  <span className="badge badge-amber mb-3.5">{t.level}</span>
                  <h4 className="mb-2.5 !text-base">{t.title}</h4>
                  <p className="text-[0.88rem] leading-[1.6] text-muted">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Honesty section */}
          <Reveal delay={0.1}>
            <div className="relative mt-16 overflow-hidden rounded-[var(--radius-xl)] border border-line bg-[var(--bg-deep)] p-8 md:p-12">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <div className="relative grid gap-12 md:grid-cols-2">
                <div>
                  <div className="eyebrow mb-3.5">What I Cover</div>
                  <ul className="check-list">
                    {training.covers.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="eyebrow mb-3.5 !text-muted before:!bg-[var(--txt-2)]">
                    Important Limitations
                  </div>
                  <ul className="x-list">
                    {training.limitations.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[0.82rem] text-[var(--txt-3)]">
                    {training.limitationsNote}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="s-divider" />

      {/* Quotes */}
      <section className="section bg-[var(--bg-deep)]">
        <div className="container-site mx-auto flex max-w-3xl flex-col gap-6">
          <QuoteBlock
            quote="I learned more from David in the first few hours than months of study on my own."
            author="Devin, California, 2016"
          />
          <QuoteBlock
            quote="Your morning and evening forecasting sessions were incredible and taught me so much more."
            author="Jay, California, 2022"
            delay={0.1}
          />
        </div>
      </section>

      <div className="s-divider" />

      <CtaSection
        eyebrow="$50 · One Hour · Online"
        line1="Ready to Level"
        accent="Up Your Forecasting?"
        body="Email me to schedule your first session. Tell me where you're starting from and what you want to know."
        secondaryHref="/testimonials"
        secondaryLabel="Read Testimonials"
      />
    </>
  );
}
