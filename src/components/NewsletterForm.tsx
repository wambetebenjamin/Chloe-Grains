"use client";

import { useRef, useState } from "react";
import { getRecaptchaConfig, getRecaptchaV3Token } from "@/lib/captcha";

/**
 * The template's newsletter form (call-to-action section) with the same
 * loading / error / sent message furniture, wired to /api/newsletter.
 */
export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const errorRef = useRef<HTMLDivElement | null>(null);
  const sentRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState("");

  const show = (ref: React.RefObject<HTMLDivElement | null>, on: boolean) => {
    if (ref.current) ref.current.style.display = on ? "block" : "none";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    show(loadingRef, true);
    show(errorRef, false);
    show(sentRef, false);
    try {
      const recaptcha_token = getRecaptchaConfig()?.version === "3" ? await getRecaptchaV3Token("newsletter") : null;
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, recaptcha_token }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string; reason?: string };
      show(loadingRef, false);
      if (res.ok && data.ok) {
        show(sentRef, true);
        setEmail("");
        formRef.current?.reset();
      } else {
        if (errorRef.current) {
          errorRef.current.textContent =
            data.reason === "rate-limited"
              ? "Too many attempts. Please try again in a few minutes."
              : "Please check the email address and try again.";
        }
        show(errorRef, true);
      }
    } catch {
      show(loadingRef, false);
      if (errorRef.current) errorRef.current.textContent = "Network error. Please try again.";
      show(errorRef, true);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form-subscribe php-email-form" noValidate>
      <input type="text" name="company_website" className="cg-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label htmlFor="newsletter-email" className="visually-hidden">
        Email address
      </label>
      <div className="form-group d-flex align-items-stretch">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          className="form-control h-100"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input type="submit" className="btn btn-secondary px-4" value="Subscribe" />
      </div>
      <div className="loading" ref={loadingRef}>
        Loading
      </div>
      <div className="error-message" ref={errorRef}></div>
      <div className="sent-message" ref={sentRef}>
        Your subscription request has been sent. Thank you!
      </div>
    </form>
  );
}
