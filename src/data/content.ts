/**
 * ═══════════════════════════════════════════════════════════════
 *  SITE CONTENT — single source of truth (CMS-style editing)
 *  Edit everything in this file; no component changes required.
 *  Fields marked [ placeholder ] should be replaced with real,
 *  verified information before launch.
 * ═══════════════════════════════════════════════════════════════
 */
import {
  Leaf,
  Heart,
  Users,
  Sunrise,
  Sprout,
  Ear,
  Compass,
  HeartHandshake,
  MessageCircle,
  Footprints,
  Fingerprint,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/* ── Brand ──────────────────────────────────────────────── */
export const site = {
  name: "Riverstone Therapy",
  shortName: "Riverstone",
  tagline: "A safe space to be heard, understood, and supported.",
  ctaLabel: "Schedule a Consultation",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  /* ── Contact information — replace with real details ── */
  contact: {
    email: "hello@yourpractice.com", // placeholder — replace
    phone: "(555) 000-0000", // placeholder — replace
    phoneHref: "tel:+15550000000", // placeholder — replace
    location: "In-person & virtual sessions",
    hours: "Flexible daytime & evening availability",
    responseNote: "You can expect a personal reply within 1–2 business days.",
  },

  /* ── Social links — leave "" to hide an icon ────────── */
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },

  /* ── Website images — swap URLs & alt text freely ───── */
  images: {
    hero: {
      src: "https://images.pexels.com/photos/6184473/pexels-photo-6184473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920",
      alt: "A couple having a calm, supportive conversation on a sofa in a warmly lit room",
    },
    intro: {
      src: "https://images.pexels.com/photos/6633814/pexels-photo-6633814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1250&w=980",
      alt: "A woman standing by an open window in soft morning light, taking a quiet, reflective moment",
    },
    therapist: {
      src: "https://images.pexels.com/photos/6567272/pexels-photo-6567272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1250&w=1000",
      alt: "Warm portrait of the therapist smiling gently in soft natural light",
    },
    approachBg: {
      src: "https://images.pexels.com/photos/6934649/pexels-photo-6934649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      alt: "Soft golden light falling over a misty forest path",
    },
    finalCta: {
      src: "https://images.pexels.com/photos/33175695/pexels-photo-33175695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1920",
      alt: "Golden morning mist rolling gently over peaceful hills at sunrise",
    },
  },
};

/* ── Hero ───────────────────────────────────────────────── */
export const hero = {
  eyebrow: "Couples & Individual Therapy",
  headlineStart: "You Don't Have to Navigate Life's Challenges",
  headlineEm: "Alone.",
  text: "Compassionate support for individuals and couples working through relationship challenges, life transitions, and the difficult seasons that can leave you feeling stuck.",
  reassurance: "A safe space to be heard, understood, and supported.",
  primaryCta: "Schedule a Consultation",
  secondaryCta: "Explore Services",
};

/* ── Emotional introduction ─────────────────────────────── */
export const intro = {
  eyebrow: "Taking the First Step",
  headline: "Sometimes, Taking the First Step Is the Hardest Part.",
  paragraphs: [
    "People come to therapy for many reasons. Sometimes relationships feel harder than they should. Sometimes communication breaks down and the distance keeps growing. Sometimes life simply feels overwhelming — and you're tired of carrying it alone.",
    "Whatever brings you here, wanting support doesn't mean something is wrong with you. It means you're human. Reaching out isn't weakness or a last resort — it's a quiet, courageous act of care for yourself and the people you love.",
    "You don't need the right words or a clear plan to begin. You only need a willingness to show up. From there, we move at a pace that feels right for you.",
  ],
  cta: "Learn More About Our Approach",
  card: "It's okay to ask for help. That's often where the healing begins.",
};

/* ── Services (each card is editable) ───────────────────── */
export const services = {
  eyebrow: "Services",
  headline: "Support for Where You Are.",
  subhead:
    "Every person and relationship is different. Our approach is designed around your individual needs, experiences, and goals.",
  learnMore: "Learn More",
  items: [
    {
      id: "individual",
      number: "01",
      icon: Leaf,
      title: "Individual Therapy",
      description:
        "Create a supportive space to explore personal challenges, emotions, relationships, life transitions, and personal growth.",
    },
    {
      id: "couples",
      number: "02",
      icon: Heart,
      title: "Couples Therapy",
      description:
        "Work through communication challenges, conflict, disconnection, trust concerns, and relationship difficulties together.",
    },
    {
      id: "relationship",
      number: "03",
      icon: Users,
      title: "Relationship Support",
      description:
        "Gain greater understanding of relationship patterns, communication, boundaries, and the challenges that can affect connection.",
    },
    {
      id: "transitions",
      number: "04",
      icon: Sunrise,
      title: "Life Transitions",
      description:
        "Find support and clarity while navigating major changes, uncertainty, difficult seasons, and new chapters in life.",
    },
    {
      id: "growth",
      number: "05",
      icon: Sprout,
      title: "Personal Growth",
      description:
        "Develop greater self-awareness, confidence, healthy boundaries, and a clearer understanding of what you want moving forward.",
    },
  ] satisfies { id: string; number: string; icon: LucideIcon; title: string; description: string }[],
};

/* ── Therapeutic approach ───────────────────────────────── */
export const approach = {
  eyebrow: "Our Approach",
  headline: "Your Story Matters.",
  text: "Therapy is not about having all the answers. It is about having a supportive place to slow down, understand what is happening, and explore a healthier path forward.",
  principles: [
    {
      icon: Ear,
      title: "Listen",
      text: "A space where you can speak openly and feel heard.",
    },
    {
      icon: Compass,
      title: "Understand",
      text: "Explore patterns, emotions, relationships, and challenges with greater clarity.",
    },
    {
      icon: HeartHandshake,
      title: "Connect",
      text: "Build healthier communication and stronger connections.",
    },
    {
      icon: Sprout,
      title: "Grow",
      text: "Move forward with greater confidence, awareness, and hope.",
    },
  ],
};

/* ── How it works ───────────────────────────────────────── */
export const steps = {
  eyebrow: "How It Works",
  headline: "A Simple, Gentle Way to Begin.",
  subhead: "No pressure and no commitments — just a conversation to see what feels right for you.",
  items: [
    {
      number: "01",
      icon: MessageCircle,
      title: "Reach Out",
      text: "Start with a simple conversation about what you're experiencing and what you're looking for.",
    },
    {
      number: "02",
      icon: Compass,
      title: "Find Your Path",
      text: "Discuss your goals and determine an approach that feels appropriate for your needs.",
    },
    {
      number: "03",
      icon: Footprints,
      title: "Move Forward",
      text: "Begin working toward greater clarity, healthier patterns, stronger relationships, and personal growth.",
    },
  ],
  cta: "Start the Conversation",
};

/* ── About the therapist — placeholder fields included ──── */
export const about = {
  eyebrow: "About Your Therapist",
  headline: "A Place Where You Can Be Yourself.",
  name: "Sarah Mitchell", // EDIT: replace with the therapist's name
  rolePlaceholder: "[ Credentials — e.g., Licensed Marriage & Family Therapist ]",
  bio: [
    "I believe therapy should feel like exhaling — a place where you can set down what you've been carrying, speak honestly, and be met with warmth instead of judgment. My role isn't to hand you answers. It's to walk alongside you while you find your own.",
    "Together, we slow things down and look at what's happening beneath the surface — the patterns, the history, the hopes that went quiet along the way. From that understanding, real change becomes possible: clearer communication, stronger boundaries, deeper connection, and a steadier sense of yourself.",
  ],
  placeholderNote:
    "This section uses placeholder fields. Replace the name, photo, biography, credentials, and experience below with your own verified information.",
  credentialsLabel: "Credentials & Certifications",
  credentials: [
    "[ Credential — e.g., Licensed Marriage & Family Therapist ]",
    "[ Certification — e.g., Trauma-Informed Care Training ]",
    "[ Degree — e.g., M.A. in Counseling Psychology ]",
  ],
  focusLabel: "Areas of Focus",
  focus: [
    "Couples & Communication",
    "Anxiety & Stress",
    "Life Transitions",
    "Boundaries",
    "Self-Worth",
    "Relationship Patterns",
  ],
  experienceLabel: "Professional Experience",
  experiencePlaceholder: "[ Years in practice · settings worked · populations served ]",
  cta: "Meet Your Therapist",
};

/* ── Why clients choose this approach ───────────────────── */
export const qualities = {
  eyebrow: "Why This Approach",
  headline: "Why Clients Choose This Approach",
  subhead: "Therapy works best when it feels safe. Everything here is built around that idea.",
  items: [
    {
      icon: Heart,
      title: "Compassionate",
      text: "You deserve to be treated with understanding and respect.",
    },
    {
      icon: Fingerprint,
      title: "Personalized",
      text: "Your experience is unique, and support should reflect your needs.",
    },
    {
      icon: ShieldCheck,
      title: "Non-Judgmental",
      text: "An environment where you can speak honestly and openly.",
    },
    {
      icon: Sunrise,
      title: "Hopeful",
      text: "Difficult seasons do not have to define what comes next.",
    },
  ],
};

/* ── Testimonials — clearly labeled placeholders ────────── */
export const testimonials = {
  eyebrow: "Testimonials",
  headline: "What Clients Say",
  note: "The quotes below are clearly-labeled placeholders. Replace them with genuine, client-approved testimonials.",
  items: [
    {
      quote:
        "I finally feel heard — not judged, not analyzed, just heard. That alone changed everything for me.",
      context: "Individual therapy client",
    },
    {
      quote:
        "We arrived barely speaking to each other. We're leaving with language, tools, and a way back to one another.",
      context: "Couples therapy clients",
    },
    {
      quote:
        "This was the first place where I didn't have to pretend I was fine. That made all the difference.",
      context: "Individual therapy client",
    },
  ],
};

/* ── FAQ ────────────────────────────────────────────────── */
export const faq = {
  eyebrow: "FAQ",
  headline: "Questions, Gently Answered.",
  text: "It's natural to have questions before reaching out. Here are honest answers to the ones we hear most often.",
  aside: {
    title: "Still wondering if therapy is right for you?",
    text: "You're welcome to ask anything — no pressure, no commitment.",
    link: "Send a Message",
  },
  items: [
    {
      q: "What can I expect during the first session?",
      a: "A calm, unhurried conversation — nothing clinical or intimidating. We'll talk about what brings you in, what you're hoping for, and any questions you have. You only share what feels comfortable, and there's no pressure to have everything figured out.",
    },
    {
      q: "Do you work with both individuals and couples?",
      a: "Yes. Support is available for individuals navigating personal challenges, and for couples who want to work on communication, connection, trust, or conflict — together, in a balanced and respectful space.",
    },
    {
      q: "How do I know if therapy is right for me?",
      a: "If something in your life or relationship feels heavy, stuck, or harder than it should be, that's reason enough. You don't need a diagnosis or a crisis to deserve support — curiosity and willingness are enough to begin.",
    },
    {
      q: "How long are sessions?",
      a: "Sessions typically last around 50 minutes, and we'll meet weekly or biweekly depending on what fits your needs and goals. This is something we decide together in your first conversation.",
    },
    {
      q: "Do you offer virtual sessions?",
      a: "Yes — virtual sessions are available, so you can join from wherever you feel most comfortable and private. Many clients blend in-person and online sessions depending on the season of life they're in.",
    },
    {
      q: "How do I schedule an appointment?",
      a: "It's simple. Use the consultation form below, or reach out by email or phone. We'll arrange a brief, no-pressure conversation to make sure the fit feels right before anything is scheduled.",
    },
    {
      q: "What if I'm not sure what kind of support I need?",
      a: "That's completely okay — it's one of the most common reasons people reach out. In a first conversation, we'll gently sort through what's been going on and find the approach that fits you best.",
    },
  ],
};

/* ── Final CTA ──────────────────────────────────────────── */
export const finalCta = {
  eyebrow: "When You're Ready",
  headline: "Your Next Chapter Can Start With a Conversation.",
  text: "You don't need to have everything figured out before reaching out. Sometimes the first step is simply having a conversation.",
  primary: "Schedule a Consultation",
  secondary: "Contact Us",
};

/* ── Footer ─────────────────────────────────────────────── */
export const footer = {
  disclaimer:
    "This website is a design template with placeholder content. It does not provide medical advice, diagnosis, or treatment, and does not replace care from a licensed professional. If you are experiencing an emergency, please call 911. If you are in crisis, call or text the 988 Suicide & Crisis Lifeline for free, confidential support, 24/7.",
  privacy: {
    title: "Privacy Policy",
    body: [
      "Placeholder policy — replace with your practice's actual privacy policy before launch.",
      "Your privacy matters. Any information shared through this website is used solely to respond to your inquiry and is handled with care and confidentiality. It is never sold or shared with third parties for marketing purposes.",
      "If you have questions about how your information is used, please contact the practice directly.",
    ],
  },
  terms: {
    title: "Terms of Use",
    body: [
      "Placeholder terms — replace with your practice's actual terms before launch.",
      "The content on this website is provided for general informational purposes only. Viewing this site, submitting a message, or reading its content does not create a therapist–client relationship.",
      "If you are experiencing an emergency, please call 911 or your local emergency number, or call or text 988 for crisis support.",
    ],
  },
};

/* ── Form helper: service options for the select field ──── */
export const serviceOptions = [...services.items.map((s) => s.title), "Not Sure Yet"];
