import Link from "next/link";
import type { ReactNode } from "react";

/* One corner-radius system: pill for interactive, --radius-md for surfaces. */

export function PrimaryCta({
  href,
  children,
  className = "",
  inverse = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        "group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[0.95rem] font-medium tracking-tight transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 " +
        (inverse
          ? "bg-orange-ink text-orange "
          : "bg-orange text-orange-ink ") +
        className
      }
    >
      {children}
    </Link>
  );
}

export function GhostCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-transparent px-6 text-[0.95rem] font-medium tracking-tight text-ink transition-colors duration-200 hover:border-ink hover:bg-ink/[0.04] motion-reduce:transition-none " +
        className
      }
      style={{ borderColor: "var(--line-strong)" }}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block text-[0.72rem] font-medium uppercase tracking-[0.2em] text-orange">
      {children}
    </span>
  );
}
