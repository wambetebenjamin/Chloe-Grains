"use client";

import { useEffect, useState } from "react";

/**
 * The template's scroll-top button: hidden until 100px of scroll, then
 * visible bottom right. Uses Lenis when active for a smooth ride.
 */
export default function ScrollTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 100);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <a
      href="#top"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center${active ? " active" : ""}`}
      onClick={handleClick}
      aria-label="Scroll back to top"
    >
      <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
    </a>
  );
}
