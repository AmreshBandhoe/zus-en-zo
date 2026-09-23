"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import type { Img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Ambient photo slot. One image → renders it plain. Several → slow crossfade
 * with a gentle Ken Burns drift, no visible controls.
 *
 * The caller supplies the positioned, aspect-ratio, overflow-hidden box (same
 * markup as a bare <Image fill>); this only fills it.
 *
 * Pauses when scrolled out of view or the tab is hidden. Collapses to the first
 * image, static, under reduced motion.
 */
export function Gallery({
  images,
  sizes,
  interval = 5500,
  preloadFirst = false,
  objectPosition,
  imgClassName = "object-cover",
}: {
  images: Img[];
  sizes: string;
  interval?: number;
  preloadFirst?: boolean;
  objectPosition?: string;
  imgClassName?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const [index, setIndex] = useState(0);

  const animated = !reduce && images.length > 1;

  useEffect(() => {
    if (!animated || !inView) return;

    let timer: number | undefined;
    const start = () => {
      timer ??= window.setInterval(
        () => setIndex((i) => (i + 1) % images.length),
        interval,
      );
    };
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [animated, inView, images.length, interval]);

  const style = objectPosition ? { objectPosition } : undefined;

  if (!animated) {
    const img = images[0];
    return (
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        preload={preloadFirst || undefined}
        style={style}
        className={imgClassName}
      />
    );
  }

  return (
    <div ref={ref} className="absolute inset-0">
      {images.map((img, i) => {
        const active = i === index;
        return (
          <motion.div
            key={img.src}
            className="absolute inset-0"
            style={{ transformOrigin: i % 2 ? "72% 28%" : "28% 72%" }}
            initial={false}
            animate={{ opacity: active ? 1 : 0, scale: active ? 1.06 : 1 }}
            transition={{
              opacity: { duration: 1.2, ease: EASE },
              scale: {
                duration: active ? interval / 1000 + 1.4 : 0.9,
                ease: "linear",
              },
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={sizes}
              preload={preloadFirst && i === 0 ? true : undefined}
              style={style}
              className={imgClassName}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
