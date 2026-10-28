import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chloe Grains",
    short_name: "ChloeGrains",
    description:
      "Discover, cook and support Africa's indigenous grains and botanicals, with recipes and sourcing stories that travel.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f5ec",
    theme_color: "#116530",
    icons: [
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/images/apple-touch-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
