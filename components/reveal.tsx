"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Scroll-reveal. Content lands in reading order as each section enters.
 * Robust: anything already at or above the fold on mount (deep link, back
 * navigation, fast flick) reveals immediately instead of staying hidden.
 * Collapses to static under reduced motion.
 */
function useReveal() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // Generous bottom margin: the observer arms ~half a viewport before the
  // element enters, so a fast flick still reveals it instead of skipping past.
  const inView = useInView(ref, { once: true, margin: "0px 0px 45% 0px" });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    // Already at or above the fold on mount (deep link, reload mid-page, back
    // navigation): reveal immediately, no waiting on a scroll that won't come.
    if (el && el.getBoundingClientRect().top < window.innerHeight) {
      setForced(true);
    }
  }, []);

  return { ref, show: reduce || forced || inView, reduce };
}

export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "figure" | "h2" | "p";
  delay?: number;
  y?: number;
  className?: string;
}) {
  const { ref, show, reduce } = useReveal();
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : reduce ? 0 : y }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, show } = useReveal();
  return (
    <motion.div
      ref={ref as never}
      className={className}
      initial={false}
      animate={show ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
