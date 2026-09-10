/*
 * Zus & Zo's own photography, supplied by the venue and processed into
 * public/images/. The four "tour" thumbnails and the Fredberg shot are cropped
 * from the official "Top 10 Tours" poster; everything else is full-frame.
 */

type Img = { src: string; alt: string; w: number; h: number };

export const IMAGES = {
  hero: {
    src: "/images/building.jpg",
    alt: "Het historische groene houten huis van Zus & Zo op neuten, met een overdekt terras en gasten aan tafel eronder.",
    w: 1800,
    h: 1196,
  } satisfies Img,

  worldRestaurant: {
    src: "/images/dish-moksi.jpg",
    alt: "Surinaams bord met witte rijst, gestoofde kip in tomatensaus, bakabana en gewokte groenten.",
    w: 1024,
    h: 684,
  } satisfies Img,
  worldCulture: {
    src: "/images/booking-board.jpg",
    alt: "Het 'Boek hier'-bord bij de bar, met een schoolbord vol tours: Brownsberg, Dolphin Tour, Jaw Jaw, City Tour en meer.",
    w: 1080,
    h: 1440,
  } satisfies Img,
  worldTours: {
    src: "/images/tour-fredberg.jpg",
    alt: "Groep wandelaars kijkt uit over eindeloos regenwoud vanaf de top van de Fredberg.",
    w: 1200,
    h: 566,
  } satisfies Img,
  worldGuesthouse: {
    src: "/images/breakfast.jpg",
    alt: "Ontbijtkom met muesli, yoghurt en schijfjes banaan, met een kannetje honing ernaast.",
    w: 1024,
    h: 684,
  } satisfies Img,

  food: {
    src: "/images/menu-table.jpg",
    alt: "Bovenaanzicht van een houten tafel met twee getoaste broodjes, een muesli-yoghurtkom met banaan en verse jus.",
    w: 1600,
    h: 1069,
  } satisfies Img,

  guesthouseBand: {
    src: "/images/building-sunset.jpg",
    alt: "Het historische groene houten huis van Zus & Zo bij zonsondergang, met de kamers op de tweede verdieping achter de luiken.",
    w: 1800,
    h: 2399,
  } satisfies Img,

  tours: [
    {
      src: "/images/tour-bigipan.jpg",
      alt: "Houten vlonder met hangmatten boven het stille water van Bigi Pan bij zonsondergang.",
      w: 1200,
      h: 574,
    } satisfies Img,
    {
      src: "/images/tour-citytour.jpg",
      alt: "Het witte Presidentieel Paleis in Paramaribo onder een blauwe lucht.",
      w: 1200,
      h: 615,
    } satisfies Img,
    {
      src: "/images/tour-dolphin.jpg",
      alt: "Een Guyanadolfijn springt uit het bruine water van de riviermonding.",
      w: 1200,
      h: 572,
    } satisfies Img,
    {
      src: "/images/tour-jawjaw.jpg",
      alt: "Persoon in traditionele pangi bij de stroomversnellingen van de Boven-Suriname.",
      w: 1200,
      h: 583,
    } satisfies Img,
  ],

  story: {
    src: "/images/toast-group.jpg",
    alt: "Vier gasten proosten met bier en cocktails, met een punt appeltaart op tafel.",
    w: 1024,
    h: 684,
  } satisfies Img,
};
