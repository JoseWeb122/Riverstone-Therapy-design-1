import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  /** "media" enables the slow image settle animation */
  variant?: "fade" | "media";
  style?: CSSProperties;
};

/**
 * Calm scroll-reveal wrapper: gentle fade + rise once the element
 * enters the viewport. `variant="media"` adds the soft image settle.
 */
export function Reveal({ children, className, delay = 0, variant = "fade", style }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn("reveal", variant === "media" && "reveal-media", visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}

/**
 * Scroll-spy: returns the id of the section currently in view.
 */
export function useScrollSpy(ids: string[], offset = 160) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const pos = window.scrollY + offset;
        let current = ids[0] ?? "";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= pos) current = id;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return active;
}
