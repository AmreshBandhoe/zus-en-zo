"use client";

import { motion, useReducedMotion } from "motion/react";
import { IMAGES } from "@/lib/images";
import { Gallery } from "./gallery";
import { PrimaryCta, GhostCta } from "./ui";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-y-10 px-4 pb-14 pt-24 sm:px-6 lg:grid-cols-12 lg:gap-x-8 lg:px-10 lg:pb-16"
    >
      <div className="lg:col-span-7 lg:pb-8">
        <motion.p
          {...rise(0.05)}
          className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-orange"
        >
          Paramaribo, Suriname
        </motion.p>

        <motion.h1
          {...rise(0.13)}
          className="mt-5 max-w-[16ch] text-balance font-display text-[2rem] leading-[1.08] tracking-tight text-ink sm:text-[2.75rem] lg:max-w-[20ch] lg:text-[3.6rem] lg:leading-[1.05]"
        >
          Eten, tours en kamers{" "}
          <span className="em-italic text-orange">onder &eacute;&eacute;n oud dak</span>.
        </motion.h1>

        <motion.p
          {...rise(0.21)}
          className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          Grand café, guesthouse en reisbureau in één historisch pand in hartje
          Paramaribo. Kom eten, boek een tour, blijf slapen.
        </motion.p>

        <motion.div
          {...rise(0.29)}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <PrimaryCta href="#reserveren">Reserveren</PrimaryCta>
          <GhostCta href="#tours">Ontdek de tours</GhostCta>
        </motion.div>
      </div>

      <div className="lg:col-span-5">
        <motion.figure
          initial={reduce ? false : { opacity: 0, clipPath: "inset(8% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-lg lg:aspect-[7/6]"
        >
          <Gallery
            images={IMAGES.heroSet}
            sizes="(max-width: 1024px) 100vw, 40vw"
            preloadFirst
          />
        </motion.figure>
      </div>
    </section>
  );
}
