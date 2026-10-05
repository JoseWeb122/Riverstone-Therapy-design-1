import { useEffect, useState } from "react";
import { ArrowRight, Leaf, Menu, X } from "lucide-react";
import { site } from "../data/content";
import { useScrollSpy } from "../hooks/reveal";
import { cn } from "../utils/cn";

const navIds = site.nav.map((n) => n.href.replace("#", ""));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock background scroll while the mobile menu is open */
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  /* "dark" = transparent header floating over the hero */
  const dark = !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled && !open
            ? "border-b border-beige/70 bg-ivory/90 shadow-[0_10px_40px_-20px_rgba(45,42,35,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-[4.75rem] md:px-8">
          {/* Logo */}
          <a
            href="#home"
            aria-label={`${site.name} — home`}
            className={cn(
              "group flex items-center gap-2.5 transition-colors duration-300",
              dark ? "text-ivory" : "text-ink"
            )}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-eucalyptus text-ivory shadow-[0_10px_20px_-10px_rgba(108,127,91,0.9)] transition-transform duration-500 group-hover:rotate-[15deg]">
              <Leaf size={16} strokeWidth={1.8} />
            </span>
            <span className="flex items-baseline gap-2">
              <span className="font-serif text-[1.3rem] font-medium leading-none tracking-tight">
                {site.shortName}
              </span>
              <span
                className={cn(
                  "hidden text-[0.58rem] font-extrabold uppercase tracking-[0.34em] sm:inline",
                  dark ? "text-sagelight" : "text-taupe"
                )}
              >
                Therapy
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative pb-1 text-[12px] font-extrabold uppercase tracking-[0.16em] transition-colors duration-300",
                    dark
                      ? isActive
                        ? "text-ivory"
                        : "text-ivory/65 hover:text-ivory"
                      : isActive
                        ? "text-eucalyptus"
                        : "text-charcoal/80 hover:text-eucalyptus"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-500",
                      isActive ? "w-full" : "w-0",
                      dark ? "bg-sagelight" : "bg-eucalyptus"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={cn(
                "hidden items-center gap-2 rounded-full px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 lg:inline-flex",
                dark
                  ? "bg-ivory text-ink shadow-[0_16px_36px_-16px_rgba(0,0,0,0.55)] hover:bg-sagelight"
                  : "bg-eucalyptus text-ivory shadow-[0_14px_30px_-14px_rgba(108,127,91,0.8)] hover:bg-fern"
              )}
            >
              {site.ctaLabel}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                dark ? "border-ivory/30 text-ivory" : "border-beige text-ink"
              )}
            >
              <Menu size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ─────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-[80] flex flex-col bg-ivory transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="flex items-center gap-2.5 text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-eucalyptus text-ivory">
              <Leaf size={16} strokeWidth={1.8} />
            </span>
            <span className="font-serif text-[1.3rem] font-medium tracking-tight">{site.shortName}</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-beige text-ink transition-colors hover:border-sage hover:text-eucalyptus"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-8">
          {site.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${140 + i * 60}ms` : "0ms" }}
              className={cn(
                "group flex items-center justify-between border-b border-beige/70 py-4 font-serif text-[1.9rem] tracking-tight text-ink transition-all duration-700 hover:text-eucalyptus",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {item.label}
              <ArrowRight size={20} strokeWidth={1.6} className="text-sage transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          ))}
        </nav>

        <div className="px-8 pb-10">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-eucalyptus py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ivory shadow-[0_14px_30px_-14px_rgba(108,127,91,0.8)] transition-all hover:bg-fern"
          >
            {site.ctaLabel}
            <ArrowRight size={16} />
          </a>
          <p className="mt-5 text-center text-xs font-semibold text-clay">
            {site.contact.email} · {site.contact.phone}
          </p>
        </div>
      </div>
    </>
  );
}
