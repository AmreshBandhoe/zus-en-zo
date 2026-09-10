import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zusenzosuriname.com"),
  title: "Zus & Zo Suriname - eten, tours en kamers in hartje Paramaribo",
  description:
    "Grand café, guesthouse en reisbureau in één historisch pand in hartje Paramaribo. Surinaamse, Europese en Caribische keuken, vijf kamers vanaf €15 en ruim 25 tours door heel Suriname.",
  openGraph: {
    title: "Zus & Zo Suriname",
    description:
      "Eten, tours en kamers onder één dak in hartje Paramaribo. Grand café, guesthouse en reisbureau.",
    type: "website",
    locale: "nl_NL",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zus & Zo Suriname",
  description:
    "Grand café, guesthouse en reisbureau in een historisch pand in hartje Paramaribo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grote Combéweg 13A",
    addressLocality: "Paramaribo",
    addressCountry: "SR",
  },
  telephone: "+597520904",
  email: "info@zusenzosuriname.com",
  url: "https://www.zusenzosuriname.com/",
  servesCuisine: ["Surinaams", "Europees", "Caribisch"],
  openingHours: "Mo-Su 09:00-21:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${poppins.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
