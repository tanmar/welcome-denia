import {
  Camera,
  Check,
  Hammer,
  Home,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Plus,
  Minus,
  UserRound,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useLang } from "@/content/lang";
import { site, phoneHref, waHref, mailHref } from "@/content/site";
import { ContactForm } from "./ContactForm";
import heroImg from "@/assets/hero-villa.jpg";
import poolImg from "@/assets/pool-garden.jpg";
import detailImg from "@/assets/home-detail.jpg";
import coastImg from "@/assets/coast-area.jpg";

const section = "mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.primary}
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center rounded-full border border-primary/25 bg-card px-7 text-base font-semibold text-primary transition-colors hover:bg-secondary"
            >
              {t.hero.secondary}
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {t.hero.trust.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <Check className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt={t.hero.imageAlt}
            width={1600}
            height={1200}
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="glass absolute -bottom-6 left-4 hidden items-center gap-3 rounded-2xl p-3 pr-5 sm:flex">
            <div className="flex size-14 items-center justify-center rounded-xl border border-dashed border-border bg-secondary text-muted-foreground">
              <UserRound className="size-6" aria-hidden />
            </div>
            <div className="max-w-44">
              <p className="text-sm font-semibold text-primary">{site.brand}</p>
              <p className="text-xs text-muted-foreground">{t.hero.portraitPlaceholder}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLang();
  const icons = [Home, Hammer, Languages];
  return (
    <section id="services" className={section}>
      <p className="eyebrow">{t.services.eyebrow}</p>
      <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">{t.services.title}</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.services.lead}</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {t.services.groups.map((g, i) => {
          const Icon = icons[i] ?? Home;
          return (
            <article key={g.title} className="surface lift flex flex-col p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="eyebrow">{g.tag}</span>
              </div>
              <h3 className="mt-5 text-xl">{g.title}</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                    <Check className="mt-1 size-3.5 shrink-0 text-turquoise" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              {"note" in g && g.note && (
                <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  {g.note}
                </p>
              )}
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">{t.services.personal}</p>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-secondary/50">
      <div className={`${section} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
        <div className="relative">
          <img
            src={detailImg}
            alt=""
            aria-hidden
            loading="lazy"
            width={1200}
            height={912}
            className="aspect-4/5 w-full rounded-3xl object-cover"
          />
          <div className="surface absolute -bottom-5 -right-3 w-40 p-4 text-center sm:w-48">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-dashed border-border text-muted-foreground">
              <UserRound className="size-5" aria-hidden />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{t.about.portraitNote}</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.about.title}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {t.about.facts.map((f) => (
              <li
                key={f}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/85"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Transparency() {
  const { t } = useLang();
  const s = t.transparency.sample;
  const rows = [
    [s.date, s.dateValue],
    [s.checked, s.checkedValue],
    [s.media, s.mediaValue],
    [s.observations, s.observationsValue],
    [s.next, s.nextValue],
    [s.cost, s.costValue],
  ];
  return (
    <section id="transparency" className={section}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow">{t.transparency.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.transparency.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.transparency.lead}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.transparency.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/85">
                <Camera className="size-4 shrink-0 text-turquoise" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
          <img
            src={poolImg}
            alt={t.transparency.imageAlt}
            loading="lazy"
            width={1200}
            height={912}
            className="mt-10 hidden aspect-16/10 w-full rounded-3xl object-cover lg:block"
          />
        </div>

        <figure className="surface overflow-hidden">
          <figcaption className="flex items-center gap-2 border-b border-border bg-secondary/70 px-6 py-3 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-terracotta" aria-hidden />
            {t.transparency.sampleLabel}
          </figcaption>
          <div className="p-6 sm:p-8">
            <h3 className="text-xl">{s.title}</h3>
            <dl className="mt-5 divide-y divide-border">
              {rows.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-primary">{k}</dt>
                  <dd className="text-sm leading-relaxed text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </figure>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how" className="bg-primary text-primary-foreground">
      <div className={section}>
        <p className="eyebrow text-primary-foreground/70">{t.how.eyebrow}</p>
        <h2 className="mt-3 text-3xl text-primary-foreground sm:text-4xl">{t.how.title}</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li key={step.title} className="glass-dark rounded-2xl p-7">
              <span className="font-display text-3xl text-primary-foreground/60">0{i + 1}</span>
              <h3 className="mt-3 text-lg text-primary-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceArea() {
  const { t } = useLang();
  return (
    <section id="area" className={section}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">{t.area.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.area.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.area.lead}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {t.area.places.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary"
              >
                <MapPin className="size-4 text-turquoise" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">{t.area.ask}</p>
        </div>
        <img
          src={coastImg}
          alt={t.area.imageAlt}
          loading="lazy"
          width={1408}
          height={912}
          className="aspect-3/2 w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

/** Hidden until verified reviews exist — flip site.showTestimonials to true. */
export function Testimonials() {
  const { t } = useLang();
  if (!site.showTestimonials) return null;
  return (
    <section id="testimonials" className={`${section} border-t border-border`}>
      <p className="eyebrow">{t.testimonials.eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl">{t.testimonials.title}</h2>
      <p className="mt-3 text-sm text-muted-foreground">{t.testimonials.note}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {t.testimonials.placeholders.map((p) => (
          <blockquote key={p} className="surface p-7 text-sm text-muted-foreground">
            {p}
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary/50">
      <div className={`${section} max-w-3xl`}>
        <p className="eyebrow">{t.faq.eyebrow}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{t.faq.title}</h2>
        <ul className="mt-10 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="surface overflow-hidden">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-primary"
                  >
                    {item.q}
                    {isOpen ? (
                      <Minus className="size-4 shrink-0 text-turquoise" aria-hidden />
                    ) : (
                      <Plus className="size-4 shrink-0 text-turquoise" aria-hidden />
                    )}
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="px-6 pb-5 text-sm leading-relaxed text-foreground/85">
                    {item.a}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const channels = [
    { icon: MessageCircle, label: t.contact.whatsapp, value: site.whatsapp, href: waHref },
    { icon: Phone, label: t.contact.phone, value: site.phone, href: phoneHref },
    { icon: Mail, label: t.contact.email, value: site.email, href: mailHref },
  ];
  return (
    <section id="contact" className={section}>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.contact.lead}</p>

          <ul className="mt-8 space-y-3">
            {channels.map((c) => {
              const content = (
                <>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary">{c.label}</span>
                    <span className="block text-sm text-muted-foreground">
                      {c.value || t.contact.placeholderValue}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="surface lift flex min-h-16 items-center gap-4 p-4">
                      {content}
                    </a>
                  ) : (
                    <div className="surface flex min-h-16 items-center gap-4 border-dashed p-4">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-primary">{site.brand}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {site.brandSuffix[lang]}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <nav aria-label={t.footer.nav}>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:text-right">
              <li>
                <a href="#services" className="hover:text-primary">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-primary">
                  {t.nav.how}
                </a>
              </li>
              <li>
                <a href="#area" className="hover:text-primary">
                  {t.nav.area}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          {t.footer.disclaimer}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  const { t } = useLang();
  if (!phoneHref && !waHref) return null;
  return (
    <div className="glass fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-2xl p-2 sm:hidden">
      {phoneHref && (
        <a
          href={phoneHref}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
        >
          <Phone className="size-4" aria-hidden />
          {t.mobileBar.call}
        </a>
      )}
      {waHref && (
        <a
          href={waHref}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-card text-sm font-semibold text-primary"
        >
          <MessageCircle className="size-4" aria-hidden />
          {t.mobileBar.write}
        </a>
      )}
    </div>
  );
}
