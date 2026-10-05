import { qualities } from "../data/content";
import { Reveal } from "../hooks/reveal";

export default function Qualities() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
              {qualities.eyebrow}
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
              Why Clients Choose <em className="font-normal text-eucalyptus">This Approach</em>
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">{qualities.subhead}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualities.items.map((q, i) => {
            const Icon = q.icon;
            return (
              <Reveal key={q.title} delay={i * 120}>
                <article className="group h-full rounded-[1.75rem] border border-beige bg-cream/60 p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-sage/60 hover:bg-cream hover:shadow-[0_30px_60px_-30px_rgba(61,74,55,0.35)]">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-eucalyptus/10 text-eucalyptus transition-colors duration-500 group-hover:bg-eucalyptus group-hover:text-ivory">
                    <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.45rem] tracking-tight text-ink">{q.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{q.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
