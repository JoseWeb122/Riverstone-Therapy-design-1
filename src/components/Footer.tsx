import { useEffect, useState, type SVGProps } from "react";
import { Clock, Leaf, Mail, MapPin, X } from "lucide-react";
import { footer, services, site } from "../data/content";
import { cn } from "../utils/cn";

type ModalKind = "privacy" | "terms" | null;

/* Inline brand icons (lucide no longer ships brand marks) */
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2a6 6 0 0 1 2-2z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { key: "instagram", label: "Instagram", icon: InstagramIcon, url: site.social.instagram },
  { key: "facebook", label: "Facebook", icon: FacebookIcon, url: site.social.facebook },
  { key: "linkedin", label: "LinkedIn", icon: LinkedinIcon, url: site.social.linkedin },
] as const;

export default function Footer() {
  const [modal, setModal] = useState<ModalKind>(null);

  /* Close on Escape + lock scroll while open */
  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [modal]);

  const active = modal === "privacy" ? footer.privacy : modal === "terms" ? footer.terms : null;

  return (
    <footer className="relative bg-moss text-ivory/70">
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 text-ivory">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-eucalyptus text-ivory">
                <Leaf size={16} strokeWidth={1.8} />
              </span>
              <span className="flex items-baseline gap-2">
                <span className="font-serif text-[1.3rem] font-medium tracking-tight">{site.shortName}</span>
                <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.34em] text-sagelight">
                  Therapy
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs font-serif text-[1.05rem] italic leading-relaxed text-ivory/60">
              “{site.tagline}”
            </p>

            {/* Social icons render only if a URL is set in the content file */}
            {socials.some((s) => s.url) && (
              <div className="mt-6 flex gap-3">
                {socials.map((s) =>
                  s.url ? (
                    <a
                      key={s.key}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-all duration-300 hover:border-sagelight hover:text-sagelight"
                    >
                      <s.icon width={16} height={16} />
                    </a>
                  ) : null
                )}
              </div>
            )}
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-sagelight">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors duration-300 hover:text-sagelight">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-sagelight">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.items.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="transition-colors duration-300 hover:text-sagelight">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-sagelight">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 transition-colors duration-300 hover:text-sagelight">
                  <Mail size={15} className="shrink-0 text-sagelight" aria-hidden="true" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="flex items-center gap-3 transition-colors duration-300 hover:text-sagelight">
                  <Clock size={15} className="shrink-0 text-sagelight" aria-hidden="true" />
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="shrink-0 text-sagelight" aria-hidden="true" />
                {site.contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-7 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setModal("privacy")}
              className="font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-sagelight"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setModal("terms")}
              className="font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-sagelight"
            >
              Terms
            </button>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-[11px] leading-relaxed text-ivory/35">{footer.disclaimer}</p>
      </div>

      {/* Privacy / Terms modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={active?.title ?? "Dialog"}
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center p-5 transition-all duration-300",
          active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setModal(null)} aria-hidden="true" />
        <div
          className={cn(
            "relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-[1.75rem] bg-ivory p-8 text-ink shadow-2xl transition-transform duration-300 md:p-10",
            active ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
          )}
        >
          <button
            type="button"
            onClick={() => setModal(null)}
            aria-label="Close dialog"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-beige text-clay transition-colors hover:border-sage hover:text-eucalyptus"
          >
            <X size={18} />
          </button>
          {active && (
            <>
              <h3 className="font-serif text-[1.7rem] font-light tracking-tight">{active.title}</h3>
              <div className="mt-5 space-y-4 leading-relaxed text-charcoal/85">
                {active.body.map((p, i) => (
                  <p key={i} className={cn(i === 0 && "font-serif italic text-clay")}>
                    {p}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
