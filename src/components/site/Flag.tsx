import type { ReactNode } from "react";
import type { Lang } from "@/content/i18n";

/**
 * Inline SVG flags (emoji flags don't render on Windows).
 * English uses the Union Jack: the main foreign audience here is British.
 */
const flags: Record<Lang, ReactNode> = {
  es: (
    <>
      <rect width="24" height="24" fill="#c60b1e" />
      <rect y="6" width="24" height="12" fill="#ffc400" />
    </>
  ),
  de: (
    <>
      <rect width="24" height="8" fill="#000000" />
      <rect y="8" width="24" height="8" fill="#dd0000" />
      <rect y="16" width="24" height="8" fill="#ffce00" />
    </>
  ),
  en: (
    <>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0 24 24M24 0 0 24" stroke="#ffffff" strokeWidth="5" />
      <path d="M0 0 24 24M24 0 0 24" stroke="#c8102e" strokeWidth="2" />
      <path d="M12 0v24M0 12h24" stroke="#ffffff" strokeWidth="8" />
      <path d="M12 0v24M0 12h24" stroke="#c8102e" strokeWidth="4.5" />
    </>
  ),
};

export function Flag({ lang, className }: { lang: Lang; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 rounded-full ring-1 ring-black/10 ${className ?? "size-5"}`}
    >
      <clipPath id={`flag-clip-${lang}`}>
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath={`url(#flag-clip-${lang})`}>{flags[lang]}</g>
    </svg>
  );
}
