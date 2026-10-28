"use client";

import { useEffect, useRef, useState } from "react";
import {
  getRecaptchaConfig,
  getRecaptchaV3Token,
  getRecaptchaV2Token,
  mountRecaptchaV2,
  resetRecaptchaV2,
} from "@/lib/captcha";

const captchaConfig = getRecaptchaConfig();

/**
 * The template's contact form furniture (php-email-form with loading,
 * error-message and sent-message blocks) wired to /api/contact, with
 * reCAPTCHA v3 (invisible) or v2 (checkbox) when configured.
 */
export default function ContactForm() {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const errorRef = useRef<HTMLDivElement | null>(null);
  const sentRef = useRef<HTMLDivElement | null>(null);
  const v2BoxRef = useRef<HTMLDivElement | null>(null);
  const [v2Widget, setV2Widget] = useState<number | null>(null);

  useEffect(() => {
    if (captchaConfig?.version === "2" && v2BoxRef.current) {
      let cancelled = false;
      mountRecaptchaV2(v2BoxRef.current).then((widget) => {
        if (!cancelled) setV2Widget(widget);
      });
      return () => {
        cancelled = true;
      };
    }
  }, []);

  const show = (ref: React.RefObject<HTMLDivElement | null>, on: boolean) => {
    if (ref.current) ref.current.style.display = on ? "block" : "none";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    show(loadingRef, true);
    show(errorRef, false);
    show(sentRef, false);

    try {
      let token: string | null = null;
      if (captchaConfig?.version === "3") {
        token = await getRecaptchaV3Token("contact");
      } else if (captchaConfig?.version === "2") {
        token = getRecaptchaV2Token(v2Widget);
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, recaptcha_token: token }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string; reason?: string };
      show(loadingRef, false);
      if (res.ok && data.ok) {
        show(sentRef, true);
        form.reset();
        resetRecaptchaV2(v2Widget);
      } else {
        if (errorRef.current) {
          errorRef.current.textContent =
            data.reason === "rate-limited"
              ? "Too many attempts. Please try again in a few minutes."
              : "Please complete every field with a valid email and try again.";
        }
        show(errorRef, true);
        resetRecaptchaV2(v2Widget);
      }
    } catch {
      show(loadingRef, false);
      if (errorRef.current) errorRef.current.textContent = "Network error. Please try again.";
      show(errorRef, true);
      resetRecaptchaV2(v2Widget);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="php-email-form cg-form" noValidate>
      <input type="text" name="company_website" className="cg-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="row gy-3">
        <div className="col-md-6">
          <label htmlFor="contact-name">Your name</label>
          <input type="text" name="name" id="contact-name" className="form-control" required maxLength={120} autoComplete="name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="contact-email">Your email</label>
          <input type="email" name="email" id="contact-email" className="form-control" required maxLength={160} autoComplete="email" />
        </div>
        <div className="col-12">
          <label htmlFor="contact-subject">Subject</label>
          <input type="text" name="subject" id="contact-subject" className="form-control" required maxLength={180} />
        </div>
        <div className="col-12">
          <label htmlFor="contact-message">Message</label>
          <textarea name="message" id="contact-message" className="form-control" rows={8} required maxLength={4000} style={{ height: 220 }}></textarea>
          <p className="cg-form-help">
            Recipe questions, corrections, producer information and partnership ideas all land in
            the same human inbox.
          </p>
        </div>
        {captchaConfig?.version === "2" && (
          <div className="col-12">
            <div className="cg-recaptcha-box" ref={v2BoxRef}></div>
          </div>
        )}
        <div className="col-12">
          <div className="loading" ref={loadingRef}>
            Loading
          </div>
          <div className="error-message" ref={errorRef}></div>
          <div className="sent-message" ref={sentRef}>
            Your message has been sent. Asante, we will reply soon!
          </div>
          <button type="submit">Send Message</button>
          {captchaConfig?.version === "3" && (
            <p className="cg-recaptcha-note">
              This site is protected by reCAPTCHA and the Google privacy policy and terms of service
              apply.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
