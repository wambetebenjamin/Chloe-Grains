import Link from "next/link";
import FoodSwiper from "@/components/FoodSwiper";
import HeroCarousel from "@/components/HeroCarousel";
import NewsletterForm from "@/components/NewsletterForm";
import SectionTitle from "@/components/SectionTitle";
import { getFood, type Food } from "@/lib/data/foods";
import { getRecipe } from "@/lib/data/recipes";
import { voices } from "@/lib/data/voices";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

const whyItems = [
  {
    icon: "/images/icons/service-01.svg",
    heading: "Resilience",
    body: "Drought hardy cereals like sorghum, pearl millet and fonio still set grain when rains fail. The oldest climate strategy on the continent.",
  },
  {
    icon: "/images/icons/service-02.svg",
    heading: "Nutrition",
    body: "Whole by default: teff, wimbi and fonio bring fiber, minerals and slow release energy to daily plates, with no refining step at all.",
  },
  {
    icon: "/images/icons/service-03.svg",
    heading: "Culture",
    body: "Every grain is a calendar of festivals, names and kitchen wisdom. Cooking them keeps that culture moving to the next table.",
  },
  {
    icon: "/images/icons/service-04.svg",
    heading: "Soil",
    body: "Bambara groundnut fixes nitrogen and small grains slot into rotations that keep fields alive for the crop that follows.",
  },
  {
    icon: "/images/icons/service-05.svg",
    heading: "Water",
    body: "Indigenous crops evolved for scarce water. Less irrigation, more harvest per drop, and fields that survive a hotter Sahel.",
  },
  {
    icon: "/images/icons/service-06.svg",
    heading: "Harvest",
    body: "Short cycles and long storage: fonio goes seed to supper in eight weeks, while wimbi rests safely in granaries for years.",
  },
  {
    icon: "/images/icons/service-07.svg",
    heading: "Community",
    body: "Women's groups run fonio processing and baobab wild harvest. Fair prices at origin reach real kitchens and real school funds.",
  },
  {
    icon: "/images/icons/service-08.svg",
    heading: "Future",
    body: "Chefs, plant breeders and diaspora cooks are building demand that rewards farmers for keeping ancient landraces alive.",
  },
];

const teaserSlugs = ["fonio-jollof", "teff-injera-home-style", "zobo-hibiscus-cooler"];

export default async function HomePage() {
  const locale = await getLocale();
  const featured: Food[] = ["fonio", "teff", "moringa", "baobab", "sorghum", "finger-millet", "hibiscus"]
    .map((slug) => getFood(slug))
    .filter((food): food is Food => food !== undefined);

  return (
    <>
      <HeroCarousel />

      {/* Why indigenous crops matter: the template's numbered services grid */}
      <section id="services" className="services section">
        <SectionTitle kicker={t(locale, "home.whyTitle")} title={t(locale, "home.whyKicker")} />
        <div className="content">
          <div className="container">
            <div className="row g-0">
              {whyItems.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={item.heading}>
                  <div className="service-item" data-aos="fade-up" data-aos-delay={100 + index * 50}>
                    <span className="number">{String(index + 1).padStart(2, "0")}</span>
                    <div className="service-item-icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.icon} alt="" width={50} height={50} loading="lazy" />
                    </div>
                    <div className="service-item-content">
                      <h3 className="service-heading">{item.heading}</h3>
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About band: the template's dark green statement section */}
      <section id="about" className="about section">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-band.jpg"
                  alt="Farmer walking through a field of indigenous grain at dawn"
                  className="img-fluid img-overlap"
                  data-aos="zoom-out"
                />
              </div>
              <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                <h3 className="content-subtitle text-white opacity-50">Why choose indigenous</h3>
                <h2 className="content-title mb-4">
                  Grains that fed Africa for <strong>thousands of years</strong> are feeding its
                  future
                </h2>
                <p className="opacity-50">
                  Fonio, teff, sorghum and millet were domesticated here, adapted here, and kept
                  alive here through every drought and every fashion. They are not relics of the
                  past. They are the crops best placed to handle the century ahead.
                </p>

                <div className="row my-5">
                  <div className="col-lg-12 d-flex align-items-start mb-4">
                    <i className="bi bi-cloud-rain me-4 display-6" aria-hidden="true"></i>
                    <div>
                      <h4 className="m-0 h5 text-white">Built for hard weather</h4>
                      <p className="text-white opacity-50">
                        Heat, poor soil and short rains are exactly where these crops shine.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-start mb-4">
                    <i className="bi bi-heart me-4 display-6" aria-hidden="true"></i>
                    <div>
                      <h4 className="m-0 h5 text-white">Whole grain by default</h4>
                      <p className="text-white opacity-50">
                        Teff and fonio are eaten with their bran, so the nutrition travels with the
                        grain.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-start">
                    <i className="bi bi-shop me-4 display-6" aria-hidden="true"></i>
                    <div>
                      <h4 className="m-0 h5 text-white">Markets that pay farmers</h4>
                      <p className="text-white opacity-50">
                        Demand in cities and diaspora kitchens turns heritage crops into living
                        incomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About 3: learn and watch, with the preserved pulsating play button */}
      <section id="about-3" className="about-3 section">
        <div className="container">
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="col-lg-6 order-lg-2 position-relative" data-aos="zoom-out">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cook-at-home.jpg"
                alt="Home cook stirring a pot of millet porridge in a bright kitchen"
                className="img-fluid"
              />
              <a
                href="https://www.youtube.com/watch?v=yjtCDgjxRAw"
                className="glightbox pulsating-play-btn"
                aria-label="Watch a talk about fonio, the forgotten ancient grain"
              >
                <span className="play">
                  <i className="bi bi-play-fill" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <div className="col-lg-5 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h2 className="content-title mb-4">Cook the continent at home</h2>
              <p className="mb-4">
                You do not need a village kitchen to cook fonio, wimbi or mchicha well. You need a
                good pot, honest ingredients and a little patience. Our guides walk you from your
                first grain basket to confident fermentation, with substitutions that respect each
                crop.
              </p>
              <ul className="list-unstyled list-check">
                <li>Beginner guides written for diaspora and city kitchens</li>
                <li>Step by step recipes with times, soaks and safety notes</li>
                <li>A market glossary from acha to zogale, so shopping is easy</li>
              </ul>

              <p>
                <Link href="/cook" className="btn-cta">
                  Open the cook guides
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured foods: the template's dark swiper */}
      <section id="services-2" className="services-2 section dark-background">
        <SectionTitle kicker="Featured foods" title={t(locale, "home.featuredKicker")} />
        <FoodSwiper foods={featured} />
      </section>

      {/* Voices: the template's testimonials grid */}
      <section className="testimonials-12 testimonials section" id="testimonials">
        <SectionTitle kicker={t(locale, "home.voicesTitle")} title={t(locale, "home.voicesKicker")} />
        <div className="testimonial-wrap">
          <div className="container">
            <div className="row">
              {voices.map((voice, index) => (
                <div className="col-md-6 mb-4 mb-md-4" key={voice.name}>
                  <div className="testimonial" data-aos="fade-up" data-aos-delay={100 + index * 100}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={voice.image} alt={voice.imageAlt} loading="lazy" />
                    <blockquote>
                      <p>&ldquo;{voice.quote}&rdquo;</p>
                    </blockquote>
                    <p className="client-name">{voice.name}</p>
                    <p className="client-role">
                      {voice.role}, {voice.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recipe teasers: the template's recent posts cards */}
      <section id="recent-posts" className="recent-posts section">
        <SectionTitle
          kicker={t(locale, "home.recipeTeaserTitle")}
          title={t(locale, "home.recipeTeaserKicker")}
        />
        <div className="container">
          <div className="row gy-5">
            {teaserSlugs.map((slug, index) => {
              const recipe = getRecipe(slug);
              if (!recipe) return null;
              return (
                <div className="col-xl-4 col-md-6" key={slug} data-aos="fade-up" data-aos-delay={100 + index * 100}>
                  <div className="post-item position-relative h-100">
                    <div className="post-img position-relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={recipe.image} alt={recipe.imageAlt} className="img-fluid" loading="lazy" />
                      <span className="post-date">{recipe.timeMinutes} min</span>
                    </div>
                    <div className="post-content d-flex flex-column">
                      <h3 className="post-title">{recipe.title}</h3>
                      <div className="meta d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-person" aria-hidden="true"></i>{" "}
                          <span className="ps-2">{recipe.country}</span>
                        </div>
                        <span className="px-3 text-black-50">/</span>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-folder2" aria-hidden="true"></i>{" "}
                          <span className="ps-2">{recipe.region}</span>
                        </div>
                      </div>
                      <hr />
                      <Link href={`/recipes/${recipe.slug}`} className="readmore stretched-link">
                        <span>{t(locale, "cta.readMore")}</span>
                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-5">
            <Link href="/recipes" className="btn-cta" style={{ backgroundColor: "var(--accent-color)", color: "var(--contrast-color)", borderRadius: 6, padding: "16px 30px", display: "inline-block", fontFamily: "var(--heading-font)", textTransform: "uppercase", fontSize: 14 }}>
              {t(locale, "cta.browseRecipes")}
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA: the template's call-to-action band */}
      <section id="call-to-action" className="call-to-action section light-background">
        <div className="content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Join The Grain Letter</h3>
                <p className="opacity-50">
                  One thoughtful email a month: a seasonal recipe, a producer story and a grain to
                  try. No noise, no spam, unsubscribe in one tap.
                </p>
              </div>
              <div className="col-lg-6">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
