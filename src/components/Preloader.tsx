"use client";

import { useEffect, useState } from "react";

/**
 * The template's #preloader: a full screen overlay with the accent colored
 * spinner that fades out once the window has loaded. Rendered on the server
 * so first paint is covered, then removed exactly like main.js did.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const finish = () => {
      setDone(true);
      window.setTimeout(() => setRemoved(true), 650);
    };
    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      // Safety net so the overlay can never trap a visitor.
      const t = window.setTimeout(finish, 3500);
      return () => {
        window.removeEventListener("load", finish);
        window.clearTimeout(t);
      };
    }
  }, []);

  if (removed) return null;

  return <div id="preloader" className={done ? "cg-preloader-done" : undefined} aria-hidden="true" />;
}
