import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/content/lang";
import { LANGS, type Lang } from "@/content/i18n";
import { site } from "@/content/site";
import logoMark from "@/assets/logo-mark.png";
import { Flag } from "./Flag";

const LANG_LABEL: Record<Lang, string> = { es: "ES", en: "EN", de: "DE" };
// Endonyms, so each button reads correctly whatever the current UI language.
const LANG_NAME: Record<Lang, string> = { es: "Español", en: "English", de: "Deutsch" };

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#how", label: t.nav.how },
    { href: "#area", label: t.nav.area },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className={`glass mx-auto flex max-w-6xl items-center gap-2 rounded-2xl px-3 py-3 sm:gap-3 transition-shadow sm:px-6 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <a href="#top" className="mr-auto flex items-center gap-2.5 leading-tight">
          <img
            src={logoMark}
            alt=""
            width={40}
            height={40}
            className="size-9 shrink-0 sm:size-10"
          />
          {/* Narrow phones: logo mark only; the name stays available to screen readers. */}
          <span className="flex flex-col max-[399px]:sr-only">
            <span className="font-display text-lg font-semibold tracking-tight text-primary">
              {site.brand}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
              {site.brandSuffix[lang]}
            </span>
          </span>
        </a>

        <nav aria-label={t.nav.services} className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div
          role="group"
          aria-label={t.nav.languageLabel}
          className="flex items-center rounded-full border border-border bg-secondary/60 p-0.5"
        >
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              aria-label={LANG_NAME[l]}
              title={LANG_NAME[l]}
              lang={l}
              className={`inline-flex min-h-9 min-w-8 items-center justify-center gap-1.5 rounded-full px-1.5 text-xs font-semibold transition-colors sm:px-2.5 ${
                lang === l
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Flag lang={l} className="size-5" />
              <span aria-hidden className="hidden sm:inline">
                {LANG_LABEL[l]}
              </span>
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
        >
          {t.nav.cta}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.nav.close : t.nav.menu}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-primary sm:size-11 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t.nav.menu}
          className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
