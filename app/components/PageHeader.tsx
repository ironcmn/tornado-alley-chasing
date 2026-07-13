import Reveal from "./Reveal";

// Large page header in the style of the local TAC site: eyebrow, a huge
// two-line Bebas title with an amber accent line, lead text, and a faint
// storm-line SVG decoration on the right.
export default function PageHeader({
  eyebrow,
  line1,
  accent,
  lead,
}: {
  eyebrow: string;
  line1: string;
  accent: string;
  lead: string;
}) {
  return (
    <header className="page-header">
      <svg className="storm-line" viewBox="0 0 400 400" fill="none" aria-hidden>
        <ellipse
          cx="350"
          cy="200"
          rx="200"
          ry="200"
          stroke="rgba(245,158,11,0.04)"
          strokeWidth="1"
          strokeDasharray="20 10"
        />
        <ellipse
          cx="350"
          cy="200"
          rx="140"
          ry="140"
          stroke="rgba(245,158,11,0.05)"
          strokeWidth="1"
          strokeDasharray="15 8"
        />
        <ellipse
          cx="350"
          cy="200"
          rx="80"
          ry="80"
          stroke="rgba(245,158,11,0.07)"
          strokeWidth="1"
          strokeDasharray="10 6"
        />
        <path
          d="M200,0 L180,80 L220,80 L180,200 L230,200 L170,400"
          stroke="rgba(245,158,11,0.06)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="container-site">
        <Reveal>
          <div className="eyebrow">{eyebrow}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1>
            {line1}
            <br />
            <span className="accent">{accent}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p>{lead}</p>
        </Reveal>
      </div>
    </header>
  );
}
