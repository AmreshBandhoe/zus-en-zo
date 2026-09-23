/*
 * Zus & Zo's own photography, supplied by the venue and processed into
 * public/images/.
 *
 * Motion budget: each subject animates in exactly ONE place. Four slots
 * crossfade through an Img[] via <Gallery> (components/gallery.tsx) —
 *   heroSet   the pand           storySet  people at the table
 *   foodSet   the food           roomsSet  the rooms
 * Every other photo slot (the bento grid, the tours carousel) is a single
 * still Img.
 *
 * The four "tour" thumbnails and the Fredberg shot are cropped from the
 * official "Top 10 Tours" poster. Everything under /images/gallery/ is
 * web-sized by scripts/process-photos.mjs from source-photos/ and the Kamer
 * folders (the room shots carry the ZUS&ZO logo as shot).
 */

export type Img = { src: string; alt: string; w: number; h: number };

export const IMAGES = {
  // ── Animated: the pand (Hero) ─────────────────────────────────────────────
  heroSet: [
    {
      src: "/images/building.jpg",
      alt: "Het historische groene houten huis van Zus & Zo op neuten, met een overdekt terras en gasten aan tafel eronder.",
      w: 1800,
      h: 1196,
    },
    {
      src: "/images/building-sunset.jpg",
      alt: "Het historische groene houten huis van Zus & Zo bij zonsondergang, met de kamers op de tweede verdieping achter de luiken.",
      w: 1800,
      h: 2399,
    },
  ] satisfies Img[],

  // ── Animated: the food (#menu band) ──────────────────────────────────────
  foodSet: [
    {
      src: "/images/menu-table.jpg",
      alt: "Bovenaanzicht van een houten tafel met twee getoaste broodjes, een muesli-yoghurtkom met banaan en verse jus.",
      w: 1600,
      h: 1069,
    },
    {
      src: "/images/gallery/food-burger.jpg",
      alt: "Hamburger met spek en gebakken ei, met een royale portie friet, op krantenpapier in de tuin.",
      w: 1600,
      h: 1069,
    },
    {
      src: "/images/gallery/food-ribs.jpg",
      alt: "Gegrilde spareribs in kleefsaus op een houten plankje, met friet en een blikje Sprite.",
      w: 1024,
      h: 684,
    },
    {
      src: "/images/gallery/food-rice.jpg",
      alt: "Oranje bord met witte rijst, gestoofde kip in rode saus, bakabana en gewokte groenten.",
      w: 1024,
      h: 684,
    },
    {
      src: "/images/dish-moksi.jpg",
      alt: "Surinaams bord met witte rijst, gestoofde kip in tomatensaus, bakabana en gewokte groenten.",
      w: 1024,
      h: 684,
    },
    {
      src: "/images/gallery/food-toastie.jpg",
      alt: "Twee tosti's van bruin brood met gesmolten kaas en groente, op krantenpapier met tomaat en ketchup.",
      w: 1024,
      h: 684,
    },
  ] satisfies Img[],

  // ── Animated: people at the table (#over-ons) ────────────────────────────
  storySet: [
    {
      src: "/images/toast-group.jpg",
      alt: "Vier gasten proosten met bier en cocktails, met een punt appeltaart op tafel.",
      w: 1024,
      h: 684,
    },
    {
      src: "/images/gallery/people-hands.jpg",
      alt: "Bovenaanzicht van twee gasten die tosti's en een mueslikom delen aan een rond houten tafeltje met verse sappen.",
      w: 1024,
      h: 684,
    },
    {
      src: "/images/gallery/people-cheers.jpg",
      alt: "Vier gasten proosten met cocktails en een milkshake boven een tafel met taart en friet in de tuin.",
      w: 1024,
      h: 684,
    },
    {
      src: "/images/gallery/people-lunch.jpg",
      alt: "Twee gasten lachen met elkaar aan een tuintafel met broodjes en verse sappen, palmen op de achtergrond.",
      w: 1024,
      h: 684,
    },
  ] satisfies Img[],

  // ── Animated: the rooms (#kamers band) ──────────────────────────────────
  roomsSet: [
    {
      src: "/images/gallery/room-drie.jpg",
      alt: "Kamer Drie: ruime kamer met twee bedden, donkere houten vloer, airco en Surinaamse schilderijen.",
      w: 1600,
      h: 1067,
    },
    {
      src: "/images/gallery/room-vier.jpg",
      alt: "Kamer Vier: kamer met een tweepersoonsbed met roze laken, een schilderij aan de muur en balken in het plafond.",
      w: 1600,
      h: 1067,
    },
    {
      src: "/images/gallery/room-vijf.jpg",
      alt: "Kamer Vijf: eenvoudige kamer met twee eenpersoonsbedden met kleurige lakens en een geel wandkastje.",
      w: 1440,
      h: 990,
    },
    {
      src: "/images/gallery/room-zes.jpg",
      alt: "Kamer Zes: kleine kamer met een eenpersoonsbed met rood laken, een wastafel en airco.",
      w: 1600,
      h: 1067,
    },
  ] satisfies Img[],

  // ── Still: the bento grid ("Je komt voor het eten en blijft voor de rest") ─
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

  // ── Still: the tours carousel ───────────────────────────────────────────
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
};
