import { ArrowRight, Info } from "lucide-react";
import { about, site } from "../data/content";
import { Reveal } from "../hooks/reveal";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-sage/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Portrait */}
        <Reveal variant="media" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-b-[2rem] rounded-t-[999px] border border-sage/50 sm:-left-5 sm:-top-5"
            aria-hidden="true"
          />
          <div className="reveal-media relative aspect-[4/5] overflow-hidden rounded-b-[2rem] rounded-t-[999px] shadow-[0_40px_80px_-40px_rgba(45,42,35,0.45)]">
            <img
              src={site.images.therapist.src}
              alt={site.images.therapist.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <figure className="absolute -bottom-6 right-3 rounded-2xl border border-beige bg-ivory/95 px-5 py-4 shadow-[0_24px_50px_-25px_rgba(45,42,35,0.5)] backdrop-blur sm:right-6">
            <p className="font-serif text-lg leading-tight text-ink">{about.name}</p>
            <p className="mt-0.5 text-[10px] font-extrabold uppercase tracking-[0.22em] text-eucalyptus">
              Therapist
            </p>
          </figure>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
              <span className="h-px w-10 bg-eucalyptus/60" aria-hidden="true" />
              {about.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
              A Place Where You Can <em className="font-normal text-eucalyptus">Be Yourself.</em>
            </h2>
            <p className="mt-5 font-serif text-[1.35rem] italic text-charcoal">{about.name}</p>
            <p className="mt-1.5 text-sm font-semibold italic text-clay/90">{about.rolePlaceholder}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-5 leading-relaxed text-charcoal/85">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-2.5 rounded-xl border border-beige bg-ivory/80 p-4 text-[12.5px] italic leading-relaxed text-clay">
              <Info size={15} className="mt-0.5 shrink-0 text-taupe" aria-hidden="true" />
              {about.placeholderNote}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 space-y-7">
              <div>
                <h3 className="label">{about.credentialsLabel}</h3>
                <div className="flex flex-wrap gap-2">
                  {about.credentials.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-dashed border-taupe/70 px-4 py-1.5 text-[12px] font-semibold italic text-clay"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="label">{about.focusLabel}</h3>
                <div className="flex flex-wrap gap-2">
                  {about.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-sage/15 px-4 py-1.5 text-[12px] font-bold text-fern"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="label">{about.experienceLabel}</h3>
                <span className="inline-block rounded-full border border-dashed border-taupe/70 px-4 py-1.5 text-[12px] font-semibold italic text-clay">
                  {about.experiencePlaceholder}
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-eucalyptus px-7 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-ivory shadow-[0_14px_30px_-14px_rgba(108,127,91,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-fern"
            >
              {about.cta}
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
