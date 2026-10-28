import type { MetadataRoute } from "next";
import { foods } from "@/lib/data/foods";
import { origins } from "@/lib/data/origins";
import { producers } from "@/lib/data/producers";
import { recipes } from "@/lib/data/recipes";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/foods",
    "/recipes",
    "/origins",
    "/producers",
    "/cook",
    "/share-recipe",
    "/about",
    "/sourcing-ethics",
    "/contact",
    "/privacy",
    "/terms",
    "/saved",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const foodRoutes = foods.map((food) => ({
    url: `${site.url}/foods/${food.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const recipeRoutes = recipes.map((recipe) => ({
    url: `${site.url}/recipes/${recipe.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const originAnchors = origins.map((origin) => ({
    url: `${site.url}/origins#${origin.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const producerAnchors = producers.map((producer) => ({
    url: `${site.url}/producers#${producer.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...foodRoutes,
    ...recipeRoutes,
    ...originAnchors,
    ...producerAnchors,
  ];
}
