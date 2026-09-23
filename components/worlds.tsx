import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { IMAGES, type Img } from "@/lib/images";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const WORLDS: {
  href: string;
  kicker: string;
  title: string;
  body: string;
  img: Img;
  span: string;
  ratio: string;
  objectPos?: string;
}[] = [
  {
    href: "#menu",
    kicker: "Grand café",
    title: "Surinaams, Europees en Caribisch door elkaar",
    body: "Elke dag open van 09:00 tot 21:00, met een hele grote tuin. Ontbijten, lunchen, dineren of gewoon chillen. Vega en vegan ook.",
    img: IMAGES.worldRestaurant,
    span: "lg:col-span-7",
    ratio: "aspect-[16/11] lg:aspect-[16/10]",
  },
  {
    href: "#over-ons",
    kicker: "Over ons",
    title: "Restaurant, reisbureau en guesthouse in één pand",
    body: "Op papier staat het los van elkaar, in het historische pand loopt het in elkaar over. Tegenover de Palmentuin, in hartje Paramaribo.",
    img: IMAGES.worldCulture,
    span: "lg:col-span-5",
    ratio: "aspect-[16/11] lg:aspect-[4/3]",
    objectPos: "50% 22%",
  },
  {
    href: "#tours",
    kicker: "Tours",
    title: "Ruim 25 tours en workshops door heel Suriname",
    body: "Van een stadswandeling of dolfijnentocht tot meerdaagse reizen over de Boven-Suriname. Plantages, watervallen, dorpen.",
    img: IMAGES.worldTours,
    span: "lg:col-span-5",
    ratio: "aspect-[16/11] lg:aspect-[4/3]",
  },
  {
    href: "#kamers",
    kicker: "Kamers",
    title: "Vijf simpele kamers, vanaf €15 per nacht",
    body: "Op de tweede verdieping van het pand. Vier met airco, één single met ventilator. 's Ochtends loop je zo naar beneden voor je ontbijt.",
    img: IMAGES.worldGuesthouse,
    span: "lg:col-span-7",
    ratio: "aspect-[16/11] lg:aspect-[16/10]",
  },
];

export function Worlds() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
      <Reveal className="max-w-xl">
        <h2 className="text-balance font-display text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
          Je komt voor het eten en blijft voor de rest.
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
        {WORLDS.map((w) => (
          <RevealItem key={w.href} className={w.span}>
            <Link href={w.href} className="group block">
              <div
                className={`relative w-full overflow-hidden rounded-lg ${w.ratio}`}
              >
                <Image
                  src={w.img.src}
                  alt={w.img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  style={w.objectPos ? { objectPosition: w.objectPos } : undefined}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[0.8rem] font-medium text-orange">
                    {w.kicker}
                  </span>
                  <h3 className="mt-2 max-w-[24ch] font-display text-xl leading-snug tracking-tight text-ink sm:text-2xl">
                    {w.title}
                  </h3>
                  <p className="mt-2 max-w-[42ch] text-[0.95rem] leading-relaxed text-ink-soft">
                    {w.body}
                  </p>
                </div>
                <ArrowUpRight
                  size={22}
                  weight="light"
                  className="mt-1 shrink-0 text-orange transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                />
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
