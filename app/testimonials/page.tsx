import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CtaSection from "../components/CtaSection";
import { teamGallery, testimonials } from "../content";

export const metadata: Metadata = {
  title: "Testimonials, Tornado Alley Chasing",
  description:
    "Real reviews from chase partners across 6 continents. See what it's like to chase tornadoes with me.",
};

export default function Testimonials() {
  // Group quotes by year, newest first, preserving content.ts order within a year.
  const years = [...new Set(testimonials.items.map((t) => t.year))];

  return (
    <>
      <PageHeader
        eyebrow="From the Field"
        line1="Chase Partner"
        accent="Testimonials."
        lead="Real words from real people who've been in the vehicle, in the storm, and in the data with me. No filters, no marketing, just what it's actually like."
      />

      {/* World stats */}
      <section className="bg-[var(--bg-deep)] pb-20">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-[var(--border-s)] md:grid-cols-4">
              {testimonials.stats.map((s) => (
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

      {/* Global reach + featured quote */}
      <section className="section bg-[var(--bg-deep)]">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow">Global Reach</div>
            <h2>
              Chasers From
              <br />
              <span className="accent">Every Corner.</span>
            </h2>
            <p className="mt-5 text-[1.02rem] text-muted">
              My guests have flown in from across Europe, Australia, and North America to
              partner in Tornado Alley. The experience translates regardless of where you&apos;re
              from, storm chasing is a universal language.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {testimonials.countries.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[0.85rem] text-muted transition-colors hover:border-[var(--border)] hover:text-accent"
                >
                  <span className="h-2 w-2 rounded-full bg-accent opacity-70" aria-hidden />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <figure className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-card p-12">
              <span
                className="font-display pointer-events-none absolute -top-5 left-7 text-[14rem] leading-none text-[rgba(245,158,11,0.06)]"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="relative text-2xl italic leading-[1.65] text-foreground">
                {testimonials.featured.quote}
              </blockquote>
              <figcaption className="relative mt-7 flex items-center gap-4">
                <span className="font-display flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(245,158,11,0.2)] bg-[var(--amber-dim)] text-xl text-accent">
                  {testimonials.featured.name[0]}
                </span>
                <span>
                  <span className="block font-bold">{testimonials.featured.name}</span>
                  <span className="testimonial-origin">{testimonials.featured.origin}</span>
                </span>
                <span className="testimonial-stars ml-auto" aria-label="5 stars">
                  ★★★★★
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <div className="s-divider" />

      {/* Team photo gallery */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <div className="mb-12 text-center">
              <div className="eyebrow eyebrow-center">{teamGallery.eyebrow}</div>
              <h2>
                One Vehicle. <span className="accent">One Crew.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">{teamGallery.lead}</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamGallery.photos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 0.1}>
                <figure>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={2400}
                    height={1600}
                    className="h-64 w-full rounded-[var(--radius-lg)] border border-line object-cover sm:h-72"
                  />
                  <figcaption className="mt-2.5 text-[0.82rem] text-[var(--txt-3)]">
                    {p.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="s-divider" />

      {/* All testimonials grouped by year */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <div className="eyebrow">All Reviews</div>
            <h2>
              Every Voice, <span className="accent">Every Season.</span>
            </h2>
          </Reveal>
          <div className="mt-14 space-y-14">
            {years.map((year) => (
              <div key={year}>
                <Reveal>
                  <div className="font-display mb-7 flex items-center gap-4 border-b border-line pb-4 text-4xl tracking-[0.05em] text-accent">
                    {year === "more" ? "More Voices" : year}
                    <span
                      className="h-px flex-1"
                      style={{
                        background: "linear-gradient(to right, var(--border), transparent)",
                      }}
                      aria-hidden
                    />
                  </div>
                </Reveal>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {testimonials.items
                    .filter((t) => t.year === year)
                    .map((t, i) => (
                      <Reveal key={t.name} delay={(i % 3) * 0.1}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Add Your Story"
        line1="The Next Review"
        accent="Could Be Yours."
        body="Every person on this page started with a single email to me. Your seat in the vehicle is waiting."
        secondaryHref="/chasing-with-me"
        secondaryLabel="What to Expect"
        deep
      />
    </>
  );
}
