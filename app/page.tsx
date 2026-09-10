import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Worlds } from "@/components/worlds";
import { FoodSpread } from "@/components/food-spread";
import { Tours } from "@/components/tours";
import { Guesthouse } from "@/components/guesthouse";
import { Story } from "@/components/story";
import { Visit } from "@/components/visit";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
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
