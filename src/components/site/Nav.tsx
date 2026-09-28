import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/content/lang";
import { LANGS, type Lang } from "@/content/i18n";
import { site } from "@/content/site";

const LANG_LABEL: Record<Lang, string> = { es: "ES", en: "EN", de: "DE" };

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
        className={`glass mx-auto flex max-w-6xl items-center gap-3 rounded-2xl px-4 py-3 transition-shadow sm:px-6 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <a href="#top" className="mr-auto flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight text-primary">
            {site.brand}
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
            {site.brandSuffix[lang]}
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
              lang={l}
              className={`min-h-9 min-w-10 rounded-full px-2.5 text-xs font-semibold transition-colors ${
                lang === l
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {LANG_LABEL[l]}
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
          className="inline-flex size-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
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
