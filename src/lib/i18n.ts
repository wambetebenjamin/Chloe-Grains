import type { Locale } from "./data/site";

export type DictKey =
  | "nav.home"
  | "nav.foods"
  | "nav.recipes"
  | "nav.origins"
  | "nav.producers"
  | "nav.cook"
  | "nav.share"
  | "nav.about"
  | "nav.ethics"
  | "nav.contact"
  | "nav.more"
  | "nav.saved"
  | "cta.exploreFoods"
  | "cta.browseRecipes"
  | "cta.shareRecipe"
  | "cta.getStarted"
  | "cta.readMore"
  | "cta.saveRecipe"
  | "cta.saved"
  | "cta.viewAll"
  | "cta.learnMore"
  | "cta.listen"
  | "cta.play"
  | "cta.pause"
  | "cta.stop"
  | "home.heroTitle"
  | "home.heroSub"
  | "home.whyTitle"
  | "home.whyKicker"
  | "home.featuredTitle"
  | "home.featuredKicker"
  | "home.recipeTeaserTitle"
  | "home.recipeTeaserKicker"
  | "home.voicesTitle"
  | "home.voicesKicker"
  | "label.disclaimer"
  | "label.time"
  | "label.servings"
  | "label.difficulty"
  | "label.region"
  | "label.ingredients"
  | "label.method"
  | "label.tips"
  | "voice.tourTitle"
  | "voice.tourIntro"
  | "voice.statusReady"
  | "voice.statusPlaying"
  | "voice.statusPaused"
  | "voice.statusUnsupported"
  | "cookie.title"
  | "cookie.body"
  | "cookie.accept"
  | "cookie.essential"
  | "cookie.learnMore"
  | "footer.tagline"
  | "footer.explore"
  | "footer.learn"
  | "footer.connect"
  | "footer.rights"
  | "footer.privacy"
  | "footer.terms"
  | "footer.ethics";

type Dict = Record<DictKey, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.foods": "Foods",
  "nav.recipes": "Recipes",
  "nav.origins": "Origins",
  "nav.producers": "Producers",
  "nav.cook": "Cook",
  "nav.share": "Share a Recipe",
  "nav.about": "About",
  "nav.ethics": "Sourcing Ethics",
  "nav.contact": "Contact",
  "nav.more": "More",
  "nav.saved": "Saved",
  "cta.exploreFoods": "Explore the foods",
  "cta.browseRecipes": "Browse recipes",
  "cta.shareRecipe": "Share your recipe",
  "cta.getStarted": "Start cooking",
  "cta.readMore": "Read more",
  "cta.saveRecipe": "Save",
  "cta.saved": "Saved",
  "cta.viewAll": "View all",
  "cta.learnMore": "Learn more",
  "cta.listen": "Listen",
  "cta.play": "Play",
  "cta.pause": "Pause",
  "cta.stop": "Stop",
  "home.heroTitle": "Ancient grains. Present strength.",
  "home.heroSub":
    "Discover, cook and support Africa's indigenous grains and botanicals, with recipes and sourcing stories that travel.",
  "home.whyTitle": "Why indigenous crops matter",
  "home.whyKicker": "Resilience, nutrition and culture in one seed",
  "home.featuredTitle": "Foods of the continent",
  "home.featuredKicker": "Grains, leaves, pods and botanicals worth knowing",
  "home.recipeTeaserTitle": "Recipes from real kitchens",
  "home.recipeTeaserKicker": "Practical, cultural and tested at home",
  "home.voicesTitle": "Voices from the field and the kitchen",
  "home.voicesKicker": "Farmers, cooks and keepers of the tradition",
  "label.disclaimer": "Good to know",
  "label.time": "Time",
  "label.servings": "Serves",
  "label.difficulty": "Level",
  "label.region": "Region",
  "label.ingredients": "Ingredients",
  "label.method": "Method",
  "label.tips": "Tips",
  "voice.tourTitle": "Voice tour",
  "voice.tourIntro": "Let a narrator read this page to you.",
  "voice.statusReady": "Ready to play.",
  "voice.statusPlaying": "Playing the tour.",
  "voice.statusPaused": "Paused.",
  "voice.statusUnsupported": "Voice is not available in this browser.",
  "cookie.title": "Your privacy, simply",
  "cookie.body":
    "We use a few essential cookies to remember your language and saved recipes. With your consent we may also use a privacy friendly analytics cookie to understand what helps readers.",
  "cookie.accept": "Accept all",
  "cookie.essential": "Essential only",
  "cookie.learnMore": "Read the privacy policy",
  "footer.tagline": "Ancient grains. Present strength.",
  "footer.explore": "Explore",
  "footer.learn": "Learn",
  "footer.connect": "Connect",
  "footer.rights": "Chloe Grains. All rights reserved.",
  "footer.privacy": "Privacy policy",
  "footer.terms": "Terms of use",
  "footer.ethics": "Sourcing ethics",
};

const sw: Dict = {
  "nav.home": "Nyumbani",
  "nav.foods": "Vyakula",
  "nav.recipes": "Mapishi",
  "nav.origins": "Asili",
  "nav.producers": "Wakulima",
  "nav.cook": "Pika",
  "nav.share": "Shiriki Pishi",
  "nav.about": "Kuhusu",
  "nav.ethics": "Maadili ya Ununuzi",
  "nav.contact": "Wasiliana",
  "nav.more": "Zaidi",
  "nav.saved": "Zilizohifadhiwa",
  "cta.exploreFoods": "Gundua vyakula",
  "cta.browseRecipes": "Tazama mapishi",
  "cta.shareRecipe": "Shiriki pishi lako",
  "cta.getStarted": "Anza kupika",
  "cta.readMore": "Soma zaidi",
  "cta.saveRecipe": "Hifadhi",
  "cta.saved": "Imehifadhiwa",
  "cta.viewAll": "Ona zote",
  "cta.learnMore": "Jifunze zaidi",
  "cta.listen": "Sikiliza",
  "cta.play": "Cheza",
  "cta.pause": "Simamisha",
  "cta.stop": "Zima",
  "home.heroTitle": "Nafaka za kale. Nguvu ya leo.",
  "home.heroSub":
    "Gundua, pika na dukia nafaka na mimea asilia ya Afrika, pamoja na mapishi na hadithi za chanzo zinazosafiri.",
  "home.whyTitle": "Kwa nini mimea asilia ni muhimu",
  "home.whyKicker": "Ustahimilivu, lishe na utamaduni katika mbegu moja",
  "home.featuredTitle": "Vyakula vya bara",
  "home.featuredKicker": "Nafaka, majani, maganda na mimea ya kuyajua",
  "home.recipeTeaserTitle": "Mapishi kutoka jikoni halisi",
  "home.recipeTeaserKicker": "Ya vitendo, ya kitamaduni na yaliyojaribiwa nyumbani",
  "home.voicesTitle": "Sauti kutoka shambani na jikoni",
  "home.voicesKicker": "Wakulima, wapishi na walinzi wa mapokeo",
  "label.disclaimer": "Ni vizuri kujua",
  "label.time": "Muda",
  "label.servings": "Huduma",
  "label.difficulty": "Kiwango",
  "label.region": "Eneo",
  "label.ingredients": "Viungo",
  "label.method": "Hatua",
  "label.tips": "Vidokezo",
  "voice.tourTitle": "Ziada ya sauti",
  "voice.tourIntro": "Acha msimuliaji akusomee ukurasa huu.",
  "voice.statusReady": "Tayari kucheza.",
  "voice.statusPlaying": "Inacheza ziada.",
  "voice.statusPaused": "Imesimamishwa.",
  "voice.statusUnsupported": "Sauti haipatikani katika kivinjari hiki.",
  "cookie.title": "Faragha yako, kwa urahisi",
  "cookie.body":
    "Tunatumia vidakuzi vichwa muhimu kukumbuka lugha yako na mapishi uliyohifadhi. Kwa idhini yako, tunaweza pia kutumia kidakuzi cha takwimu kinachoheshimu faragha kuelewa kinachowasaidia wasomaji.",
  "cookie.accept": "Kubali vyote",
  "cookie.essential": "Muhimu pekee",
  "cookie.learnMore": "Soma sera ya faragha",
  "footer.tagline": "Nafaka za kale. Nguvu ya leo.",
  "footer.explore": "Gundua",
  "footer.learn": "Jifunze",
  "footer.connect": "Unganisha",
  "footer.rights": "Chloe Grains. Haki zote zimehifadhiwa.",
  "footer.privacy": "Sera ya faragha",
  "footer.terms": "Masharti ya matumizi",
  "footer.ethics": "Maadili ya ununuzi",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.foods": "Aliments",
  "nav.recipes": "Recettes",
  "nav.origins": "Origines",
  "nav.producers": "Producteurs",
  "nav.cook": "Cuisiner",
  "nav.share": "Partager une recette",
  "nav.about": "À propos",
  "nav.ethics": "Éthique d'approvisionnement",
  "nav.contact": "Contact",
  "nav.more": "Plus",
  "nav.saved": "Enregistrés",
  "cta.exploreFoods": "Découvrir les aliments",
  "cta.browseRecipes": "Parcourir les recettes",
  "cta.shareRecipe": "Partager votre recette",
  "cta.getStarted": "Commencer à cuisiner",
  "cta.readMore": "Lire la suite",
  "cta.saveRecipe": "Enregistrer",
  "cta.saved": "Enregistré",
  "cta.viewAll": "Voir tout",
  "cta.learnMore": "En savoir plus",
  "cta.listen": "Écouter",
  "cta.play": "Lire",
  "cta.pause": "Pause",
  "cta.stop": "Arrêter",
  "home.heroTitle": "Grains anciens. Force présente.",
  "home.heroSub":
    "Découvrez, cuisinez et soutenez les grains et plantes indigènes d'Afrique, avec des recettes et des histoires d'approvisionnement qui voyagent.",
  "home.whyTitle": "Pourquoi les cultures indigènes comptent",
  "home.whyKicker": "Résilience, nutrition et culture dans une seule graine",
  "home.featuredTitle": "Les aliments du continent",
  "home.featuredKicker": "Grains, feuilles, gousses et plantes à connaître",
  "home.recipeTeaserTitle": "Recettes de vraies cuisines",
  "home.recipeTeaserKicker": "Pratiques, culturelles et testées à la maison",
  "home.voicesTitle": "Voix des champs et de la cuisine",
  "home.voicesKicker": "Agriculteurs, cuisiniers et gardiens de la tradition",
  "label.disclaimer": "Bon à savoir",
  "label.time": "Temps",
  "label.servings": "Portions",
  "label.difficulty": "Niveau",
  "label.region": "Région",
  "label.ingredients": "Ingrédients",
  "label.method": "Méthode",
  "label.tips": "Astuces",
  "voice.tourTitle": "Visite audio",
  "voice.tourIntro": "Laissez un narrateur vous lire cette page.",
  "voice.statusReady": "Prêt à lire.",
  "voice.statusPlaying": "Lecture de la visite.",
  "voice.statusPaused": "En pause.",
  "voice.statusUnsupported": "La voix n'est pas disponible dans ce navigateur.",
  "cookie.title": "Votre confidentialité, simplement",
  "cookie.body":
    "Nous utilisons quelques cookies essentiels pour mémoriser votre langue et vos recettes enregistrées. Avec votre consentement, nous pouvons aussi utiliser un cookie d'analyse respectueux de la vie privée pour comprendre ce qui aide les lecteurs.",
  "cookie.accept": "Tout accepter",
  "cookie.essential": "Essentiels seulement",
  "cookie.learnMore": "Lire la politique de confidentialité",
  "footer.tagline": "Grains anciens. Force présente.",
  "footer.explore": "Découvrir",
  "footer.learn": "Apprendre",
  "footer.connect": "Nous joindre",
  "footer.rights": "Chloe Grains. Tous droits réservés.",
  "footer.privacy": "Politique de confidentialité",
  "footer.terms": "Conditions d'utilisation",
  "footer.ethics": "Éthique d'approvisionnement",
};

export const dictionaries: Record<Locale, Dict> = { en, sw, fr };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? en;
}

export function t(locale: Locale, key: DictKey): string {
  return getDict(locale)[key] ?? en[key];
}

export interface HeroSlideCopy {
  title: string;
  sub: string;
}

/**
 * The home hero carousel copy, lightly translated for all three locales.
 * Slide imagery and structure come from the preserved template hero.
 */
export const heroSlides: Record<Locale, HeroSlideCopy[]> = {
  en: [
    {
      title: "Ancient grains. Present strength.",
      sub: "Discover, cook and support Africa's indigenous grains and botanicals, from fonio and teff to moringa and baobab, with recipes and sourcing stories that travel.",
    },
    {
      title: "Fonio: six weeks from seed to supper",
      sub: "The fastest cereal in Africa thrives on poor soils and little rain, and it feeds families when other crops fail. Meet the grain of the Sahel and the Fouta Djallon.",
    },
    {
      title: "Teff: the smallest grain, the biggest table",
      sub: "One millimeter wide, never refined, always whole. Teff becomes injera, the fermented flatbread that is plate, utensil and centerpiece of meals across the Horn of Africa.",
    },
    {
      title: "Leaves, pods and flowers of the drylands",
      sub: "Moringa stays green through the dry season, baobab fruits when fields are bare, and hibiscus turns every celebration ruby red. These are Africa's everyday botanicals.",
    },
    {
      title: "Recipes and sourcing stories that travel",
      sub: "From a Nairobi uji cup to a Brooklyn fonio bowl, follow the dishes, the cooks and the cooperatives keeping indigenous grains alive.",
    },
  ],
  sw: [
    {
      title: "Nafaka za kale. Nguvu ya leo.",
      sub: "Gundua, pika na dukia nafaka na mimea asilia ya Afrika, kutoka fonio na teff hadi moringa na mbuyu, pamoja na mapishi na hadithi za chanzo zinazosafiri.",
    },
    {
      title: "Fonio: wiki sita kutoka mbegu hadi chakula",
      sub: "Nafaka ya haraka zaidi Afrika kustawi katika udongo maskini na mvua chache, na inalisha familia wakati mimea mingine inashindwa. Ikutane na nafaka ya Sahel.",
    },
    {
      title: "Teff: nafaka ndogo kabisa, meza kubwa kabisa",
      sub: "Milimita moja upana, kamwe haijakambwa, daima kamili. Teff inakuwa injera, mkate uliochachwa ambao ni sahani, kigae na kitovu cha milo katika Pembe la Afrika.",
    },
    {
      title: "Majani, maganda na maua ya nchi kavu",
      sub: "Mlonge hubaki kijani kipindi cha ukame, mbuyu hua matunda wakati mashamba ni matupu, na hibiscus hufanya kila sherehe kuwa nyekundu. Hii ni mimea ya kila siku ya Afrika.",
    },
    {
      title: "Mapishi na hadithi za chanzo zinazosafiri",
      sub: "Kutoka kikombe cha uji Nairobi hadi bakuli la fonio Brooklyn, fuata mapishi, wapishi na vyama vinavyohifadhi nafaka asilia.",
    },
  ],
  fr: [
    {
      title: "Grains anciens. Force présente.",
      sub: "Découvrez, cuisinez et soutenez les grains et plantes indigènes d'Afrique, du fonio et du teff au moringa et au baobab, avec des recettes et des histoires d'approvisionnement qui voyagent.",
    },
    {
      title: "Fonio : six semaines de la graine à l'assiette",
      sub: "La céréale la plus rapide d'Afrique pousse sur des sols pauvres avec peu de pluie, et nourrit les familles quand les autres cultures échouent. Découvrez le grain du Sahel.",
    },
    {
      title: "Teff : le plus petit grain, la plus grande table",
      sub: "Un millimètre de large, jamais raffiné, toujours complet. Le teff devient l'injera, la galette fermentée qui est assiette, couvert et centre des repas de la Corne de l'Afrique.",
    },
    {
      title: "Feuilles, gousses et fleurs des terres sèches",
      sub: "Le moringa reste vert pendant la saison sèche, le baobab fructifie quand les champs sont nus, et l'hibiscus rend chaque célébration rubis. Les plantes du quotidien africain.",
    },
    {
      title: "Des recettes et des histoires qui voyagent",
      sub: "D'un uji de Nairobi à un bol de fonio à Brooklyn, suivez les plats, les cuisiniers et les coopératives qui gardent les grains indigènes vivants.",
    },
  ],
};
