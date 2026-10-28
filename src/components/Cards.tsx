import Link from "next/link";
import type { Food } from "@/lib/data/foods";
import type { Recipe } from "@/lib/data/recipes";
import { dietTagLabels } from "@/lib/data/recipes";
import type { OriginRegion } from "@/lib/data/origins";
import SaveButton from "./SaveButton";

export function RecipeCard({ recipe, excerpt }: { recipe: Recipe; excerpt?: string }) {
  return (
    <div className="cg-card" data-aos="fade-up">
      <div className="cg-card-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={recipe.image} alt={recipe.imageAlt} loading="lazy" decoding="async" />
        <span className="cg-card-tag">{recipe.region}</span>
      </div>
      <div className="cg-card-body">
        <h3 className="cg-card-title">
          <Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
        </h3>
        <div className="cg-card-meta">
          <span className="cg-chip">
            <i className="bi bi-clock" aria-hidden="true"></i>
            {recipe.timeMinutes} min
          </span>
          <span className="cg-chip">
            <i className="bi bi-people" aria-hidden="true"></i>
            {recipe.servings}
          </span>
          {recipe.dietTags.slice(0, 2).map((tag) => (
            <span key={tag} className="cg-chip cg-chip-clay">
              {dietTagLabels[tag]}
            </span>
          ))}
        </div>
        <p className="cg-card-text">{excerpt ?? recipe.subtitle}</p>
        <div className="cg-card-foot">
          <Link href={`/recipes/${recipe.slug}`} className="readmore">
            <span>Cook this</span>
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
          <SaveButton kind="recipe" slug={recipe.slug} compact />
        </div>
      </div>
    </div>
  );
}

export function FoodCard({ food }: { food: Food }) {
  return (
    <div className="cg-card" data-aos="fade-up">
      <div className="cg-card-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={food.image} alt={food.imageAlt} loading="lazy" decoding="async" />
        <span className="cg-card-tag">{food.category}</span>
      </div>
      <div className="cg-card-body">
        <h3 className="cg-card-title">
          <Link href={`/foods/${food.slug}`}>{food.name}</Link>
        </h3>
        <p className="cg-card-text" style={{ fontStyle: "italic", marginBottom: 8 }}>
          {food.tagline}
        </p>
        <div className="cg-card-meta">
          {food.regions.slice(0, 3).map((region) => (
            <span key={region} className="cg-chip">
              <i className="bi bi-geo-alt" aria-hidden="true"></i>
              {region}
            </span>
          ))}
        </div>
        <p className="cg-card-text">{food.intro.split(". ")[0]}.</p>
        <div className="cg-card-foot">
          <Link href={`/foods/${food.slug}`} className="readmore">
            <span>Read the profile</span>
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
          <SaveButton kind="food" slug={food.slug} compact />
        </div>
      </div>
    </div>
  );
}

export function OriginCard({ origin }: { origin: OriginRegion }) {
  return (
    <div className="cg-card" data-aos="fade-up">
      <div className="cg-card-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={origin.image} alt={origin.imageAlt} loading="lazy" decoding="async" />
        <span className="cg-card-tag">{origin.crops.length} key crops</span>
      </div>
      <div className="cg-card-body">
        <h3 className="cg-card-title">
          <Link href={`/origins#${origin.slug}`}>{origin.name}</Link>
        </h3>
        <p className="cg-card-text" style={{ fontStyle: "italic", marginBottom: 8 }}>
          {origin.subtitle}
        </p>
        <p className="cg-card-text">{origin.story[0].split(". ").slice(0, 2).join(". ")}.</p>
        <div className="cg-card-meta">
          {origin.crops.slice(0, 4).map((crop) => (
            <span key={crop} className="cg-chip cg-chip-clay">
              {crop}
            </span>
          ))}
        </div>
        <div className="cg-card-foot">
          <Link href={`/origins#${origin.slug}`} className="readmore">
            <span>Read the story</span>
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
