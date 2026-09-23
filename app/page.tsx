import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Worlds } from "@/components/worlds";
import { FoodSpread } from "@/components/food-spread";
import { Guesthouse } from "@/components/guesthouse";
import { Tours } from "@/components/tours";
import { Story } from "@/components/story";
import { Visit } from "@/components/visit";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      {/* Target of the skip link in layout.tsx. */}
      <main id="main" className="flex-1">
        <Hero />
        <Worlds />
        <Story />
        <FoodSpread />
        <Guesthouse />
        <Tours />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
