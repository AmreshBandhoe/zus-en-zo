import { IMAGES } from "@/lib/images";
import { Gallery } from "./gallery";
import { Reveal } from "./reveal";

export function Story() {
  return (
    <section id="over-ons" className="scroll-mt-20 bg-aqua py-24 text-ink lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 gap-y-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-7 lg:col-start-1">
          <h2 className="max-w-[20ch] font-display text-[2rem] leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[3.1rem] lg:leading-[1.12]">
            Geen concept.{" "}
            <span className="em-italic text-orange">Gewoon zo gegroeid.</span>
          </h2>
          <div className="mt-8 max-w-[52ch] space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              Zus &amp; Zo zit in een historisch houten pand in hartje Paramaribo,
              tegenover de Palmentuin. Beneden een grand café met een grote tuin,
              boven vijf simpele kamers om te blijven slapen.
            </p>
            <p>
              Restaurant, reisbureau en guesthouse: op papier staat het los van
              elkaar. In het pand loopt het gewoon in elkaar over. Je komt voor
              een lunch en boekt bij het afrekenen een tour het binnenland in.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-10">
          <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Gallery
              images={IMAGES.storySet}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </figure>
        </Reveal>

        <Reveal className="lg:col-span-8 lg:col-start-1">
          <div className="border-t border-line-strong pt-8">
            <p className="max-w-[40ch] font-display text-2xl leading-snug tracking-tight text-ink sm:text-[1.7rem]">
              Eén minuut naar de Wakapasi, vijf naar de markt en de waterkant.
              Vanaf het vliegveld is het zo&apos;n 80 minuten rijden, en we halen
              je ook op.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
