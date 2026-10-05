import { Quote } from "lucide-react";
import { testimonials } from "../data/content";
import { Reveal } from "../hooks/reveal";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-sage/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
              {testimonials.eyebrow}
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
              What Clients <em className="font-normal text-eucalyptus">Say</em>
            </h2>
            <p className="mt-5 text-sm italic leading-relaxed text-clay/90">{testimonials.note}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 140}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-beige bg-ivory p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(61,74,55,0.35)]">
                <Quote size={22} className="text-sage" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 font-serif text-[1.18rem] italic leading-relaxed text-charcoal">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center justify-between gap-3 border-t border-beige pt-5">
                  <span className="text-sm font-bold text-ink">— {t.context}</span>
                  <span className="rounded-full bg-beige px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-clay">
                    Sample
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
