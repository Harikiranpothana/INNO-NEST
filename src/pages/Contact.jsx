import { useRef, useState } from 'react';
import { ArrowLeft, CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, Phone, Send, Linkedin } from 'lucide-react';
import { Link } from '../lib/router.jsx';
import { CONTACT } from '../config.js';
import { isSupabaseConfigured, supabase } from '../lib/supabase.js';
import { INQUIRY_TYPES } from '../content.js';
import Icon from '../components/Icon.jsx';
import Footer from '../components/Footer.jsx';
import { Container } from '../components/Section.jsx';
import logo from '../assets/inno-nest-logo.png';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { name: '', email: '', organization: '', inquiryType: 'Purchase', message: '', website: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  else if (v.name.trim().length > 120) e.name = 'Keep your name under 120 characters.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email address, like name@example.com.';
  else if (v.email.trim().length > 254) e.email = 'Email address is too long.';
  if (v.organization.trim().length > 160) e.organization = 'Keep the organization name under 160 characters.';
  if (!['Purchase', 'Collaboration', 'Partnership', 'General Inquiry'].includes(v.inquiryType)) e.inquiryType = 'Choose a valid inquiry type.';
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters so we know how to help.';
  else if (v.message.trim().length > 5000) e.message = 'Keep your message under 5,000 characters.';
  return e;
}

const field =
  'w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/30 transition-colors focus:border-white/60 focus:outline-none';

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-white/90">
        {label} {optional && <span className="text-white/40">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-2 text-sm text-rose-300">
          <CircleAlert size={16} aria-hidden="true" className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// A value that hasn't been supplied yet is shown as a clearly marked placeholder, never invented.
function Detail({ icon: I, label, value, href, hint }) {
  return (
    <li className="flex gap-4 py-4">
      <I size={20} className="mt-0.5 shrink-0 text-aqua" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-xs text-white/40">{label}</p>
        {value ? (
          href ? (
            <a href={href} className="break-words text-base text-white underline-offset-4 hover:underline">
              {value}
            </a>
          ) : (
            <p className="text-base text-white">{value}</p>
          )
        ) : (
          <p className="mt-1 inline-block rounded border border-dashed border-amber-300/50 px-2 py-0.5 text-sm text-amber-200">
            Placeholder: {hint}
          </p>
        )}
      </div>
    </li>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverError, setServerError] = useState('');
  const formRef = useRef(null);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    const found = validate(values);
    setErrors(found);
    setServerError('');
    const firstBad = Object.keys(found)[0];
    if (firstBad) {
      formRef.current?.querySelector(`[name="${firstBad}"]`)?.focus();
      return;
    }
    if (values.website) {
      // Honeypot filled in: pretend success, send nothing.
      setStatus('success');
      return;
    }
    if (!isSupabaseConfigured || !supabase) {
      setStatus('error');
      setServerError(
        'The contact form is not connected yet. Please configure the Supabase project URL and publishable key, then try again.'
      );
      return;
    }
    setStatus('sending');
    try {
      const { error } = await supabase.from('inquiries').insert({
        full_name: values.name.trim(),
        email: values.email.trim(),
        organization: values.organization.trim() || null,
        inquiry_type: values.inquiryType,
        message: values.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setValues(EMPTY);
    } catch (error) {
      console.error('Supabase inquiry submission failed:', error);
      setStatus('error');
      setServerError(
        'We could not save your inquiry. Please check your connection and try again. If the issue continues, contact INNO-NEST directly.'
      );
    }
  }

  return (
    <div className="min-h-screen bg-black font-geist">
      <main className="pb-24 pt-[calc(80px+2.5rem)] md:pt-[calc(80px+4rem)]">
        <Container>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white animate-[fadeSlideUp_0.8s_ease_0.1s_both]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>

          <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Left: who and how */}
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs text-white/90 animate-[fadeSlideUp_0.8s_ease_0.2s_both] sm:mb-6 sm:text-sm">
                AREATOR: Aquaculture Pond Health Monitoring System
              </p>
              <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-white animate-[fadeSlideUp_0.8s_ease_0.3s_both] sm:text-5xl md:text-6xl">
                Contact <span className="whitespace-nowrap">INNO-NEST</span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 animate-[fadeSlideUp_0.8s_ease_0.45s_both] sm:text-base md:text-lg">
                Tell us about your farm or your idea. Purchase requests are handled as inquiries, because there is no
                online checkout yet.
              </p>

              <div className="mt-10 animate-[fadeSlideUp_0.8s_ease_0.6s_both]">
                <img
                  src={logo}
                  alt="INNO-NEST official logo"
                  width="112"
                  height="108"
                  className="h-28 w-auto rounded-2xl ring-1 ring-white/20"
                />
                <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                  <Detail
                    icon={Mail}
                    label="Email"
                    value={CONTACT.email}
                    href={CONTACT.email && `mailto:${CONTACT.email}`}
                    hint="add the business email in src/config.js"
                  />
                  <Detail
                    icon={Phone}
                    label="Phone"
                    value={CONTACT.phone}
                    href={CONTACT.phone && `tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`}
                    hint="add the business phone number in src/config.js"
                  />
                  <Detail
                    icon={MapPin}
                    label="Location"
                    value={CONTACT.location}
                    hint="add the business address in src/config.js"
                  />
                  {CONTACT.linkedin && (
                    <Detail icon={Linkedin} label="LinkedIn" value="INNO-NEST on LinkedIn" href={CONTACT.linkedin} />
                  )}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7 animate-[fadeSlideUp_0.8s_ease_0.5s_both]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
                {status === 'success' ? (
                  <div role="status" className="py-8 text-center">
                    <CircleCheck size={40} className="mx-auto text-leaf" aria-hidden="true" />
                    <h2 className="mt-5 text-2xl font-medium tracking-tight text-white">Inquiry received</h2>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
                      Thank you for contacting INNO-NEST. Your inquiry has been saved, and our team can review it.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:border-white/60"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
                    <fieldset>
                      <legend className="mb-3 text-sm text-white/90">What is your inquiry about?</legend>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {INQUIRY_TYPES.map((t) => {
                          const on = values.inquiryType === t.value;
                          return (
                            <label
                              key={t.value}
                              className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-white ${
                                on ? 'border-aqua bg-aqua/10' : 'border-white/15 hover:border-white/40'
                              }`}
                            >
                              <input
                                type="radio"
                                name="inquiryType"
                                value={t.value}
                                checked={on}
                                onChange={set('inquiryType')}
                                className="sr-only"
                              />
                              <Icon name={t.icon} size={20} className={`mt-0.5 shrink-0 ${on ? 'text-aqua' : 'text-white/50'}`} />
                              <span>
                                <span className="block text-sm font-medium text-white">{t.value}</span>
                                <span className="mt-0.5 block text-xs leading-snug text-white/60">{t.text}</span>
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="name" label="Full name" error={errors.name}>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          maxLength={120}
                          autoComplete="name"
                          value={values.name}
                          onChange={set('name')}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`${field} ${errors.name ? 'border-rose-400/70' : 'border-white/15'}`}
                        />
                      </Field>
                      <Field id="email" label="Email address" error={errors.email}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          maxLength={254}
                          autoComplete="email"
                          value={values.email}
                          onChange={set('email')}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`${field} ${errors.email ? 'border-rose-400/70' : 'border-white/15'}`}
                        />
                      </Field>
                    </div>

                    <Field id="organization" label="Organization or farm name" optional>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        maxLength={160}
                        autoComplete="organization"
                        value={values.organization}
                        onChange={set('organization')}
                        className={`${field} border-white/15`}
                      />
                    </Field>

                    <Field id="message" label="Message" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        maxLength={5000}
                        value={values.message}
                        onChange={set('message')}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="Tell us about your pond, farm size, or what you'd like to explore together."
                        className={`${field} resize-y ${errors.message ? 'border-rose-400/70' : 'border-white/15'}`}
                      />
                    </Field>

                    {/* Honeypot: hidden from people, tempting to bots */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label>
                        Leave this field empty
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
                      </label>
                    </div>

                    {status === 'error' && serverError && (
                      <p role="alert" className="flex gap-3 rounded-lg border border-rose-400/40 bg-rose-400/10 p-4 text-sm text-rose-200">
                        <CircleAlert size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                        {serverError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105 disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {status === 'sending' ? (
                        <>
                          <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send inquiry
                          <Send size={16} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
