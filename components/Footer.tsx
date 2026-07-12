import Link from "next/link";
import { company, nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper-line bg-paper">
      {/* hazard stripe top edge — fleet livery motif */}
      <div className="hazard h-1.5 w-full opacity-90" />

      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-9 w-9" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-800 uppercase tracking-tight text-ink">
                  Pro Trans
                </span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-signal">
                  Logistics LLP
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
              Technology-driven FMCG transportation across South India with
              Pan-India connectivity. Built on a promise of speed, safety, and
              reliability.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip chip-signal">EST. {company.founded}</span>
              <span className="chip">FMCG SPECIALIST</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="eyebrow text-ink/40">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-signal"
                  >
                    <span className="h-px w-3 bg-paper-line transition-all duration-300 group-hover:w-5 group-hover:bg-signal" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-ink/40">Reach Us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/35">
                  Mobile
                </div>
                <div className="mt-1 flex flex-col gap-0.5">
                  {company.phones.mobile.map((p) => (
                    <a
                      key={p}
                      href={`tel:+91${p}`}
                      className="text-ink/75 transition-colors hover:text-signal"
                    >
                      +91 {p}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/35">
                  Email
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block break-all text-ink/75 transition-colors hover:text-signal"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Address strip */}
        <div className="mt-14 flex flex-col gap-4 border-t border-paper-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-ink/45">
            {company.hq.line}, {company.hq.area}, PIN: {company.hq.pin}
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/35">
            © {company.founded}–{new Date().getFullYear()} {company.shortName}{" "}
            Logistics LLP
          </p>
        </div>
      </div>
    </footer>
  );
}
