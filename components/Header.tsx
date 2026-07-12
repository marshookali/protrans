"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, nav } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ease-smooth ${
          open
            ? "border-transparent bg-transparent"
            : scrolled
              ? "border-paper-line bg-paper/95 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] backdrop-blur-md"
              : "border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[70px] items-center justify-between">
          <Link
            href="/"
            className="group flex items-center"
            aria-label="PRO TRANS Logistics home"
          >
            <BrandLogo invert={!scrolled} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-4 py-2 text-sm font-medium tracking-[0.01em] transition-colors duration-300 ${
                    scrolled
                      ? "text-ink/70 hover:text-ink"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-signal transition-transform duration-300 ease-smooth ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href={`tel:+91${company.phones.mobile[0]}`}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-ink/80 hover:text-ink"
                  : "text-white/85 hover:text-white"
              }`}
            >
              <svg className="h-4 w-4 text-signal" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +91 {company.phones.mobile[0].slice(0, 5)}{" "}
              {company.phones.mobile[0].slice(5)}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-signal px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-6px_rgba(255,91,41,0.5)]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle (opens the menu; the overlay carries its own close) */}
          <button
            onClick={() => setOpen(true)}
            className={`${open ? "hidden" : "flex"} h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden`}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 ${scrolled ? "bg-ink" : "bg-white"}`} />
            <span className={`h-0.5 w-6 ${scrolled ? "bg-ink" : "bg-white"}`} />
            <span className={`h-0.5 w-6 ${scrolled ? "bg-ink" : "bg-white"}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — a SIBLING of <header> (not a child, so the
          header's backdrop-filter can't trap its fixed positioning) and layered
          ABOVE the header (z-50 > z-40) so it owns its own top row. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-asphalt md:hidden"
          >
            {/* faint grid backdrop — echoes the ops-console motif */}
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />

            {/* top bar: logo + close (X) */}
            <div className="shell relative z-10 flex h-[70px] shrink-0 items-center justify-between">
              <BrandLogo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-mr-2 flex h-11 w-11 items-center justify-center text-paper/70 transition-colors duration-300 hover:text-paper"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* centered links + call line + CTA */}
            <div className="relative flex flex-1 flex-col items-center justify-center gap-9 px-6 pb-16">
              <nav className="flex flex-col items-center gap-7">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="font-display text-3xl font-800 tracking-tight text-paper transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Direct call line */}
              <motion.a
                href={`tel:+91${company.phones.mobile[0]}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.4 }}
                className="flex items-center gap-2.5 text-paper/85 transition-colors hover:text-paper"
              >
                <svg
                  className="h-4 w-4 text-signal"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="font-mono text-sm tracking-wide">
                  +91 {company.phones.mobile[0].slice(0, 5)}{" "}
                  {company.phones.mobile[0].slice(5)}
                </span>
              </motion.a>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-signal px-8 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
