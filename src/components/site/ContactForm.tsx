import { useState, type FormEvent } from "react";
import { AlertCircle } from "lucide-react";
import { useLang } from "@/content/lang";

type Errors = Partial<Record<"name" | "contact" | "message", string>>;

const field =
  "min-h-11 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent";

export function ContactForm() {
  const { t } = useLang();
  const f = t.contact.form;
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = f.required;
    if (!contact) next.contact = f.required;
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(contact) && !/^[+\d][\d\s()-]{6,}$/.test(contact))
      next.contact = f.invalidContact;
    if (!message) next.message = f.required;

    setErrors(next);
    // No form backend is configured — never simulate a successful send.
    setNotice(Object.keys(next).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface p-6 sm:p-8">
      <h3 className="text-xl">{f.title}</h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label={f.name} error={errors.name}>
          <input id="name" name="name" autoComplete="name" className={field} required />
        </Field>

        <Field id="contact" label={f.contact} error={errors.contact}>
          <input id="contact" name="contact" autoComplete="email" className={field} required />
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
            <textarea id="message" name="message" rows={5} className={`${field} min-h-32`} required />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        {f.submit}
      </button>

      {notice && (
        <p
          role="status"
          className="mt-4 flex items-start gap-2 rounded-xl border border-border bg-secondary/70 p-4 text-sm text-foreground"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden />
          {f.notConfigured}
        </p>
      )}
    </form>
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
