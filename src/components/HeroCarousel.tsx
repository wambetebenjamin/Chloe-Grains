"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";

interface Slide {
  image: string;
  alt: string;
}

const slideImages: Slide[] = [
  {
    image: "/images/hero-1.jpg",
    alt: "African woman winnowing harvested grain in a wide green field",
  },
  {
    image: "/images/hero-2.jpg",
    alt: "Piles of grain in open sacks at a Nigerian market",
  },
  {
    image: "/images/hero-3.jpg",
    alt: "Elderly African woman cooking over firewood pots in a rural village",
  },
  {
    image: "/images/hero-4.jpg",
    alt: "Bowls of assorted grains and spices in warm market light",
  },
  {
    image: "/images/hero-5.jpg",
    alt: "Farmers holding sheaves of harvested grain in a golden field",
  },
];

/**
 * The template hero: a Bootstrap fade carousel, five slides, five second
 * interval, prev/next controls and auto-generated indicators. The fade
 * cross-transition comes from the preserved carousel-fade CSS; React drives
 * the .active class exactly as the template's bundle did.
 */
export default function HeroCarousel() {
  const { locale, t } = useI18n();
  const slides = heroSlides[locale] ?? heroSlides.en;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (index: number) => {
      setActive(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    setActive(0);
  }, [locale]);

  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) {
            go(dx < 0 ? active + 1 : active - 1);
          }
          touchX.current = null;
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Chloe Grains highlights"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`carousel-item${index === active ? " active" : ""}`}
            aria-hidden={index !== active}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slideImages[index].image} alt={slideImages[index].alt} />
            <div className="carousel-container">
              <div className="container text-center">
                <h2>{slide.title}</h2>
                <p>{slide.sub}</p>
                <div className="cg-hero-actions">
                  <Link href="/foods" className="btn-get-started">
                    {t("cta.exploreFoods")}
                  </Link>
                  <Link href="/recipes" className="btn-get-started cg-btn-outline">
                    {t("cta.browseRecipes")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          aria-label="Previous slide"
          onClick={(e) => {
            e.preventDefault();
            go(active - 1);
          }}
        >
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          aria-label="Next slide"
          onClick={(e) => {
            e.preventDefault();
            go(active + 1);
          }}
        >
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={`indicator-${slide.title}`}
              data-bs-target="#hero-carousel"
              data-bs-slide-to={index}
              className={index === active ? "active" : undefined}
              aria-current={index === active ? "true" : undefined}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => go(index)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
