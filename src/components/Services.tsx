import { ArrowRight } from "lucide-react";
import { services } from "../data/content";
import { Reveal } from "../hooks/reveal";
import { cn } from "../utils/cn";

/**
 * "Learn More" gently hands the visitor to the consultation form
 * with that service pre-selected — every card leads somewhere real.
 */
function handleLearnMore(title: string) {
  window.dispatchEvent(new CustomEvent("preselect-service", { detail: title }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-sage/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
              {services.eyebrow}
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
              Support for <em className="font-normal text-eucalyptus">Where You Are.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">{services.subhead}</p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.items.map((service, i) => {
            const Icon = service.icon;
            const wide = i >= 3;
            return (
              <Reveal
                key={service.id}
                delay={(i % 3) * 110}
                className={cn(wide ? "lg:col-span-3" : "lg:col-span-2", i === 4 && "md:col-span-2")}
              >
                <article className="group flex h-full flex-col rounded-[1.75rem] border border-beige bg-ivory p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-sage/60 hover:shadow-[0_30px_60px_-30px_rgba(61,74,55,0.35)] md:p-9">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-eucalyptus/10 text-eucalyptus transition-colors duration-500 group-hover:bg-eucalyptus group-hover:text-ivory">
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span
                      className="select-none font-serif text-[3.2rem] font-light leading-none text-sand transition-colors duration-500 group-hover:text-sage"
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-serif text-[1.55rem] leading-tight tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-charcoal/80">{service.description}</p>

                  <button
                    type="button"
                    onClick={() => handleLearnMore(service.title)}
                    className="group/btn mt-7 inline-flex w-fit items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-eucalyptus transition-colors hover:text-fern"
                    aria-label={`Learn more about ${service.title} and request a consultation`}
                  >
                    {services.learnMore}
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-sage/50 transition-all duration-300 group-hover/btn:border-eucalyptus group-hover/btn:bg-eucalyptus group-hover/btn:text-ivory"
                      aria-hidden="true"
                    >
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </span>
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
