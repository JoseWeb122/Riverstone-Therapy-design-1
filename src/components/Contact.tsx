import { useEffect, useRef, useState, type ChangeEvent } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { serviceOptions, site } from "../data/content";
import { Reveal } from "../hooks/reveal";
import { cn } from "../utils/cn";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  contactMethod: "Email" | "Phone";
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  contactMethod: "Email",
  message: "",
};

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^[\d\s()+.\-]{7,}$/.test(v.phone.trim()))
    e.phone = "Please enter a valid phone number.";
  if (!v.service) e.service = "Please choose what you're looking for.";
  if (v.message.trim().length < 10)
    e.message = "Please share a few words about what you're looking for.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const nameRef = useRef<HTMLInputElement | null>(null);

  /* Service cards can pre-select a service here */
  useEffect(() => {
    const handler = (e: Event) => {
      const label = (e as CustomEvent<string>).detail;
      setStatus("idle");
      setValues((v) => ({ ...v, service: serviceOptions.includes(label) ? label : "Not Sure Yet" }));
    };
    window.addEventListener("preselect-service", handler);
    return () => window.removeEventListener("preselect-service", handler);
  }, []);

  const setField = (key: keyof FormValues, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blurField = (key: keyof FormValues) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const inputCls = (key: keyof FormValues) => cn("field", touched[key] && errors[key] && "field-error");

  const errText = (key: keyof FormValues) =>
    touched[key] && errors[key] ? (
      <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-semibold text-terra">
        <AlertCircle size={13} aria-hidden="true" /> {errors[key]}
      </p>
    ) : null;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, service: true, message: true });
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      /* Simulated request — connect your form endpoint / email service here. */
      await new Promise((resolve, reject) => {
        setTimeout(() => (Math.random() < 0.0001 ? reject(new Error("network")) : resolve(null)), 1400);
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus("idle");
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  const contactRows = [
    { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: Phone, label: "Phone", value: site.contact.phone, href: site.contact.phoneHref },
    { icon: MapPin, label: "Sessions", value: site.contact.location },
    { icon: Clock, label: "Availability", value: site.contact.hours },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-sage/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-eucalyptus md:text-[12px]">
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
              Contact
              <span className="h-px w-8 bg-eucalyptus/60" aria-hidden="true" />
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.14] tracking-tight text-ink">
              Take the First Step <em className="font-normal text-eucalyptus">Today.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">
              You don't have to have the right words — a short message is enough to begin. Share a little
              about what you're looking for, and we'll take it from there, together.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Warm info panel */}
          <Reveal className="h-full">
            <aside className="flex h-full flex-col rounded-[2rem] bg-pine p-9 text-ivory md:p-11">
              <h3 className="font-serif text-[1.8rem] font-light leading-snug tracking-tight">
                You don't have to figure it out <em className="font-normal text-sagelight">alone.</em>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">{site.contact.responseNote}</p>

              <ul className="mt-9 space-y-6">
                {contactRows.map((row) => {
                  const Icon = row.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-sagelight transition-colors duration-300 group-hover:bg-sagelight group-hover:text-pine">
                        <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-sagelight">
                          {row.label}
                        </span>
                        <span className="mt-1 block text-[15px] font-bold leading-snug">{row.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a href={row.href} className="group flex items-center gap-4">
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-auto pt-9 text-[11.5px] italic leading-relaxed text-ivory/45">
                Placeholder contact details — replace them with your practice's real information in the
                content file.
              </p>
            </aside>
          </Reveal>

          {/* Form card */}
          <Reveal delay={140}>
            <div className="rounded-[2rem] border border-beige bg-ivory p-7 shadow-[0_40px_80px_-50px_rgba(45,42,35,0.4)] md:p-10">
              {status === "success" ? (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-eucalyptus">
                    <CheckCircle2 size={30} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.8rem] font-light tracking-tight text-ink">
                    Thank you for reaching out.
                  </h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-charcoal/80">
                    Your message has been received. We'll be in touch soon.
                  </p>
                  <p className="mt-1.5 text-sm text-clay">
                    Prefer email? Write to us anytime at{" "}
                    <a href={`mailto:${site.contact.email}`} className="font-bold text-eucalyptus underline underline-offset-4">
                      {site.contact.email}
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="group mt-8 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-eucalyptus transition-colors hover:text-fern"
                  >
                    Send another message
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="label">
                        Full Name <span className="text-terra">*</span>
                      </label>
                      <input
                        ref={nameRef}
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={values.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setField("name", e.target.value)}
                        onBlur={() => blurField("name")}
                        aria-invalid={Boolean(touched.name && errors.name)}
                        aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                        className={inputCls("name")}
                      />
                      {touched.name && errors.name && <span id="name-error" className="sr-only">{errors.name}</span>}
                      {errText("name")}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="label">
                        Email <span className="text-terra">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={(e) => setField("email", e.target.value)}
                        onBlur={() => blurField("email")}
                        aria-invalid={Boolean(touched.email && errors.email)}
                        className={inputCls("email")}
                      />
                      {errText("email")}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone <span className="font-normal normal-case text-taupe">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(555) 000-0000"
                        value={values.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        onBlur={() => blurField("phone")}
                        aria-invalid={Boolean(touched.phone && errors.phone)}
                        className={inputCls("phone")}
                      />
                      {errText("phone")}
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="label">
                        I am looking for <span className="text-terra">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={values.service}
                          onChange={(e) => {
                            setTouched((t) => ({ ...t, service: true }));
                            setField("service", e.target.value);
                          }}
                          onBlur={() => blurField("service")}
                          aria-invalid={Boolean(touched.service && errors.service)}
                          className={cn(inputCls("service"), "appearance-none pr-11", !values.service && "text-taupe/70")}
                        >
                          <option value="" disabled>
                            Select one…
                          </option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-taupe"
                          aria-hidden="true"
                        />
                      </div>
                      {errText("service")}
                    </div>
                  </div>

                  {/* Preferred contact method */}
                  <fieldset className="mt-6">
                    <legend className="label">Preferred Contact Method</legend>
                    <div className="flex gap-2.5">
                      {(["Email", "Phone"] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setField("contactMethod", m)}
                          aria-pressed={values.contactMethod === m}
                          className={cn(
                            "flex-1 rounded-xl border px-4 py-3 text-sm font-bold transition-all duration-300",
                            values.contactMethod === m
                              ? "border-eucalyptus bg-eucalyptus/10 text-fern"
                              : "border-beige bg-white/60 text-charcoal/60 hover:border-sage hover:text-charcoal"
                          )}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* Message */}
                  <div className="mt-6">
                    <label htmlFor="message" className="label">
                      Message <span className="text-terra">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="A few words about what brings you here — only what feels comfortable to share."
                      value={values.message}
                      onChange={(e) => setField("message", e.target.value)}
                      onBlur={() => blurField("message")}
                      aria-invalid={Boolean(touched.message && errors.message)}
                      className={cn(inputCls("message"), "resize-none")}
                    />
                    {errText("message")}
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="mt-6 flex items-start gap-3 rounded-xl border border-terra/30 bg-terra/10 p-4 text-sm leading-relaxed text-terra"
                    >
                      <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        Something went wrong while sending your message. Please try again, or reach us
                        directly at{" "}
                        <a href={`mailto:${site.contact.email}`} className="font-bold underline underline-offset-4">
                          {site.contact.email}
                        </a>
                        .
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-eucalyptus py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-ivory shadow-[0_16px_36px_-16px_rgba(108,127,91,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-fern disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request a Consultation
                        <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[11.5px] leading-relaxed text-clay/80">
                    Your message is confidential and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
