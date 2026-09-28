/**
 * Editable site configuration.
 * Replace the placeholder contact details before launch.
 */
export const site = {
  brand: "Gerard",
  brandSuffix: {
    es: "Cuidado de Propiedades & Asistencia Local",
    en: "Property Care & Local Assistance",
    de: "Immobilienbetreuung & Alltagshilfe",
  },
  // TODO: replace with real details. Empty string = shown as placeholder.
  phone: "", // e.g. "+34 600 000 000"
  whatsapp: "", // digits only, e.g. "34600000000"
  email: "", // e.g. "hola@ejemplo.com"
  base: "Dénia, Alicante",
  // Flip to true once verified reviews exist.
  showTestimonials: false,
  // Portrait of Gerard — add the real photo and set this path.
  portrait: "" as string,
} as const;

export const phoneHref = site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : undefined;
export const waHref = site.whatsapp ? `https://wa.me/${site.whatsapp}` : undefined;
export const mailHref = site.email ? `mailto:${site.email}` : undefined;
