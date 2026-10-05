import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { faq } from "../data/content";
import { Reveal } from "../hooks/reveal";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        {/* Sticky intro column */}
        <div>
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
                <span className="h-px w-10 bg-eucalyptus/60" aria-hidden="true" />
                {faq.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
                Questions, Gently <em className="font-normal text-eucalyptus">Answered.</em>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-charcoal/80">{faq.text}</p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 rounded-[1.5rem] border border-beige bg-cream/80 p-7">
                <h3 className="font-serif text-[1.3rem] leading-snug text-ink">{faq.aside.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{faq.aside.text}</p>
                <a
                  href="#contact"
                  className="group mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-eucalyptus transition-colors hover:text-fern"
                >
                  {faq.aside.link}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Accordion */}
        <Reveal delay={100}>
          <div className="border-t border-beige">
            {faq.items.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={item.q} className="border-b border-beige">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "font-serif text-[1.25rem] leading-snug tracking-tight transition-colors duration-300 md:text-[1.45rem]",
                        isOpen ? "text-eucalyptus" : "text-ink group-hover:text-eucalyptus"
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                        isOpen
                          ? "rotate-45 border-eucalyptus bg-eucalyptus text-ivory"
                          : "border-sand text-clay group-hover:border-eucalyptus group-hover:text-eucalyptus"
                      )}
                      aria-hidden="true"
                    >
                      <Plus size={16} strokeWidth={2} />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-label={item.q}
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 leading-relaxed text-charcoal/85">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
