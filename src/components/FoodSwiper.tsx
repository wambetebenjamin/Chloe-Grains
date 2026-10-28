"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type Swiper from "swiper";
import type { Food } from "@/lib/data/foods";

/**
 * The template's services-2 swiper, reused as the featured foods carousel.
 * The configuration object is identical to the swiper-config JSON shipped
 * in the template's index.html, and the CSS hover reveal (category, title,
 * image zoom) is the preserved template motion.
 */
const swiperConfig = {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: "auto" as const,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets" as const,
    clickable: true,
  },
  navigation: {
    nextEl: ".js-custom-next",
    prevEl: ".js-custom-prev",
  },
  breakpoints: {
    "320": {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    "1200": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};

export default function FoodSwiper({ foods }: { foods: Food[] }) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const configRef = useRef(JSON.stringify(swiperConfig));

  useEffect(() => {
    if (!elRef.current) return;
    let cancelled = false;
    let swiper: Swiper | null = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const config = JSON.parse(configRef.current) as typeof swiperConfig;

    // Swiper touches browser globals at import time; load it client side only.
    (async () => {
      const [swiperModule, modulesModule] = await Promise.all([
        import("swiper"),
        import("swiper/modules"),
      ]);
      if (cancelled || !elRef.current) return;
      swiper = new swiperModule.default(elRef.current, {
        modules: [modulesModule.Autoplay, modulesModule.Navigation, modulesModule.Pagination],
        ...config,
        autoplay: reduceMotion ? false : config.autoplay,
        loop: reduceMotion ? false : config.loop,
      });
    })();

    return () => {
      cancelled = true;
      swiper?.destroy(true, false);
    };
  }, []);

  return (
    <div className="services-carousel-wrap">
      <div className="container">
        <div className="swiper init-swiper" ref={elRef}>
          <script
            type="application/json"
            className="swiper-config"
            dangerouslySetInnerHTML={{ __html: configRef.current }}
          />
          <button type="button" className="navigation-prev js-custom-prev" aria-label="Previous foods">
            <i className="bi bi-arrow-left-short" aria-hidden="true"></i>
          </button>
          <button type="button" className="navigation-next js-custom-next" aria-label="Next foods">
            <i className="bi bi-arrow-right-short" aria-hidden="true"></i>
          </button>
          <div className="swiper-wrapper">
            {foods.map((food) => (
              <div className="swiper-slide" key={food.slug}>
                <div className="service-item">
                  <div className="service-item-contents">
                    <Link href={`/foods/${food.slug}`}>
                      <span className="service-item-category">{food.category}</span>
                      <h2 className="service-item-title">{food.name}</h2>
                    </Link>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={food.image} alt={food.imageAlt} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
