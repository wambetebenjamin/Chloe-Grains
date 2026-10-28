"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type AOSModule from "aos";
import type GLightboxModule from "glightbox";
import type LenisModule from "lenis";

type GLightboxInstance = ReturnType<typeof GLightboxModule>;

interface MotionLibs {
  AOS: typeof AOSModule;
  Lenis: typeof LenisModule;
  GLightbox: typeof GLightboxModule;
}

/**
 * Ports the template's motion layer (assets/js/main.js) to the app:
 * AOS init with the exact template options, GLightbox on .glightbox
 * elements, the .scrolled body class helper and Lenis smooth scrolling.
 * Everything respects prefers-reduced-motion. The vendor bundles touch
 * `window` at import time, so they are loaded dynamically inside effects
 * and never during server rendering.
 */
export default function TemplateMotion() {
  const pathname = usePathname();
  const libsRef = useRef<MotionLibs | null>(null);
  const lightboxRef = useRef<GLightboxInstance | null>(null);

  useEffect(() => {
    let cancelled = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: LenisModule | null = null;
    let rafId = 0;

    const toggleScrolled = () => {
      const header = document.querySelector("#header");
      if (
        !header ||
        (!header.classList.contains("scroll-up-sticky") &&
          !header.classList.contains("sticky-top") &&
          !header.classList.contains("fixed-top"))
      ) {
        return;
      }
      if (window.scrollY > 100) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    (async () => {
      const [aosModule, lenisModule, glightboxModule] = await Promise.all([
        import("aos"),
        import("lenis"),
        import("glightbox"),
      ]);
      if (cancelled) return;
      const libs: MotionLibs = {
        AOS: aosModule.default,
        Lenis: lenisModule.default,
        GLightbox: glightboxModule.default,
      };
      libsRef.current = libs;

      // AOS: exact options from the template's main.js
      libs.AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        disable: reduceMotion,
      });

      // GLightbox: same selector contract as the template
      lightboxRef.current = libs.GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
      });

      // Lenis smooth scroll
      if (!reduceMotion) {
        lenis = new libs.Lenis({
          duration: 1.1,
          smoothWheel: true,
        });
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        // Expose for the scroll-top button and in-page anchors.
        (window as unknown as { __lenis: LenisModule }).__lenis = lenis;
      }

      // .scrolled body class (template behavior for sticky headers)
      document.addEventListener("scroll", toggleScrolled, { passive: true });
      toggleScrolled();
    })();

    return () => {
      cancelled = true;
      document.removeEventListener("scroll", toggleScrolled);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lightboxRef.current?.destroy();
      lightboxRef.current = null;
      libsRef.current = null;
    };
  }, []);

  // Refresh animations and rebind lightbox targets after client side
  // navigation, so gallery links mounted by new routes still open.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const libs = libsRef.current;
      if (!libs) return;
      libs.AOS.refreshHard();
      lightboxRef.current?.destroy();
      lightboxRef.current = libs.GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
      });
    }, 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
