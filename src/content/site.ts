/**
 * Editable site configuration.
 * Replace the placeholder contact details before launch.
 */
export const site = {
  brand: "WelcomeDenia",
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
  // Optional team photo path.
  portrait: "" as string,
} as const;

const phone: string = site.phone;
const whatsapp: string = site.whatsapp;
const email: string = site.email;

export const phoneHref = phone ? `tel:${phone.replace(/\s/g, "")}` : undefined;
export const waHref = whatsapp ? `https://wa.me/${whatsapp}` : undefined;
export const mailHref = email ? `mailto:${email}` : undefined;
