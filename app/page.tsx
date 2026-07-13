import Image from "next/image";
import Link from "next/link";
import IntroScrub from "./components/IntroScrub";
import Reveal from "./components/Reveal";
import CtaSection from "./components/CtaSection";
import { EMAIL, ticker, heroIntro, experience, homeStrip, vehicle, cta } from "./content";

export default function Home() {
  return (
    <>
      <IntroScrub />

      {/* Ticker */}
      <div className="ticker-wrap" aria-hidden>
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <div key={i} className="ticker-item">
              <span>{t}</span>
              <span className="ticker-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* You're not a tourist */}
      <section id="about" className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.15em] text-red-400">
                <span
                  className="h-[7px] w-[7px] rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] [animation:sky-pulse_1.2s_ease-in-out_infinite]"
                  aria-hidden
                />
                {heroIntro.badge}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-7">
                {heroIntro.heading[0]} <span className="accent">{heroIntro.heading[1]}</span>
                <br />
                {heroIntro.heading[2]}
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 text-[1.08rem] leading-[1.75] text-muted">{heroIntro.body}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                  Book Your Interview
                </a>
                <Link href="/chasing-with-me" className="btn btn-ghost">
                  Learn More →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                {heroIntro.steps.map((s, i) => (
                  <span key={s} className="flex items-center gap-3.5">
                    <span className="flex items-center gap-2 text-[0.8rem] text-muted">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(245,158,11,0.35)] bg-[var(--amber-dim)] text-[0.65rem] font-bold text-accent">
                        {i + 1}
                      </span>
                      {s}
                    </span>
                    {i < heroIntro.steps.length - 1 && (
                      <span className="text-foreground/20" aria-hidden>
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3.5 border-t border-line pt-4 sm:border-0 sm:pt-0">
              {heroIntro.stats.map((s) => (
                <div key={s.label} className="card !p-7 text-center">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Experience */}
      <section id="experience" className="section bg-[var(--bg-deep)]">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <div className="eyebrow">{experience.eyebrow}</div>
                <h2>
                  Built Different.
                  <br />
                  From The <span className="accent">Ground Up.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-[1.05rem] text-muted">{experience.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/chasing-with-me" className="btn btn-outline">
                    What to Expect
                  </Link>
                  <Link href="/expenses" className="btn btn-ghost">
                    Pricing Breakdown
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="card relative overflow-hidden !p-10">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="relative grid grid-cols-2 gap-3.5">
                  {experience.statCards.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-[rgba(245,158,11,0.15)] bg-[rgba(245,158,11,0.06)] px-3 py-5 text-center"
                    >
                      <div className="font-display text-4xl tracking-[0.06em] text-accent">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--txt-3)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-3.5 rounded-xl border border-red-500/15 bg-red-500/[0.06] p-3.5 text-center">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-red-400">
                    {heroIntro.badge}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {experience.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.1}>
                <div className="card h-full !p-7">
                  <h4 className="tracking-[0.06em]">{f.title}</h4>
                  <p className="mt-2.5 text-[0.9rem] leading-[1.65] text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="s-divider" />

      {/* Testimonial strip */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">From Chase Partners</div>
            <h2>
              Real People. <span className="accent">Real Storms.</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Chasers from six continents have joined me in the field.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-accent" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <span className="text-[0.82rem] text-muted">
                5.0 average across <strong className="text-foreground">15+ verified chasers</strong>{" "}
                from 6 continents
              </span>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {homeStrip.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.12}>
                <figure className="testimonial-card h-full">
                  <div className="testimonial-stars" aria-label="5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="testimonial-text">{t.quote}</blockquote>
                  <figcaption className="flex flex-col gap-0.5">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-origin">{t.origin}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <Link href="/testimonials" className="btn btn-ghost">
                Read All 15 Testimonials
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="s-divider" />

      {/* Vehicle */}
      <section id="vehicle" className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <Image
              src="/images/stormtrooper.jpg"
              alt="The Stormtrooper, my chase vehicle on a dirt road with a real tornado in the background"
              width={900}
              height={600}
              className="w-full rounded-[var(--radius-xl)] border border-line object-cover"
            />
            <span className="badge badge-amber absolute right-4 top-4">{vehicle.badge}</span>
            <div
              className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[rgba(245,158,11,0.25)] px-6 py-2 text-2xl tracking-[0.1em] text-accent backdrop-blur-md"
              style={{ background: "rgba(4,4,13,0.75)" }}
            >
              {vehicle.name}
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.15}>
              <div className="eyebrow">{vehicle.eyebrow}</div>
              <h3>
                Equipped for
                <br />
                <span className="accent">Any Storm.</span>
              </h3>
              <p className="mt-5 text-muted">{vehicle.body}</p>
            </Reveal>
            <div className="mt-7 grid grid-cols-2 gap-3.5">
              {vehicle.specs.map((s, i) => (
                <Reveal key={s.label} delay={0.2 + i * 0.07}>
                  <div className="rounded-[var(--radius-sm)] border border-line bg-card px-[18px] py-3.5">
                    <div className="mb-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-accent">
                      {s.label}
                    </div>
                    <div className="text-[0.88rem] font-medium text-foreground">{s.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="s-divider" />

      <CtaSection
        eyebrow={cta.eyebrow}
        line1="Your Storm"
        accent="Is Out There."
        body={cta.body}
        secondaryHref="/expenses"
        secondaryLabel="See Pricing"
        deep
      />
    </>
  );
}
