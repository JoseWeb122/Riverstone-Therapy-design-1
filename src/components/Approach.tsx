import { approach, site } from "../data/content";
import { Reveal } from "../hooks/reveal";

export default function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-pine py-24 text-ivory md:py-32">
      {/* quiet natural backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src={site.images.approachBg.src} alt="" loading="lazy" className="h-full w-full object-cover opacity-[0.16]" />
        <div className="absolute inset-0 bg-gradient-to-b from-pine/95 via-pine/85 to-moss/95" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-sage/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-sagelight md:text-[12px]">
              <span className="h-px w-8 bg-sagelight/60" aria-hidden="true" />
              {approach.eyebrow}
              <span className="h-px w-8 bg-sagelight/60" aria-hidden="true" />
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.1rem,4.4vw,3.5rem)] font-light leading-[1.12] tracking-tight">
              Your Story <em className="font-normal text-sagelight">Matters.</em>
            </h2>
            <p className="mt-6 leading-relaxed text-ivory/75">{approach.text}</p>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {approach.principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.title} delay={i * 130}>
                <div className="group border-t border-ivory/15 pt-8 transition-colors duration-500 hover:border-sagelight/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 text-sagelight transition-all duration-500 group-hover:bg-sagelight group-hover:text-pine">
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.55rem] tracking-tight">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{principle.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
