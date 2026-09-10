import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { PrimaryCta } from "./ui";
import { Reveal } from "./reveal";
import { Wave } from "./wave";

const DISHES = [
  { name: "Ontbijt", note: "Vers brood, fruit en sterke koffie, vanaf 09:00 in de tuin." },
  { name: "Lunch", note: "Broodjes, roti, salades en Surinaamse klassiekers." },
  { name: "Diner", note: "Surinaams, Europees en Caribisch door elkaar. Vega en vegan ook." },
  { name: "Zoet & borrel", note: "Taart, een verse jus of een Parbo, tot 21:00." },
];

/*
 * THE colour block. One warm light theme page-wide; this orange band is the
 * single deliberate colour-block beat, bordered top and bottom by the brand
 * wave. Used once. Do not add a second inverted section.
 */
export function FoodSpread() {
  return (
    <>
      <div className="text-orange" aria-hidden="true">
        <Wave className="-mb-px" />
      </div>

      <section id="menu" className="scroll-mt-20 bg-orange text-orange-ink">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
            <Reveal
              as="figure"
              className="relative order-1 aspect-[16/11] w-full overflow-hidden rounded-lg lg:order-2 lg:col-span-7 lg:aspect-[16/12]"
            >
              <Image
                src={IMAGES.food.src}
                alt={IMAGES.food.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal className="order-2 lg:order-1 lg:col-span-5">
              <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Bestel te veel.{" "}
                <span className="em-italic text-orange-ink/75">Deel alles.</span>
              </h2>
              <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-orange-ink">
                In het grand café met de grote tuin serveren we van 09:00 tot
                21:00 een mix van de Surinaamse, Europese en Caribische keuken.
                Kom ontbijten, lunchen, dineren of gewoon chillen.
              </p>

              <ul className="mt-10 divide-y divide-orange-ink/20 border-y border-orange-ink/20">
                {DISHES.map((d) => (
                  <li
                    key={d.name}
                    className="grid grid-cols-[9rem_1fr] gap-4 py-4 sm:grid-cols-[11rem_1fr]"
                  >
                    <span className="font-display text-lg text-orange-ink">
                      {d.name}
                    </span>
                    <span className="text-[0.92rem] leading-relaxed text-orange-ink/90">
                      {d.note}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <PrimaryCta href="#reserveren" inverse>
                  Reserveren
                </PrimaryCta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="text-orange" aria-hidden="true">
        <Wave flip className="-mt-px" />
      </div>
    </>
  );
}
