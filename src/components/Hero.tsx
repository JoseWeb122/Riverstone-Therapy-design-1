import { ArrowRight, Feather } from "lucide-react";
import { hero, site } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* Cinematic background with a very slow settle */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={site.images.hero.src}
          alt=""
          fetchPriority="high"
          className="h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 md:px-8 md:pb-32">
        <div className="max-w-3xl">
          <p className="animate-fade-up flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-sagelight md:text-[12px]">
            <span className="h-px w-10 bg-sagelight/70" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="animate-fade-up mt-6 font-serif text-[clamp(2.5rem,6.4vw,4.8rem)] font-light leading-[1.07] tracking-tight text-ivory [animation-delay:150ms]">
            {hero.headlineStart}{" "}
            <em className="font-normal text-sagelight">{hero.headlineEm}</em>
          </h1>

          <p className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg [animation-delay:300ms]">
            {hero.text}
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:450ms]">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-eucalyptus px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ivory shadow-[0_20px_44px_-18px_rgba(0,0,0,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-fern"
            >
              {hero.primaryCta}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ivory/35 px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory/70 hover:bg-ivory/10"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <p className="animate-fade-up mt-10 flex items-center gap-2.5 text-sm font-semibold text-ivory/70 [animation-delay:600ms]">
            <Feather size={15} strokeWidth={1.8} className="shrink-0 text-sagelight" aria-hidden="true" />
            {hero.reassurance}
          </p>
        </div>
      </div>

      {/* Gentle scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden="true">
        <span className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-ivory/50">Begin</span>
        <span className="relative h-10 w-px overflow-hidden bg-ivory/20">
          <span className="absolute left-0 top-0 h-4 w-px animate-scrollcue bg-sagelight" />
        </span>
      </div>
    </section>
  );
}
