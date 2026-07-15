import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import QuoteBlock from "../components/QuoteBlock";
import CtaSection from "../components/CtaSection";
import { history } from "../content";

export const metadata: Metadata = {
  title: "About Me, Tornado Alley Chasing",
  description:
    "Meet David Williams: 20+ years of storm chasing experience, from self-taught forecaster to Tornado Alley mentor.",
};

export default function AboutMe() {
  return (
    <>
      <PageHeader
        eyebrow="David Williams"
        line1="About"
        accent="Me."
        lead={history.lead}
      />

      {/* Stats bar */}
      <section className="bg-[var(--bg-deep)] pb-20">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-[var(--border-s)] md:grid-cols-4">
              {history.stats.map((s) => (
                <div key={s.label} className="bg-card px-7 py-9 text-center">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="s-divider" />

      {/* About David */}
      <section className="section">
        <div className="container-site grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="card relative flex flex-col items-center gap-6 overflow-hidden !rounded-[var(--radius-xl)] !p-10 text-center">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-2/5"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <Image
                src={history.portrait.photo.src}
                alt={history.portrait.photo.alt}
                width={2400}
                height={1600}
                className="relative w-full rounded-[var(--radius-lg)] border border-line object-cover"
              />
              <div>
                <div className="font-display text-3xl tracking-[0.06em]">
                  {history.portrait.name}
                </div>
                <div className="mt-1 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  {history.portrait.title}
                </div>
              </div>
              <p className="relative max-w-[300px] text-[0.9rem] leading-[1.7] text-muted">
                {history.portrait.blurb}
              </p>
              <div className="relative grid w-full grid-cols-2 gap-3.5 text-left">
                {history.portrait.creds.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-[var(--radius-sm)] border border-line bg-card p-4 text-[0.85rem] text-muted"
                  >
                    <strong className="mb-1 block text-[0.72rem] uppercase tracking-[0.1em] text-accent">
                      {c.label}
                    </strong>
                    {c.value}
                  </div>
                ))}
              </div>
              <div className="relative flex flex-wrap justify-center gap-2.5">
                <span className="badge badge-amber">All levels welcome</span>
                <span className="badge badge-amber">Video interview required</span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <div className="eyebrow">The Origin Story</div>
              <h2>
                Built from
                <br />
                <span className="accent">Failures.</span>
              </h2>
            </Reveal>
            <div className="mt-6 space-y-7 text-[1.02rem] text-muted">
              {history.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.12 + i * 0.07}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <figure className="mt-10">
                <Image
                  src="/images/tornado-cone-il.jpg"
                  alt="Cone tornado over farmland in Illinois"
                  width={2400}
                  height={1600}
                  className="w-full rounded-[var(--radius-lg)] border border-line object-cover"
                />
                <figcaption className="mt-2.5 text-[0.8rem] text-[var(--txt-3)]">
                  Documented in the field: cone tornado, Illinois.
                </figcaption>
              </figure>
            </Reveal>
            <div className="relative mt-12 pl-8">
              <span
                className="absolute bottom-2 left-0 top-2 w-px"
                style={{
                  background: "linear-gradient(to bottom, var(--amber), rgba(245,158,11,0.1))",
                }}
                aria-hidden
              />
              {history.timeline.map((t, i) => (
                <Reveal key={t.year} delay={0.1 + i * 0.08}>
                  <div className="relative pb-12 last:pb-0">
                    <span
                      className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_var(--amber-glow)]"
                      aria-hidden
                    />
                    <div className="font-display mb-1.5 text-base tracking-[0.15em] text-accent">
                      {t.year}
                    </div>
                    <h4 className="mb-2.5">{t.title}</h4>
                    <p className="text-[0.95rem] text-muted">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="s-divider" />

      {/* Chase logs */}
      <section className="section bg-[var(--bg-deep)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-14 text-center">
              <div className="eyebrow eyebrow-center">Documented Seasons</div>
              <h2>
                Chase Logs <span className="accent">2016–2025</span>
              </h2>
              <p className="mx-auto mt-4 text-muted">{history.logsLead}</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {history.logs.map((l, i) => (
              <Reveal key={l.year} delay={(i % 3) * 0.1}>
                <div className="card h-full !rounded-[var(--radius)] !p-7">
                  <div className="font-display mb-2 text-4xl leading-none text-accent">
                    {l.year}
                  </div>
                  <div className="text-[0.88rem] leading-[1.6] text-muted">{l.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section">
        <div className="container-site mx-auto max-w-3xl">
          <QuoteBlock
            quote="I learned more from David in the first few hours than months of study on my own."
            author="Devin, California, 2016"
          />
        </div>
      </section>

      <CtaSection
        eyebrow="Write Your Own Chapter"
        line1="Your Season"
        accent="Starts Here."
        body="Every chase log has a story. Email me to start yours."
        secondaryHref="/chasing-with-me"
        secondaryLabel="What to Expect"
        deep
      />
    </>
  );
}
