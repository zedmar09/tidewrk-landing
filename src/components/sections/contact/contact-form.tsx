"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { serviceOptions } from "@/constants/contact";

type FormState = {
  name: string;
  companyName: string;
  email: string;
  contactNumber: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  name: "",
  companyName: "",
  email: "",
  contactNumber: "",
  service: "",
  message: "",
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form: FormState) {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.service) {
    errors.service = "Please select a service.";
  }

  if (!form.message.trim()) {
    errors.message = "Tell us how we can help.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toastVisible, setToastVisible] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setToastVisible(false);
      return;
    }

    setForm(initialFormState);
    setToastVisible(true);
  }

  return (
    <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_34px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7 lg:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent"
      />

      <div className="mb-7">
        <p className="tidewrk-glow-badge inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em]">
          Lead capture
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Get in touch with us
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/58">
          Share a few details and we’ll follow up within 1 business day.
        </p>
      </div>

      {toastVisible && (
        <div
          className="mb-5 flex gap-3 rounded-[1rem] border border-[#003f72]/50 bg-[#003f72]/20 p-4 text-sm leading-6 text-white"
          role="status"
        >
          <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p>
            Thanks. We received your details and will get back to you within 1
            business day.
          </p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            error={errors.name}
            label="Name"
            name="name"
            onChange={(value) => updateField("name", value)}
            placeholder="Your name"
            required
            value={form.name}
          />
          <FormField
            error={errors.companyName}
            label="Company Name"
            name="companyName"
            onChange={(value) => updateField("companyName", value)}
            placeholder="Company name"
            value={form.companyName}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            error={errors.email}
            label="Email"
            name="email"
            onChange={(value) => updateField("email", value)}
            placeholder="you@example.com"
            required
            type="email"
            value={form.email}
          />
          <FormField
            error={errors.contactNumber}
            label="Contact Number"
            name="contactNumber"
            onChange={(value) => updateField("contactNumber", value)}
            placeholder="Phone number"
            type="tel"
            value={form.contactNumber}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white/78" htmlFor="service">
            Service <span className="text-white/42">*</span>
          </label>
          <select
            aria-invalid={Boolean(errors.service)}
            className="h-[3.25rem] w-full rounded-[0.9rem] border border-white/10 bg-[#02050a]/72 px-4 text-base text-white outline-none transition focus:border-[#003f72]/80 focus:ring-2 focus:ring-[#003f72]/45"
            id="service"
            name="service"
            onChange={(event) => updateField("service", event.target.value)}
            value={form.service}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-2 text-sm text-red-200">{errors.service}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white/78" htmlFor="message">
            How can we help? <span className="text-white/42">*</span>
          </label>
          <textarea
            aria-invalid={Boolean(errors.message)}
            className="min-h-36 w-full resize-y rounded-[0.9rem] border border-white/10 bg-[#02050a]/72 px-4 py-3 text-base leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-[#003f72]/80 focus:ring-2 focus:ring-[#003f72]/45"
            id="message"
            name="message"
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us about your project, team need, or business challenge."
            value={form.message}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-200">{errors.message}</p>
          )}
        </div>

        <button
          className="inline-flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-[#003f72] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f9fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          type="submit"
        >
          Submit details
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

function FormField({
  error,
  label,
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value,
}: {
  error?: string;
  label: string;
  name: keyof FormState;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-white/78" htmlFor={name}>
        {label} {required && <span className="text-white/42">*</span>}
      </label>
      <input
        aria-invalid={Boolean(error)}
        className="h-[3.25rem] w-full rounded-[0.9rem] border border-white/10 bg-[#02050a]/72 px-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#003f72]/80 focus:ring-2 focus:ring-[#003f72]/45"
        id={name}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <p className="mt-2 text-sm text-red-200">{error}</p>}
    </div>
  );
}
