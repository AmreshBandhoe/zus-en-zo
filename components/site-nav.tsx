"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { PrimaryCta } from "./ui";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#menu", label: "Menu" },
  { href: "#kamers", label: "Kamers" },
  { href: "#tours", label: "Tours" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent")
      }
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="#top"
          aria-label="Zus & Zo, naar boven"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Zus & Zo"
            width={456}
            height={194}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.9rem] tracking-tight text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryCta href="#reserveren" className="h-10 px-5 text-[0.9rem]">
            Reserveren
          </PrimaryCta>
        </div>

        <button
          type="button"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink lg:hidden"
        >
          {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 font-display text-lg text-ink hover:bg-ink/[0.04]"
                >
                  {l.label}
                </Link>
              ))}
              <PrimaryCta
                href="#reserveren"
                className="mt-3 w-full"
              >
                Reserveren
              </PrimaryCta>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
