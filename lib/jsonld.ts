import { CONTACT, SITE_URL } from "@/lib/site";

/*
 * Structured data for the single-page site. One LocalBusiness node that also
 * declares the three things the venue actually is (Restaurant + Lodging +
 * TravelAgency) via schema.org's `additionalType`, so each vertical can pick
 * it up without claiming a type the business doesn't hold. Opening hours use
 * the machine-readable OpeningHoursSpecification form.
 */
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: [
      "https://schema.org/Restaurant",
      "https://schema.org/LodgingBusiness",
      "https://schema.org/TravelAgency",
    ],
    name: CONTACT.name,
    description:
      "Grand café, guesthouse en reisbureau in een historisch pand in hartje Paramaribo.",
    image: `${SITE_URL}/images/building.jpg`,
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    url: `${SITE_URL}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.locality,
      addressCountry: "SR",
    },
    servesCuisine: ["Surinaams", "Europees", "Caribisch"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/#reserveren`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  };
}
