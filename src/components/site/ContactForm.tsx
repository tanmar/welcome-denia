import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useLang } from "@/content/lang";
import { formEndpoint } from "@/content/site";

type Errors = Partial<Record<"name" | "contact" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const field =
  "min-h-11 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,}$/;

export function ContactForm() {
  const { t } = useLang();
  const f = t.contact.form;
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = f.required;
    if (!contact) next.contact = f.required;
    else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) next.contact = f.invalidContact;
    if (!message) next.message = f.required;

    setErrors(next);
    if (Object.keys(next).length > 0) return setStatus("idle");
    // No form backend configured — never simulate a successful send.
    if (!formEndpoint) return setStatus("unconfigured");

    data.set("_subject", `${f.subject}: ${name}`);
    if (EMAIL_RE.test(contact)) data.set("_replyto", contact);

    setStatus("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Contact form submission failed", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface p-6 sm:p-8">
      <h3 className="text-xl">{f.title}</h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label={f.name} error={errors.name}>
          <input id="name" name="name" autoComplete="name" className={field} required />
        </Field>

        <Field id="contact-info" label={f.contact} error={errors.contact}>
          <input id="contact-info" name="contact" autoComplete="email" className={field} required />
        </Field>

        <Field id="location" label={`${f.location} (${f.optional})`}>
          <input id="location" name="location" className={field} />
        </Field>

        <Field id="help" label={`${f.help} (${f.optional})`}>
          <select id="help" name="help" className={field} defaultValue="">
            <option value="" />
            {f.helpOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field id="lang" label={`${f.language} (${f.optional})`}>
          <select id="lang" name="lang" className={field} defaultValue={f.languageOptions[0]}>
            {f.languageOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field id="message" label={f.message} error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`${field} min-h-32`}
              required
            />
          </Field>
        </div>
      </div>

      {/* Honeypot: Formspree drops submissions where this is filled in. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>

      <StatusNotice status={status} f={f} />
    </form>
  );
}

function StatusNotice({
  status,
  f,
}: {
  status: Status;
  f: { sent: string; sendError: string; notConfigured: string };
}) {
  if (status === "idle" || status === "sending") return null;
  const isSent = status === "sent";
  const text = isSent ? f.sent : status === "error" ? f.sendError : f.notConfigured;
  const Icon = isSent ? CheckCircle2 : AlertCircle;

  return (
    <p
      role="status"
      className="mt-4 flex items-start gap-2 rounded-xl border border-border bg-secondary/70 p-4 text-sm text-foreground"
    >
      <Icon
        className={`mt-0.5 size-4 shrink-0 ${isSent ? "text-accent" : "text-terracotta"}`}
        aria-hidden
      />
      {text}
    </p>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
