export interface Voice {
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
  imageAlt: string;
}

/**
 * Community voices shared with Chloe Grains by cooks, farmers and grain
 * keepers. Quotes are lightly edited for length and published with the
 * speakers' permission.
 */
export const voices: Voice[] = [
  {
    name: "Aminata Diallo",
    role: "Fonio processor",
    location: "Conakry, Guinea",
    quote:
      "My grandmother winnowed fonio for hours with dust in her eyes. Our group still winnows by hand, but now we have a destoner, and buyers finally pay for the work, not just the weight.",
    image: "/images/voices/voice-1.jpg",
    imageAlt: "Portrait of a smiling woman in a colorful headwrap and pearl earrings",
  },
  {
    name: "Wanjiru Kamau",
    role: "Home cook and nurse",
    location: "Nairobi, Kenya",
    quote:
      "Uji wa wimbi is the first thing I make when someone in my house is unwell, and the first thing my children ask for on a cold morning. The grain never left our kitchen; it just waited for the city to remember it.",
    image: "/images/voices/voice-2.jpg",
    imageAlt: "Portrait of a smiling woman wearing a headscarf indoors",
  },
  {
    name: "Tafadzwa Moyo",
    role: "Smallholder farmer and seed saver",
    location: "Masvingo, Zimbabwe",
    quote:
      "When the rains failed three seasons in a row, it was zviyo and sorghum in my granary that fed us, not the maize. I keep the old seed because the old seed knows this weather.",
    image: "/images/voices/voice-3.jpg",
    imageAlt: "Portrait of a smiling farmer standing in a sunny Nigerian field",
  },
  {
    name: "Selamawit Bekele",
    role: "Teff farmer and injera maker",
    location: "Tigray, Ethiopia",
    quote:
      "People abroad think injera is difficult. It is patient, not difficult. Teff and water and time, and the batter tells you when it is ready if you smell it every day.",
    image: "/images/voices/voice-4.jpg",
    imageAlt: "Portrait of a smiling woman in traditional Ethiopian dress outdoors",
  },
];

/**
 * Scripts for the floating voice tour. Spoken with the browser speech
 * synthesis API at lang en-KE, rate 0.95, pitch 1.1 (see site.voice).
 * Each route gets a short, warm narration of what the reader is looking at.
 */
export const voiceTourScripts: Record<string, string[]> = {
  home: [
    "Karibu. Welcome to Chloe Grains. Ancient grains. Present strength.",
    "This is a discovery platform for Africa's indigenous grains and botanicals: fonio, teff, moringa, baobab, sorghum, millet, hibiscus, amaranth and bambara groundnut.",
    "Here you will find food profiles with honest nutrition notes, recipes tested in real kitchens, origin stories from West, East, Southern and Horn of Africa, and sourcing notes that respect the farmers behind every grain.",
    "Start with the foods of the continent, or jump straight into a recipe. When you are ready to cook, the guides section walks you through your first basket, substitutions, fermentation and storage.",
    "Chloe Grains is educational. We are not medical advisors, we do not sell food, and we do not certify producers. We simply believe these grains deserve to travel well.",
  ],
  foods: [
    "You are in the food library of Chloe Grains.",
    "Each profile tells you where a grain or botanical grows, the local names it answers to, what traditional cooks have always known about it, and cautious, respectful nutrition notes.",
    "Fonio is the fastest cereal in Africa. Teff is the smallest grain with the biggest table presence. Moringa stays green through the dry season. Baobab fruits when the fields are bare.",
    "Open any food to read its full story, then follow the recipes linked at the bottom of each profile.",
  ],
  recipes: [
    "You are in the recipe kitchen of Chloe Grains.",
    "Filter by ingredient, by time, by diet note or by region. Every recipe gives exact amounts, clear steps, and the cultural note behind the dish.",
    "Nothing here is a restaurant fantasy. These are home kitchen recipes, with fermentation times, soaking steps and food safety notes written out plainly.",
    "Tap save on any recipe and it waits for you in your saved collection.",
  ],
  origins: [
    "You are in the origins gallery of Chloe Grains.",
    "Six landscapes shape the continent's grains: West Africa, the Sahel belt, East Africa, the Horn of Africa, Southern Africa, and the newest origin of all, diaspora kitchens.",
    "Each card carries the farming story, the market culture, and the crops to look for.",
  ],
  producers: [
    "You are in the producers directory of Chloe Grains.",
    "These are informational profiles of the cooperatives, women's groups and smallholder ecosystems that grow and process indigenous grains. They are not endorsements or certifications.",
    "For each entry, read what the community does, the ethical notes worth asking about, and the harvest season.",
    "The best support a reader can give is informed demand: ask shops where grain came from, and pay fair prices without haggling over pennies.",
  ],
  cook: [
    "You are in the cook guides of Chloe Grains.",
    "Start with your first grain basket, then read sourcing tips for diaspora cities, substitutions that respect the grain, fermentation without fear, and batch cooking.",
    "There is also a small glossary of market words from acha to zogale, so you can shop and cook with confidence anywhere.",
  ],
  about: [
    "You are reading about Chloe Grains.",
    "We are a lean editorial project built on one belief: indigenous grains are not relics, they are answers. Answers to unreliable rain, to hidden hunger, to food cultures drifting from their own pantry.",
    "We write with farmers and cooks, not about them, and we keep our claims small enough to be true.",
  ],
  contact: [
    "You are on the contact page of Chloe Grains.",
    "Write to us with recipe questions, corrections, producer information or partnership ideas. A human reads every message.",
  ],
  saved: [
    "This is your saved collection on Chloe Grains.",
    "Recipes and foods you save stay in this browser, private to your device. Add your name to make the collection feel like yours.",
  ],
  fallback: [
    "You are exploring Chloe Grains, the home of Africa's indigenous grains and botanicals.",
    "Ancient grains. Present strength. Enjoy the page, and save anything you want to cook later.",
  ],
};
