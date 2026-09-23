import { IMAGES } from "@/lib/images";
import { Gallery } from "./gallery";
import { PrimaryCta } from "./ui";
import { Reveal } from "./reveal";

const FACTS = [
  ["Kamer Drie", "±25 m², een tweepersoonsbed en twee eenpersoonsbedden. Vanaf €45 per nacht."],
  ["Kamer Vier", "±25 m², een tweepersoonsbed en een eenpersoonsbed. Vanaf €45 per nacht."],
  ["Kamer Vijf", "Single met ventilator, twee eenpersoonsbedden. Vanaf €15 per nacht."],
  ["Kamer Zes", "Kleine kamer met een eenpersoonsbed. €25 per nacht."],
];

export function Guesthouse() {
  return (
    <section id="kamers" className="scroll-mt-20">
      <Reveal
        as="figure"
        className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/2] lg:aspect-[2/1]"
      >
        <Gallery
          images={IMAGES.roomsSet}
          sizes="100vw"
          objectPosition="50% 32%"
        />
      </Reveal>

      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-28">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            Slapen tussen het eten en de tours in.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink-soft">
            Vijf simpele overnachtingsplekken op de tweede verdieping van het
            historische pand. Vier kamers met airco, de vijfde een single met
            ventilator. Bedlinnen en handdoeken liggen klaar, en &apos;s ochtends
            loop je zo naar beneden voor je ontbijt.
          </p>
          <div className="mt-9">
            <PrimaryCta href="#reserveren">Reserveren</PrimaryCta>
          </div>
        </Reveal>

        <Reveal className="mt-12 lg:col-span-6 lg:col-start-7 lg:mt-2">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {FACTS.map(([term, desc]) => (
              <div key={term} className="border-t border-line-strong pt-4">
                <dt className="font-display text-lg text-ink">{term}</dt>
                <dd className="mt-1 text-[0.92rem] leading-relaxed text-ink-soft">
                  {desc}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
