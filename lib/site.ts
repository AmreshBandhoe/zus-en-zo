/*
 * Single source of truth for everything that appears in more than one place:
 * the canonical URL, contact details, and the nav link list (header, mobile
 * menu, skip-link target and footer all read from here).
 */

export const SITE_URL = "https://www.zusenzosuriname.com";

export const CONTACT = {
  name: "Zus & Zo Suriname",
  street: "Grote Combéweg 13A",
  locality: "Paramaribo",
  country: "Suriname",
  // Display form vs. tel:/schema.org form.
  phoneDisplay: "+597 520-904",
  phoneHref: "tel:+597520904",
  phoneE164: "+597520904",
  email: "info@zusenzosuriname.com",
  openingHours: "09:00–21:00",
} as const;

/**
 * Reservation e-mail with a prefilled NL template so every enquiry arrives
 * with the details we need to answer in one reply. The Caldera field names
 * (fld_8187097 etc.) belong to the real booking form still to be built — see
 * README — this mailto is the interim path.
 */
const RESERVATION_BODY = [
  "Beste Zus & Zo,",
  "",
  "Ik zou graag reserveren:",
  "- Wat: tafel / tour / kamer",
  "- Datum:",
  "- Aantal personen:",
  "- Naam:",
  "- Telefoon:",
  "",
  "Met vriendelijke groet,",
].join("\n");

export const RESERVATION_MAILTO = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Reservering Zus & Zo",
)}&body=${encodeURIComponent(RESERVATION_BODY)}`;

/** Primary in-page sections, mirrored by the section IDs below. */
export const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#menu", label: "Menu" },
  { href: "#kamers", label: "Kamers" },
  { href: "#tours", label: "Tours" },
] as const;

/** Footer adds Contact; header/mobile menu keep the five primary items. */
export const FOOTER_LINKS = [...NAV_LINKS.slice(1), { href: "#contact", label: "Contact" }];

/**
 * Social profiles are NOT confirmed yet (see README "Still to confirm before
 * launch"). Until they are, we render no links at all rather than dead links
 * to platform roots. Drop the URLs in here and they light up automatically.
 */
export const SOCIAL: { label: string; href: string }[] = [];
