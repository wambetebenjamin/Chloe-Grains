"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data/site";
import { voiceTourScripts } from "@/lib/data/voices";
import { useI18n } from "./I18nProvider";

type VoiceStatus = "idle" | "ready" | "playing" | "paused" | "unsupported";

function scriptFor(pathname: string): string[] {
  const segments = pathname.split("/").filter(Boolean);
  const key = segments[0] ?? "home";
  return voiceTourScripts[key] ?? voiceTourScripts.fallback;
}

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const exact = voices.find((v) => v.lang.toLowerCase() === site.voice.lang.toLowerCase());
  if (exact) return exact;
  const kenyan = voices.find((v) => v.lang.toLowerCase().startsWith("en-ke"));
  if (kenyan) return kenyan;
  const english =
    voices.find((v) => v.lang.toLowerCase().startsWith("en-gb")) ??
    voices.find((v) => v.lang.toLowerCase().startsWith("en"));
  return english ?? voices[0] ?? null;
}

/**
 * Floating voice tour. Reads a warm narration of the current page using the
 * browser speech synthesis API with the brand voice settings:
 * lang en-KE, rate 0.95, pitch 1.1.
 */
export default function VoiceTour() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<VoiceStatus>("idle");
  const [supported, setSupported] = useState(true);
  const queueRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  const cancelledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      setStatus("unsupported");
      return;
    }
    setStatus("ready");
  }, []);

  // Stop any narration when the route changes.
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        cancelledRef.current = true;
        window.speechSynthesis.cancel();
      }
    };
  }, [pathname]);

  const speakFrom = (index: number) => {
    if (cancelledRef.current) return;
    if (index >= queueRef.current.length) {
      setStatus("ready");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(queueRef.current[index]);
    utterance.lang = site.voice.lang;
    utterance.rate = site.voice.rate;
    utterance.pitch = site.voice.pitch;
    const voices = window.speechSynthesis.getVoices();
    const voice = pickVoice(voices);
    if (voice) utterance.voice = voice;
    utterance.onend = () => {
      if (!cancelledRef.current) {
        indexRef.current = index + 1;
        speakFrom(index + 1);
      }
    };
    utterance.onerror = () => {
      if (!cancelledRef.current) setStatus("ready");
    };
    window.speechSynthesis.speak(utterance);
  };

  const play = () => {
    if (!supported) return;
    cancelledRef.current = false;
    queueRef.current = scriptFor(pathname);
    indexRef.current = 0;
    window.speechSynthesis.cancel();
    setStatus("playing");
    speakFrom(0);
  };

  const pauseOrResume = () => {
    if (!supported) return;
    if (status === "playing") {
      window.speechSynthesis.pause();
      setStatus("paused");
    } else if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
    }
  };

  const stop = () => {
    if (!supported) return;
    cancelledRef.current = true;
    window.speechSynthesis.cancel();
    setStatus("ready");
  };

  const statusText =
    status === "playing"
      ? t("voice.statusPlaying")
      : status === "paused"
        ? t("voice.statusPaused")
        : status === "unsupported"
          ? t("voice.statusUnsupported")
          : t("voice.statusReady");

  return (
    <>
      <button
        type="button"
        className="cg-float-btn cg-voice-btn"
        aria-pressed={open}
        aria-label={t("voice.tourTitle")}
        title={t("voice.tourTitle")}
        onClick={() => {
          setOpen((v) => {
            if (v) stop();
            return !v;
          });
        }}
      >
        <i className={`bi ${open ? "bi-x-lg" : "bi-soundwave"}`} aria-hidden="true"></i>
      </button>
      {open && (
        <div className="cg-voice-panel" role="dialog" aria-label={t("voice.tourTitle")}>
          <h2>{t("voice.tourTitle")}</h2>
          <p>{t("voice.tourIntro")}</p>
          <p className="cg-voice-status" aria-live="polite">
            {statusText}
          </p>
          <div className="cg-voice-controls">
            <button
              type="button"
              className="cg-voice-primary"
              onClick={play}
              disabled={!supported}
            >
              <i className="bi bi-play-fill" aria-hidden="true"></i>
              {t("cta.play")}
            </button>
            <button type="button" onClick={pauseOrResume} disabled={!supported || (status !== "playing" && status !== "paused")}>
              <i className="bi bi-pause-fill" aria-hidden="true"></i>
              {t("cta.pause")}
            </button>
            <button type="button" onClick={stop} disabled={!supported}>
              <i className="bi bi-stop-fill" aria-hidden="true"></i>
              {t("cta.stop")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
