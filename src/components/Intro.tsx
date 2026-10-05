import { ArrowRight, Quote } from "lucide-react";
import { intro, site } from "../data/content";
import { Reveal } from "../hooks/reveal";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      {/* soft ambient shapes */}
      <div className="pointer-events-none absolute -right-40 top-16 h-[26rem] w-[26rem] rounded-full bg-sage/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[22rem] w-[22rem] rounded-full bg-beige/50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
              <span className="h-px w-10 bg-eucalyptus/60" aria-hidden="true" />
              {intro.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
              Sometimes, Taking the First Step Is the <em className="font-normal text-eucalyptus">Hardest Part.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-7 space-y-5 leading-relaxed text-charcoal/85">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <a
              href="#approach"
              className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-eucalyptus px-7 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-ivory shadow-[0_14px_30px_-14px_rgba(108,127,91,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-fern"
            >
              {intro.cta}
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal variant="media" delay={120} className="relative">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] border border-sage/50 sm:-left-6 sm:-top-6"
            aria-hidden="true"
          />
          <div className="reveal-media relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-40px_rgba(45,42,35,0.4)]">
            <img
              src={site.images.intro.src}
              alt={site.images.intro.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          {/* floating reassurance card */}
          <figure className="absolute -bottom-8 left-4 w-[min(20rem,88%)] rounded-2xl bg-pine p-6 text-ivory shadow-[0_30px_60px_-25px_rgba(44,54,40,0.7)] sm:-left-10">
            <Quote size={20} className="text-sagelight" aria-hidden="true" />
            <blockquote className="mt-3 font-serif text-[1.05rem] italic leading-snug">
              “{intro.card}”
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
