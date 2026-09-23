"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { IMAGES } from "@/lib/images";
import { GhostCta, IconButton, RESERVE_HREF } from "./ui";
import { Reveal } from "./reveal";

const TOURS = [
  {
    name: "Bigi Pan",
    meta: "2 tot 3 dagen",
    from: "vanaf €160 p.p.",
    body: "Uitvaren over de lagune, hangmatten boven het water, en zonsondergangen tussen de vogels.",
    img: IMAGES.tours[0],
  },
  {
    name: "Paramaribo City Tour",
    meta: "1 dag",
    from: "vanaf €30 p.p.",
    body: "Het houten centrum, de centrale markt en de waterkant, met een gids die de verhalen kent.",
    img: IMAGES.tours[1],
  },
  {
    name: "Dolfijnen",
    meta: "1 dag",
    from: "vanaf €30 p.p.",
    body: "Uitvaren op de monding van de Commewijne en Guyanadolfijnen spotten terwijl de lucht kleurt.",
    img: IMAGES.tours[2],
  },
  {
    name: "Jaw Jaw",
    meta: "2 tot 3 dagen",
    from: "vanaf €225 p.p.",
    body: "Met de korjaal de Boven-Suriname op, slapen in een marrondorp, zwemmen bij de sula's.",
    img: IMAGES.tours[3],
  },
];

export function Tours() {
  const track = useRef<HTMLUListElement>(null);
  // Drives the arrow disabled states; also refreshed on resize.
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges((prev) => {
      const next = {
        start: el.scrollLeft <= 2,
        end: max <= 2 || el.scrollLeft >= max - 2,
      };
      return prev.start === next.start && prev.end === next.end ? prev : next;
    });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const nudge = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="tours" className="scroll-mt-20 overflow-hidden py-12 lg:py-16">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h2 className="max-w-[18ch] font-display text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            Tours met gidsen die er zelf wonen.
          </h2>
          <div className="hidden gap-2 sm:flex">
            <IconButton label="Vorige tours" onClick={() => nudge(-1)} disabled={edges.start}>
              <ArrowLeft size={18} />
            </IconButton>
            <IconButton label="Volgende tours" onClick={() => nudge(1)} disabled={edges.end}>
              <ArrowRight size={18} />
            </IconButton>
          </div>
        </Reveal>
      </div>

      {/* tabIndex/aria make the overflow region keyboard-scrollable with the
          arrow keys, and screen readers announce it as a list to operate. */}
      <ul
        ref={track}
        tabIndex={0}
        aria-label="Tours, scrollbare lijst"
        className="hide-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-4 px-4 pb-1 focus-visible:outline-offset-[-4px] sm:scroll-pl-6 sm:px-6 lg:mt-10 lg:scroll-pl-10 lg:px-10"
      >
        {TOURS.map((t) => (
          <li
            key={t.name}
            className="w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[24rem]"
          >
            <Link href={RESERVE_HREF} className="group flex h-full flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={t.img.src}
                  alt={t.img.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 24rem"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-aqua px-3 py-1 text-[0.76rem] font-medium text-aqua-ink">
                  {t.meta}
                </span>
                <span className="font-display text-[0.95rem] text-orange">
                  {t.from}
                </span>
              </div>

              <div className="mt-2.5 flex items-start justify-between gap-3">
                <h3 className="font-display text-lg leading-snug tracking-tight text-ink">
                  {t.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="mt-0.5 shrink-0 text-orange transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                />
              </div>
              <p className="mt-1.5 line-clamp-2 text-[0.9rem] leading-relaxed text-ink-soft">
                {t.body}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 flex max-w-container flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <p className="max-w-[52ch] text-[0.85rem] leading-relaxed text-ink-soft">
          Een greep uit ruim 25 tours en workshops, van stadswandeling tot
          meerdaagse jungletrek. Richtprijzen per persoon, definitief bij boeking
          en afhankelijk van groepsgrootte en seizoen.
        </p>
        <GhostCta href={RESERVE_HREF}>Reserveren</GhostCta>
      </div>
    </section>
  );
}
