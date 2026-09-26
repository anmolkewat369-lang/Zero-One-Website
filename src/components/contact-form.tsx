"use client";

import { ArrowRight, CheckCircle2, LoaderCircle, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { getPhoneHref, getWhatsAppUrl } from "@/lib/contact-utils.mjs";

const whatsappUrl = getWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
const phoneHref = getPhoneHref(process.env.NEXT_PUBLIC_PHONE_NUMBER || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);

type SubmissionState = { kind: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(data.entries())), headers: { "Content-Type": "application/json" } });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "We couldn’t send your message. Please use one of the direct contact options below.");
      form.reset();
      setStatus({ kind: "success", message: "Thanks — your message is on its way. We’ll be in touch soon." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "We couldn’t send your message. Please use one of the direct contact options below." });
    }
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Name"/></label>
        <label>Business name<input name="business" autoComplete="organization" required maxLength={120} placeholder="Your business"/></label>
      </div>
      <div className="form-row">
        <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"/></label>
        <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" required maxLength={32} placeholder="+91"/></label>
      </div>
      <label>What do you need?<select name="need" defaultValue="" required><option value="" disabled>Select a service</option><option>Business website</option><option>Landing page</option><option>Website redesign</option><option>Something else</option></select></label>
      <label>A little about your project<textarea name="message" rows={3} maxLength={2000} placeholder="What would you like your website to help with?"/></label>
      <label className="honeypot" aria-hidden="true" tabIndex={-1}>Leave this empty<input name="website" tabIndex={-1} autoComplete="off"/></label>
      <button className="button button-primary form-submit" type="submit" disabled={status.kind === "sending"}>{status.kind === "sending" ? <>Sending <LoaderCircle size={16} className="spin-icon"/></> : <>Send project inquiry <ArrowRight size={16}/></>}</button>
      <div className="form-feedback" aria-live="polite" role={status.kind === "error" ? "alert" : "status"}>{status.message && <><span className={status.kind === "success" ? "feedback-success" : "feedback-error"}>{status.kind === "success" ? <CheckCircle2 size={16}/> : null}{status.message}</span></>}</div>
      <p className="form-privacy">We use your details to respond to this enquiry. See our <Link href="/privacy">privacy notice</Link>.</p>
      {(whatsappUrl || phoneHref) && <div className="form-contact-options" aria-label="Other ways to contact Zero One">
        {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer"><Send size={14}/> WhatsApp</a>}
        {phoneHref && <a href={phoneHref}><Phone size={14}/> Call us</a>}
      </div>}
    </form>
  );
}
