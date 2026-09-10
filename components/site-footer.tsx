import Link from "next/link";
import Image from "next/image";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { PrimaryCta } from "./ui";

const NAV = [
  { href: "#over-ons", label: "Over ons" },
  { href: "#menu", label: "Menu" },
  { href: "#kamers", label: "Kamers" },
  { href: "#tours", label: "Tours" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line-strong bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt="Zus & Zo"
              width={456}
              height={194}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-[34ch] text-[0.95rem] leading-relaxed text-ink-soft">
              Grand café, guesthouse en tours onder één dak, in een historisch
              pand in hartje Paramaribo.
            </p>
            <div className="mt-6">
              <PrimaryCta href="#reserveren">Reserveren</PrimaryCta>
            </div>
          </div>

          <nav className="lg:col-span-3 lg:col-start-7">
            <ul className="space-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <address className="not-italic text-[0.95rem] leading-relaxed text-ink-soft">
              Grote Combéweg 13A
              <br />
              Paramaribo, Suriname
              <br />
              <a
                href="tel:+597520904"
                className="transition-colors hover:text-ink"
              >
                +597 520-904
              </a>
              <br />
              <a
                href="mailto:info@zusenzosuriname.com"
                className="transition-colors hover:text-ink"
              >
                info@zusenzosuriname.com
              </a>
            </address>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border text-ink transition-colors hover:bg-ink/[0.04]"
                style={{ borderColor: "var(--line-strong)" }}
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border text-ink transition-colors hover:bg-ink/[0.04]"
                style={{ borderColor: "var(--line-strong)" }}
              >
                <FacebookLogo size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-[0.82rem] text-ink-soft sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Zus &amp; Zo Suriname</p>
          <p>Paramaribo</p>
        </div>
      </div>
    </footer>
  );
}
