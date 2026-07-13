import Link from "next/link";
import EmailCopy from "./EmailCopy";
import { footer } from "../content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chase-history", label: "Chase History" },
  { href: "/chasing-with-me", label: "Chasing With Me" },
  { href: "/expenses", label: "Expenses" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/training", label: "1-on-1 Training" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-dark)]">
      <div className="container-site grid gap-9 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-14">
        <div>
          <Link href="/" className="font-display block text-3xl">
            TAC<span className="accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{footer.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={footer.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors hover:border-accent hover:bg-[var(--amber-dim)] hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46H13.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
              </svg>
            </a>
            <a
              href={footer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors hover:border-accent hover:bg-[var(--amber-dim)] hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-[18px] w-[18px]" aria-hidden>
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="font-display text-base tracking-[0.12em]">Navigate</div>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-base tracking-[0.12em]">Get In Touch</div>
          <div className="mt-5 space-y-4 text-sm text-muted">
            <div>
              <span className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent">
                Email
              </span>
              <EmailCopy />
            </div>
            <div>
              <span className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent">
                Social
              </span>
              {footer.social}
            </div>
            <span className="badge badge-amber">All skill levels welcome</span>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-6 text-[0.78rem] text-[var(--txt-3)]">
          <span>{footer.copyright}</span>
          <span>{footer.byline}</span>
        </div>
      </div>
    </footer>
  );
}
