import { ArrowRight } from "lucide-react";
import { steps } from "../data/content";
import { Reveal } from "../hooks/reveal";

export default function Steps() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
              {steps.eyebrow}
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
              A Simple, Gentle <em className="font-normal text-eucalyptus">Way to Begin.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">{steps.subhead}</p>
          </Reveal>
        </div>

        {/* Numbered cards */}
        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {steps.items.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 150}>
                <article className="group relative h-full rounded-[1.75rem] border border-beige bg-cream/70 p-9 transition-all duration-500 hover:-translate-y-1.5 hover:border-sage/60 hover:bg-cream hover:shadow-[0_30px_60px_-30px_rgba(61,74,55,0.35)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-eucalyptus/10 text-eucalyptus transition-colors duration-500 group-hover:bg-eucalyptus group-hover:text-ivory">
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span
                    className="mt-6 block select-none font-serif text-[3.6rem] font-light leading-none text-sand transition-colors duration-500 group-hover:text-sage"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-[1.55rem] tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/80">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Conversion nudge */}
        <Reveal delay={200} className="mt-14 text-center">
          <p className="text-sm font-semibold italic text-clay">Ready when you are —</p>
          <a
            href="#contact"
            className="group mt-4 inline-flex items-center gap-2.5 rounded-full bg-eucalyptus px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ivory shadow-[0_14px_30px_-14px_rgba(108,127,91,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-fern"
          >
            {steps.cta}
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
