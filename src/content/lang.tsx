import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, LANGS, type Dict, type Lang } from "./i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "gerard.lang";

function detect(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && (LANGS as string[]).includes(stored)) return stored as Lang;
  const nav = window.navigator.language?.slice(0, 2).toLowerCase();
  if (nav === "de") return "de";
  if (nav === "en") return "en";
  return "es";
}

export function LangProvider({ children }: { children: ReactNode }) {
  // Always start at the default language so SSR and hydration agree.
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const initial = detect();
    if (initial !== "es") setLangState(initial);
  }, []);

  const t = dictionaries[lang] as unknown as Dict;

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [t]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  };

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
