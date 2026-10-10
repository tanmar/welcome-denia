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
  phone: "+34 634 463 620",
  whatsapp: "34634463620", // digits only
  email: "welcomedenia@hotmail.com",
  // Formspree form ID (the part after /f/ in the form endpoint). Empty = form not sent.
  formspreeId: "", // e.g. "xyzabcde"
  base: "Dénia, Alicante",
  // Flip to true once verified reviews exist.
  showTestimonials: false,
  // Optional team photo path.
  portrait: "" as string,
} as const;

const phone: string = site.phone;
const whatsapp: string = site.whatsapp;
const email: string = site.email;
const formspreeId: string = site.formspreeId;

export const phoneHref = phone ? `tel:${phone.replace(/\s/g, "")}` : undefined;
export const waHref = whatsapp ? `https://wa.me/${whatsapp}` : undefined;
export const mailHref = email ? `mailto:${email}` : undefined;
export const formEndpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined;
