import Link from "next/link";
import Image from "next/image";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { CONTACT, FOOTER_LINKS, SITE_URL, SOCIAL } from "@/lib/site";
import { PrimaryCta, RESERVE_HREF } from "./ui";

const SOCIAL_ICONS = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line-strong bg-paper-2">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
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
              <PrimaryCta href={RESERVE_HREF}>Reserveren</PrimaryCta>
            </div>
          </div>

          <nav aria-label="Voettekst" className="lg:col-span-3 lg:col-start-7">
            <ul className="space-y-2">
              {FOOTER_LINKS.map((l) => (
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
              {CONTACT.street}
              <br />
              {CONTACT.locality}, {CONTACT.country}
              <br />
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-ink">
                {CONTACT.phoneDisplay}
              </a>
              <br />
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-ink"
              >
                {CONTACT.email}
              </a>
            </address>
            {/*
              * Social profiles are not confirmed yet — SOCIAL in lib/site.ts
              * is empty until the real Zus & Zo URLs arrive, so no dead links
              * to platform roots ship to production.
              */}
            {SOCIAL.length > 0 && (
              <div className="mt-5 flex gap-3">
                {SOCIAL.map(({ label, href }) => {
                  const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:bg-ink/[0.04]">
                        {Icon ? <Icon size={18} /> : label}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-[0.82rem] text-ink-soft sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Zus &amp; Zo Suriname</p>
          <p>
            <a
              href={SITE_URL}
              className="transition-colors hover:text-ink"
            >
              zusenzosuriname.com
            </a>
            · Paramaribo
          </p>
        </div>
      </div>
    </footer>
  );
}
