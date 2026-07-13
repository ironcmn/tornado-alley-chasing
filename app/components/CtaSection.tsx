import Reveal from "./Reveal";
import EmailCopy from "./EmailCopy";
import { EMAIL } from "../content";

// Centered closing CTA in the local site's style. Used at the bottom of
// every page with page-specific copy and an optional secondary link.
export default function CtaSection({
  eyebrow,
  line1,
  accent,
  body,
  secondaryHref,
  secondaryLabel,
  deep = false,
}: {
  eyebrow: string;
  line1: string;
  accent: string;
  body: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  deep?: boolean;
}) {
  return (
    <section
      className="section relative overflow-hidden text-center"
      style={{ background: deep ? "var(--bg-deep)" : "var(--bg-void)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="container-site relative">
        <Reveal>
          <div className="eyebrow eyebrow-center">{eyebrow}</div>
          <h2>
            {line1}
            <br />
            <span className="accent">{accent}</span>
          </h2>
          <p className="mx-auto mt-5 mb-9 max-w-xl text-[1.05rem] text-muted">{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              Email Me
            </a>
            {secondaryHref && secondaryLabel && (
              <a href={secondaryHref} className="btn btn-ghost">
                {secondaryLabel}
              </a>
            )}
          </div>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.85rem] text-muted">
            No email app? Write to <EmailCopy />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
