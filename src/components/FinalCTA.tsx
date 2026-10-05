import { ArrowRight } from "lucide-react";
import { finalCta, site } from "../data/content";
import { Reveal } from "../hooks/reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src={site.images.finalCta.src} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-moss/70 via-transparent to-moss/60" />
      </div>

      {/* thin cinematic frame */}
      <div
        className="pointer-events-none absolute inset-4 rounded-[2rem] border border-ivory/25 md:inset-7"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-sagelight md:text-[12px]">
            <span className="h-px w-8 bg-sagelight/60" aria-hidden="true" />
            {finalCta.eyebrow}
            <span className="h-px w-8 bg-sagelight/60" aria-hidden="true" />
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.1rem,4.8vw,3.9rem)] font-light leading-[1.12] tracking-tight text-ivory">
            Your Next Chapter Can Start With{" "}
            <em className="font-normal text-sagelight">a Conversation.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ivory/80">{finalCta.text}</p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ivory px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ink shadow-[0_20px_44px_-18px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sagelight"
            >
              {finalCta.primary}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ivory/40 px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory/80 hover:bg-ivory/10"
            >
              {finalCta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
