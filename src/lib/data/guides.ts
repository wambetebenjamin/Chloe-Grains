import type { Locale } from "../data/site";

export interface GuideSection {
  slug: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  blocks: { heading: string; body: string }[];
}

/**
 * The /cook guides. Long form bodies stay in English (the editorial
 * language of the platform); titles and intros carry light translations
 * so the page greets readers in their chosen language.
 */
export const guides: GuideSection[] = [
  {
    slug: "first-basket",
    title: {
      en: "Your first indigenous grain basket",
      sw: "Kikapu chako cha kwanza cha nafaka asilia",
      fr: "Votre premier panier de grains indigènes",
    },
    intro: {
      en: "Start small, cook often, and build the pantry that matches your kitchen.",
      sw: "Anza kidogo, pika mara nyingi, na ujenge ghala linalolingana na jikoni lako.",
      fr: "Commencez petit, cuisinez souvent et construisez le garde-manger adapté à votre cuisine.",
    },
    blocks: [
      {
        heading: "Pick one grain and one botanical",
        body: "The easiest first basket is one quick grain (fonio or wimbi flour), one slow grain (whole sorghum or teff), one green (fresh or dried moringa), and one flavor botanical (dried hibiscus or baobab powder). That combination covers breakfast, dinner, a side and a drink, and everything keeps for months.",
      },
      {
        heading: "Match grain to weeknight",
        body: "Fonio cooks in five minutes, so it is your fastest weeknight base. Wimbi and millet flours become porridge in fifteen. Whole sorghum and teff grain want a soak and a slow simmer, which suits weekend batches. Injera is a project, and a rewarding one.",
      },
      {
        heading: "Buy from shops that rotate stock",
        body: "Whole grain meals carry natural oils that go bitter with age and heat. Buy from busy African, halal or health food shops where packets move, check for a harvest or packing date where printed, and store flours in sealed jars away from the stove. Refrigerate or freeze anything you will keep beyond two months.",
      },
      {
        heading: "Taste before you season",
        body: "Indigenous grains have real flavor: malty teff, nutty fonio, earthy sorghum. Taste the plain grain once before deciding how heavily to season. Many cooks discover they need less sauce than with rice or maize.",
      },
    ],
  },
  {
    slug: "diaspora-sourcing",
    title: {
      en: "Sourcing outside the continent",
      sw: "Kupata nafaka nje ya bara",
      fr: "S'approvisionner hors du continent",
    },
    intro: {
      en: "Where the grains live in London, Paris, New York, Toronto, Dubai and beyond.",
      sw: "Ambapo nafaka hupatikana London, Paris, New York, Toronto, Dubai na kwingineko.",
      fr: "Où trouver ces grains à Londres, Paris, New York, Toronto, Dubaï et ailleurs.",
    },
    blocks: [
      {
        heading: "The African and Caribbean grocer first",
        body: "Neighborhood grocers in diaspora cities stock acha, thiéré, wimbi flour, teff flour, dried hibiscus (zobo or bissap), baobab powder and moringa leaves as everyday shelf items. Prices beat specialty health stores, rotation is faster, and staff can usually tell you which import batch is freshest.",
      },
      {
        heading: "Ethiopian and Eritrean markets for teff",
        body: "For teff flour, shops serving Ethiopian and Eritrean communities are the gold standard: they stock brown, red and white teff in kilo bags, sometimes with milling on site. Injera bakeries also sell finished injera daily if you want to taste a benchmark before fermenting your own.",
      },
      {
        heading: "Health food aisles and online",
        body: "Fonio, teff, moringa powder and baobab powder now appear in mainstream health food sections and online. Read labels for origin and ingredients: a good packet tells you the country and ideally the processor or cooperative. Single ingredient products only; blends hide the ratio you are paying for.",
      },
      {
        heading: "Ask about the chain",
        body: "Where a shop knows its importer, ask which cooperatives or processors supply the grain. Diaspora demand sets prices back home, and shops that can answer this question are usually the ones paying fairly at origin. Your questions travel down the chain faster than you think.",
      },
    ],
  },
  {
    slug: "substitutions",
    title: {
      en: "Substitutions that respect the grain",
      sw: "Mbadala unaoheshimu nafaka",
      fr: "Substituts qui respectent le grain",
    },
    intro: {
      en: "Cook the recipe you have, but know what changes when you swap.",
      sw: "Pika pishi ulilonalo, lakini jua kinachobadilika ukibadilisha.",
      fr: "Cuisinez la recette que vous avez, mais sachez ce qui change en substituant.",
    },
    blocks: [
      {
        heading: "Grain swaps",
        body: "Fonio and couscous are the closest structural cousins; either can replace the other in steamed dishes with a texture shift. Teff flour has no true substitute for injera because of its unique fermentation and lack of gluten; wheat blends change the result entirely. Sorghum meal and maize meal swap freely in stiff porridges, with sorghum adding color, density and earthiness. Wimbi flour can replace sorghum meal in uji for a maltier, calcium richer bowl.",
      },
      {
        heading: "Leaf and green swaps",
        body: "Fresh moringa can be replaced by moringa powder at roughly one tablespoon of powder per generous handful of leaves, stirred in off the heat. Mchicha (amaranth leaves) swaps with spinach at equal weights; amaranth is slightly earthier and holds texture better. Sukuma wiki stands in for collard or kale anywhere in the world.",
      },
      {
        heading: "Botanical swaps",
        body: "Baobab powder's tartness can be approximated with half tamarind paste and half lemon juice, though baobab's creamy fiber is unique. Dried hibiscus has no equal for zobo; if unavailable, the drink waits, because cranberry juice versions are a different beverage with a similar color. Fermented milk (nono) can be approximated with plain yogurt thinned with milk.",
      },
      {
        heading: "When not to substitute",
        body: "For celebration dishes (injera, okpa, thiakry), cook them as written at least once. The technique is part of the culture, and the first faithful attempt teaches you more than any shortcut.",
      },
    ],
  },
  {
    slug: "fermentation-basics",
    title: {
      en: "Fermentation without fear",
      sw: "Uchachushaji bila hofu",
      fr: "La fermentation sans peur",
    },
    intro: {
      en: "Uji, injera, nono and fura all rest on clean, calm fermentation.",
      sw: "Uji, injera, nono na fura vyote vinategemea uchachushaji safi na tulivu.",
      fr: "Uji, injera, nono et fura reposent sur une fermentation propre et calme.",
    },
    blocks: [
      {
        heading: "The clean rule",
        body: "Fermentation is farming microbes, so cleanliness decides who you farm. Scald jars and utensils, use drinking quality water, cover with cloth not tight lids, and keep ferments away from raw meat prep areas. A sour, fruity, beery smell means success; putrid, rotten or chemical smells mean start over.",
      },
      {
        heading: "Temperature sets the clock",
        body: "Most African grain ferments want 20 to 28 C. In a hot kitchen, twelve hours may finish an uji ferment; in a cold flat, thirty six. Watch the batter, not the clock: bubbles, slight rise, and a tangy aroma are the finish line.",
      },
      {
        heading: "Mold versus normal",
        body: "A thin darker liquid layer (like ersho on injera batter) is normal and protective; stir it back in. Any fuzzy, pink, orange or black growth on the surface means discard the batch and scald the vessel. When in doubt, throw it out.",
      },
      {
        heading: "Keep a starter",
        body: "A few spoons of yesterday's batter or a saved cup of fermented slurry accelerates tomorrow's ferment and stabilizes flavor, the way injera houses and uji vendors have always done. Feed it fresh flour and water every few days or refrigerate it.",
      },
    ],
  },
  {
    slug: "batch-and-store",
    title: {
      en: "Batch cooking and storing",
      sw: "Kupika kwa wingi na kuhifadhi",
      fr: "Cuisiner en quantité et conserver",
    },
    intro: {
      en: "One Sunday pot, five weekday meals.",
      sw: "Sufuria moja la Jumapili, milo mitano ya siku za kazi.",
      fr: "Une marmite du dimanche, cinq repas de semaine.",
    },
    blocks: [
      {
        heading: "Grains keep beautifully",
        body: "Cooked fonio, sorghum, teff grain and millet keep four to five days refrigerated in sealed containers and freeze for two months. Cool within two hours of cooking, portion flat for fast freezing, and reheat only what you eat. Reheated grains revive with a sprinkle of water and a covered warm through.",
      },
      {
        heading: "Sauces and greens",
        body: "Groundnut sauces, zobo and lentil soups freeze well; coconut greens like mchicha are better cooked fresh or kept two days. Stewed moringa keeps three days refrigerated. Add fresh leafy greens to batches at serving time for color and vitamins.",
      },
      {
        heading: "Flours and powders",
        body: "Whole grain flours (teff, wimbi, millet, bambara) stay sweetest in sealed jars in a cool dark cupboard for six to eight weeks, or months in the freezer. Baobab and moringa powders hate light and humidity: opaque, airtight jars, and a dry spoon every time.",
      },
      {
        heading: "The safety line",
        body: "Follow local food safety guidance: cool cooked food quickly, keep hot food hot, never reheat a batch twice, and label frozen containers with dates. When a stored dish smells or looks wrong, compost it without hesitation.",
      },
    ],
  },
  {
    slug: "glossary",
    title: {
      en: "A small grain glossary",
      sw: "Kamusi ndogo ya nafaka",
      fr: "Petit glossaire des grains",
    },
    intro: {
      en: "Words you will meet in markets, recipes and conversations.",
      sw: "Maneno utakayokutana nayo sokoni, kwenye mapishi na mazungumzo.",
      fr: "Des mots que vous rencontrerez au marché, dans les recettes et les conversations.",
    },
    blocks: [
      {
        heading: "Acha, findi, fonio",
        body: "Names for the same tiny West African grain: acha in Hausa, findi in Wolof, fonio in French and Guinea. The dish form is usually a steamed couscous or a porridge.",
      },
      {
        heading: "Uji, uji wa wimbi",
        body: "East African drinking porridge, often fermented. Wimbi (finger millet) uji is the classic cocoa brown version, drunk at breakfast and given to children and recovering elders.",
      },
      {
        heading: "Ugali, sadza, bogobe, tuwo",
        body: "The family of stiff porridges eaten by hand across eastern, southern and western Africa. The meal can be maize, sorghum or millet; the technique of streaming flour into boiling water while paddling is shared.",
      },
      {
        heading: "Injera, ersho, absit, mitad",
        body: "Injera is the fermented teff flatbread. Ersho is the protective liquid on fermenting batter. Absit is the cooked paste stirred back in for sponginess. The mitad is the clay or electric griddle it bakes on.",
      },
      {
        heading: "Fura da nono",
        body: "Hausa spiced millet balls (fura) crushed into fermented milk (nono). A meal and a drink in one calabash.",
      },
      {
        heading: "Thiéré, thiakry",
        body: "Senegalese millet couscous grains (thiéré). Thiakry is the sweetened dessert version with yogurt or soured milk, nutmeg and raisins.",
      },
      {
        heading: "Zobo, bissap, sobolo, karkadé",
        body: "Hibiscus drinks across Nigeria, Senegal, Ghana and the Nile. Tart, red, caffeine free, and endlessly customizable with ginger, pineapple and spice.",
      },
      {
        heading: "Okpa, ditloo, nyemba, jugo bean",
        body: "Bambara groundnut by its regional names: okpa in Igbo (and the steamed pudding made from it), ditloo in Setswana, nyemba in Shona, jugo bean in southern African English.",
      },
      {
        heading: "Mchicha, ewe tete, zogale, mlonge",
        body: "The greens: mchicha (amaranth) in Swahili, ewe tete (amaranth) in Yoruba, zogale (moringa) in Hausa, mlonge (moringa) in Swahili.",
      },
      {
        heading: "Kuka, lalo, bouye, goui, mbuyu",
        body: "The baobab family of words: kuka (leaf, Hausa), lalo (leaf powder, Senegal), bouye (fruit drink, Wolof), goui (fruit, Wolof), mbuyu (tree, Swahili).",
      },
    ],
  },
];

export const substitutionTable = {
  intro:
    "A quick reference for the swaps that come up most often in diaspora kitchens. Swap confidently for weeknight cooking; cook celebration dishes faithfully at least once.",
  rows: [
    {
      want: "Fonio (steamed)",
      have: "Couscous (wheat)",
      change:
        "Texture is close; fonio is lighter and gluten free. Adjust liquid slightly down for fonio.",
    },
    {
      want: "Fonio (porridge)",
      have: "Fine millet meal",
      change: "Millet porridge is creamier and sweeter; cook two to three minutes longer.",
    },
    {
      want: "Teff flour for injera",
      have: "Teff plus wheat blend",
      change:
        "Ferments faster and stretches easier, but no longer gluten free and the flavor is milder.",
    },
    {
      want: "Sorghum meal",
      have: "Maize meal",
      change:
        "Interchangeable in ugali and sadza; sorghum is denser, darker and lower glycemic.",
    },
    {
      want: "Wimbi (finger millet) flour",
      have: "Sorghum or millet flour",
      change: "Uji still works; expect less maltiness and less calcium than wimbi.",
    },
    {
      want: "Fresh moringa leaves",
      have: "Moringa powder",
      change: "About 1 tablespoon powder per handful of leaves, stirred in off the heat.",
    },
    {
      want: "Mchicha (amaranth leaves)",
      have: "Spinach",
      change: "Equal weights; spinach is milder and wilts faster, so add it later.",
    },
    {
      want: "Baobab powder",
      have: "Tamarind paste plus lemon",
      change: "Half tamarind, half lemon approximates tartness; the creamy fiber is lost.",
    },
    {
      want: "Nono (fermented milk)",
      have: "Plain yogurt plus milk",
      change: "Thin yogurt with milk until pourable; the tang is very close.",
    },
    {
      want: "Palm oil (okpa)",
      have: "None",
      change:
        "Okpa without red palm oil loses its signature color and aroma; annatto oil is the closest compromise.",
    },
  ],
};
