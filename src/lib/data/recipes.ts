import type { RegionKey } from "./foods";

export type DietTag =
  | "vegan"
  | "vegetarian"
  | "gluten-free"
  | "dairy-free"
  | "under-30-minutes"
  | "batch-friendly"
  | "kid-friendly";

export type TimeBand = "under-30" | "30-60" | "over-60";

export interface RecipeStep {
  title: string;
  body: string;
}

export interface Recipe {
  slug: string;
  title: string;
  subtitle: string;
  foodSlugs: string[];
  region: RegionKey;
  country: string;
  image: string;
  imageAlt: string;
  timeMinutes: number;
  timeBand: TimeBand;
  plusTimeNote?: string;
  servings: string;
  difficulty: "Easy" | "Medium" | "Involved";
  dietTags: DietTag[];
  ingredients: { item: string; note?: string }[];
  steps: RecipeStep[];
  tips: string[];
  culturalNote?: string;
  safetyNote?: string;
}

export const recipes: Recipe[] = [
  {
    slug: "fonio-jollof",
    title: "Fonio Jollof",
    subtitle: "West Africa's party rice, rebuilt on its oldest grain",
    foodSlugs: ["fonio"],
    region: "West Africa",
    country: "Nigeria, Guinea, Senegal",
    image: "/images/recipes/fonio-jollof.jpg",
    imageAlt: "West African jollof rice with fried plantain on a white plate",
    timeMinutes: 45,
    timeBand: "30-60",
    servings: "4",
    difficulty: "Medium",
    dietTags: ["gluten-free", "dairy-free", "vegetarian"],
    ingredients: [
      { item: "300 g dry fonio", note: "about 1 and a half cups" },
      { item: "3 large ripe tomatoes" },
      { item: "1 red bell pepper (tatashe)" },
      { item: "1 scotch bonnet pepper", note: "seeds removed for milder heat" },
      { item: "1 large onion, finely chopped" },
      { item: "2 tablespoons tomato paste" },
      { item: "3 tablespoons vegetable oil" },
      { item: "450 ml vegetable stock or water" },
      { item: "1 teaspoon curry powder" },
      { item: "1 teaspoon dried thyme" },
      { item: "2 bay leaves" },
      { item: "1 teaspoon ginger, grated" },
      { item: "2 cloves garlic, minced" },
      { item: "Salt to taste" },
      { item: "Fried plantain and sliced cucumber tomato salad, to serve" },
    ],
    steps: [
      {
        title: "Blend the pepper base",
        body: "Blend the tomatoes, bell pepper, scotch bonnet, ginger and garlic until smooth. Pour into a dry pot and boil down on medium heat for 10 to 12 minutes until the mixture thickens and darkens. This step builds the classic jollof depth.",
      },
      {
        title: "Fry the onions and paste",
        body: "In a separate wide pot, heat the oil and fry the chopped onion until soft and translucent, about 5 minutes. Add the tomato paste and fry for 4 to 5 minutes, stirring, until the oil turns red and the raw paste taste is gone.",
      },
      {
        title: "Build the stew",
        body: "Pour the reduced pepper blend into the paste and onions. Add curry powder, thyme, bay leaves and salt. Simmer for 10 minutes until the sauce is rich and the oil floats slightly on top.",
      },
      {
        title: "Rinse the fonio",
        body: "While the sauce simmers, rinse the fonio in a fine mesh sieve under cool water until the water runs mostly clear. Drain thoroughly.",
      },
      {
        title: "Steam the grain in the sauce",
        body: "Add the stock to the sauce and bring to a gentle boil. Stir in the drained fonio, reduce to the lowest heat, cover tightly and cook for 6 minutes. Turn off the heat and leave covered for 5 more minutes to finish steaming.",
      },
      {
        title: "Fluff and smoke (optional)",
        body: "Uncover, fluff gently with a fork. For a party smoky note, char a whole onion directly over a flame, drop it into the pot on a small saucer, cover for 5 minutes, then remove.",
      },
      {
        title: "Serve",
        body: "Serve hot with fried plantain, a crisp cucumber and tomato salad, and moi moi or fried chicken for a non vegetarian table.",
      },
    ],
    tips: [
      "Fonio cooks far faster than rice, so never boil it hard: low steam is the whole secret.",
      "The dish is naturally gluten free; check your stock cube label if gluten matters.",
      "Leftovers keep two days refrigerated and re-fluff with a splash of water.",
    ],
    culturalNote:
      "Jollof is a friendly rivalry across West Africa. This fonio version honors the grain that fed the region long before rice arrived, and is popular at modern parties in Conakry, Dakar and Lagos.",
  },
  {
    slug: "fonio-morning-porridge",
    title: "Fonio Morning Porridge with Banana and Peanut",
    subtitle: "A fifteen minute Sahel breakfast that travels well",
    foodSlugs: ["fonio"],
    region: "Sahel",
    country: "Mali, Burkina Faso, Senegal",
    image: "/images/recipes/fonio-morning-porridge.jpg",
    imageAlt: "Creamy fonio porridge in a bowl topped with banana slices and crushed peanuts",
    timeMinutes: 15,
    timeBand: "under-30",
    servings: "2",
    difficulty: "Easy",
    dietTags: ["vegetarian", "gluten-free", "under-30-minutes", "kid-friendly"],
    ingredients: [
      { item: "120 g dry fonio", note: "about half a cup plus 2 tablespoons" },
      { item: "600 ml water, milk or a mix" },
      { item: "1 ripe banana, sliced" },
      { item: "2 tablespoons roasted peanuts, crushed", note: "or peanut butter stirred in" },
      { item: "1 tablespoon honey or date syrup", note: "no honey for children under one year" },
      { item: "Pinch of salt" },
      { item: "Pinch of ground cinnamon or nutmeg, optional" },
    ],
    steps: [
      {
        title: "Rinse",
        body: "Rinse the fonio in a fine sieve until the water runs fairly clear.",
      },
      {
        title: "Simmer",
        body: "Bring the liquid and salt to a gentle boil, whisk in the fonio, then lower the heat and simmer 5 minutes, stirring often so it stays creamy.",
      },
      {
        title: "Rest and fluff",
        body: "Remove from heat, cover and stand 3 minutes. Stir once more; the porridge thickens as it cools, so loosen with a splash of warm milk if needed.",
      },
      {
        title: "Top and serve",
        body: "Divide into bowls, top with banana, crushed peanuts, a drizzle of honey and the spice if using.",
      },
    ],
    tips: [
      "Make it vegan with water or plant milk and date syrup.",
      "Stir in a spoon of baobab powder off the heat for a citrus lift.",
      "A double batch keeps three days in the fridge and reheats with extra milk.",
    ],
    culturalNote:
      "Across the Sahel, fonio porridge with fermented milk is the traditional morning bowl. This quick version keeps that spirit with ingredients any kitchen already has.",
  },
  {
    slug: "teff-injera-home-style",
    title: "Home Style Teff Injera",
    subtitle: "The fermented flatbread of the Horn, made in a home kitchen",
    foodSlugs: ["teff"],
    region: "Horn of Africa",
    country: "Ethiopia, Eritrea",
    image: "/images/recipes/teff-injera.jpg",
    imageAlt: "Spongy injera flatbread rolled and stacked with wot stew and salads on a platter",
    timeMinutes: 40,
    timeBand: "30-60",
    plusTimeNote: "plus 24 to 72 hours fermentation",
    servings: "8 to 10 flatbreads",
    difficulty: "Involved",
    dietTags: ["vegan", "gluten-free", "dairy-free", "batch-friendly"],
    ingredients: [
      { item: "500 g teff flour", note: "brown or a brown and white mix for deeper flavor" },
      { item: "1 liter lukewarm water, plus more as needed" },
      { item: "1 teaspoon instant yeast", note: "optional; traditional batches rely on wild fermentation" },
      { item: "Pinch of salt" },
    ],
    steps: [
      {
        title: "Mix the batter",
        body: "Whisk the teff flour with about 800 ml lukewarm water (and yeast if using) into a smooth, pourable batter the consistency of thin pancake batter. Use a glass or food grade plastic container, never metal that reacts.",
      },
      {
        title: "Ferment",
        body: "Cover loosely with a cloth and leave at room temperature for 24 to 72 hours. It is ready when the surface bubbles, the smell is pleasantly sour and fruity, and a darker liquid (ersho) pools on top. In a cool kitchen it takes longer; in a hot one, check at 24 hours.",
      },
      {
        title: "Decant and scald",
        body: "Pour off most of the ersho liquid and keep it. Ladle about 150 ml of batter into a small saucepan, add an equal splash of water and cook briefly until it thickens into a pale paste (the absit). Whisk the absit back into the batter with the salt; this gives injera its signature spongy holes.",
      },
      {
        title: "Rest",
        body: "Let the finished batter rest 30 minutes. It should pour like crepe batter; thin with a little water if heavy.",
      },
      {
        title: "Cook",
        body: "Heat a large non stick pan or traditional mitad over medium heat. Pour a ladle of batter, quickly swirling from the outside in to coat thinly. Cover and cook 2 to 3 minutes. Injera steams rather than browns: the top should set with many small eyes and the edges lift.",
      },
      {
        title: "Cool and roll",
        body: "Slide each injera onto a clean cloth or mesob lined tray to cool without steaming itself soggy. Roll or fold and serve with wot stews, salads and shiro.",
      },
    ],
    tips: [
      "No teff flour? A 50:50 teff and wheat blend ferments faster and is a common diaspora compromise, though it is no longer gluten free.",
      "Keep a cup of fermented batter as a starter for your next batch and fermentation drops to about 12 hours.",
      "Injera freezes well between parchment sheets for up to two months.",
    ],
    safetyNote:
      "Ferment at cool room temperature in clean containers. If the batter smells putrid, grows pink or black mold, or the kitchen is very hot, discard and restart. Refrigerate ferments in warm weather.",
    culturalNote:
      "Injera is table and utensil: meals are shared from one platter and torn with the right hand. Offering a rolled piece of injera and stew (a gursha) to a guest is a gesture of affection.",
  },
  {
    slug: "teff-porridge-with-banana",
    title: "Teff Porridge with Banana and Honey",
    subtitle: "Highland comfort in a twenty five minute bowl",
    foodSlugs: ["teff"],
    region: "Horn of Africa",
    country: "Ethiopia, Eritrea",
    image: "/images/recipes/teff-porridge.jpg",
    imageAlt: "Overhead view of a porridge bowl topped with fruit and nuts",
    timeMinutes: 25,
    timeBand: "under-30",
    servings: "2",
    difficulty: "Easy",
    dietTags: ["vegetarian", "gluten-free", "under-30-minutes", "kid-friendly"],
    ingredients: [
      { item: "100 g whole teff grain", note: "about half a cup; teff flour also works" },
      { item: "500 ml water or milk" },
      { item: "1 banana, sliced" },
      { item: "1 to 2 tablespoons honey" },
      { item: "Pinch of salt" },
      { item: "Pinch of cardamom or cinnamon, optional" },
      { item: "Toasted sesame or sunflower seeds, to finish" },
    ],
    steps: [
      {
        title: "Toast (optional)",
        body: "Dry toast the whole teff in a pan over medium heat for 2 to 3 minutes until it smells nutty and pops faintly. This deepens the malt flavor.",
      },
      {
        title: "Simmer",
        body: "Add the liquid and salt, bring to a boil, then reduce to low and simmer 18 to 20 minutes, stirring often, until thick and creamy like polenta. With teff flour, whisk into warm liquid and cook 8 to 10 minutes instead.",
      },
      {
        title: "Finish",
        body: "Stir in the spice if using, divide into bowls, and top with banana, honey and toasted seeds.",
      },
    ],
    tips: [
      "Whole teff keeps a pleasant slight crunch; flour makes a silkier bowl.",
      "Make it vegan with plant milk and date syrup.",
      "Thin leftovers with milk for a teff smoothie base the next morning.",
    ],
    culturalNote:
      "Porridge (kolo style toasted grain gruels and genfo's lighter cousins) is the highland morning. Teff porridge carries the same iron rich grain into the simplest daily meal.",
  },
  {
    slug: "moringa-greens-with-groundnut",
    title: "Moringa Leaves in Groundnut Sauce",
    subtitle: "Zogale style greens with a rich peanut base",
    foodSlugs: ["moringa"],
    region: "West Africa",
    country: "Nigeria, Ghana",
    image: "/images/recipes/moringa-groundnut.jpg",
    imageAlt: "A leafy greens and stew dish served in a leaf shaped bowl",
    timeMinutes: 25,
    timeBand: "under-30",
    servings: "4 as a side",
    difficulty: "Easy",
    dietTags: ["vegan", "gluten-free", "dairy-free", "under-30-minutes"],
    ingredients: [
      { item: "300 g fresh moringa leaves", note: "stripped from stems; 40 g dried powder can replace them" },
      { item: "150 g smooth peanut butter", note: "unsweetened, or ground roasted peanuts" },
      { item: "1 onion, chopped" },
      { item: "2 tomatoes, chopped" },
      { item: "1 scotch bonnet or habanero, to taste" },
      { item: "2 tablespoons vegetable oil" },
      { item: "300 ml water or light stock" },
      { item: "Salt to taste" },
      { item: "Pinch of potash (kanwa) or baking soda, optional", note: "traditional softener; use sparingly" },
    ],
    steps: [
      {
        title: "Build the base",
        body: "Heat the oil and fry the onion until soft, 4 minutes. Add tomatoes and the whole pepper and cook 6 to 8 minutes until the mixture thickens and the oil separates slightly.",
      },
      {
        title: "Melt the peanut",
        body: "Whisk the peanut butter with the warm water until smooth, then pour into the pot. Simmer gently 5 minutes, stirring, until the sauce coats a spoon. Add the potash if using.",
      },
      {
        title: "Wilt the greens",
        body: "Stir in the moringa leaves and cook just 3 to 5 minutes until wilted and bright green. With dried powder, stir it in off the boil at the very end.",
      },
      {
        title: "Season and serve",
        body: "Taste for salt and heat. Serve with tuwo, rice, fonio or boiled yam.",
      },
    ],
    tips: [
      "Do not overcook the leaves; long boiling dulls color and vitamin C.",
      "Allergy note: this recipe contains peanut. Substitute sunflower seed butter where needed.",
      "A squeeze of lime at the table brightens the whole dish.",
    ],
    culturalNote:
      "In Hausa cooking zogale (moringa) is market fresh and everyday, most often cooked in groundnut sauce. This version keeps the classic pairing and works with fresh or dried leaves.",
  },
  {
    slug: "moringa-lentil-soup",
    title: "Moringa and Red Lentil Soup",
    subtitle: "A weeknight pot that bridges Nairobi and the diaspora",
    foodSlugs: ["moringa"],
    region: "East Africa",
    country: "Kenya, diaspora kitchens",
    image: "/images/recipes/moringa-lentil-soup.jpg",
    imageAlt: "Green flecked red lentil soup in a rustic bowl with lemon and chili oil",
    timeMinutes: 35,
    timeBand: "30-60",
    servings: "4",
    difficulty: "Easy",
    dietTags: ["vegan", "gluten-free", "dairy-free", "batch-friendly"],
    ingredients: [
      { item: "200 g red lentils, rinsed" },
      { item: "100 g fresh moringa leaves or 3 tablespoons powder" },
      { item: "1 onion, diced" },
      { item: "2 carrots, diced" },
      { item: "3 cloves garlic, minced" },
      { item: "1 teaspoon ground cumin" },
      { item: "1 teaspoon ground coriander" },
      { item: "Half teaspoon turmeric" },
      { item: "1.2 liters vegetable stock" },
      { item: "2 tablespoons oil" },
      { item: "Juice of half a lemon" },
      { item: "Salt, black pepper, chili flakes to taste" },
    ],
    steps: [
      {
        title: "Sweat the aromatics",
        body: "In a soup pot, fry the onion and carrot in oil until soft, 6 minutes. Add garlic and the ground spices and stir 1 minute until fragrant.",
      },
      {
        title: "Simmer the lentils",
        body: "Add the lentils and stock, bring to a boil, then simmer uncovered 15 to 18 minutes until the lentils collapse and the soup thickens.",
      },
      {
        title: "Add the moringa late",
        body: "Stir in fresh leaves and cook 3 minutes more, or stir powder in off the heat. Keep the greens bright.",
      },
      {
        title: "Finish",
        body: "Season with salt, pepper, lemon juice and chili. Serve with bread, chapati or a scoop of fonio.",
      },
    ],
    tips: [
      "Blend half the pot for a creamy texture without any cream.",
      "Freezes well for a month; stir in the moringa fresh after reheating for best color.",
      "Add diced sweet potato with the lentils for a heartier bowl.",
    ],
    culturalNote:
      "Kenyan home cooks use mlonge (moringa) in soups and stir fries, especially in dryland counties where the tree stays green when gardens struggle. Lentils make this a complete, travel friendly meal.",
  },
  {
    slug: "baobab-smoothie-bowl",
    title: "Baobab Smoothie Bowl",
    subtitle: "Sahel tartness meets modern breakfast",
    foodSlugs: ["baobab"],
    region: "Sahel",
    country: "Senegal, Mali, diaspora kitchens",
    image: "/images/recipes/baobab-smoothie-bowl.jpg",
    imageAlt: "Thick smoothie bowl topped with mango, granola and baobab powder dusting",
    timeMinutes: 10,
    timeBand: "under-30",
    servings: "1 generous bowl",
    difficulty: "Easy",
    dietTags: ["vegetarian", "gluten-free", "under-30-minutes", "kid-friendly"],
    ingredients: [
      { item: "1 frozen banana" },
      { item: "150 g frozen mango chunks" },
      { item: "120 ml yogurt or plant yogurt" },
      { item: "2 teaspoons baobab fruit powder", note: "or pulp from 2 pods, sieved" },
      { item: "1 teaspoon honey, optional" },
      { item: "Toppings: granola, toasted millet or fonio flakes, coconut, fresh fruit" },
    ],
    steps: [
      {
        title: "Blend thick",
        body: "Blend the frozen fruit, yogurt and baobab powder until thick and smooth. Add liquid a spoon at a time; a bowl wants it thicker than a drink.",
      },
      {
        title: "Taste and adjust",
        body: "Baobab is tart. Sweeten lightly with honey if you like, remembering the toppings add sweetness too.",
      },
      {
        title: "Top and serve",
        body: "Spoon into a chilled bowl and arrange toppings in stripes. Eat immediately.",
      },
    ],
    tips: [
      "Swap mango for papaya or pineapple for a different Sahel fruit profile.",
      "Stir a spoon of moringa powder in for a green version, and reduce baobab to one teaspoon.",
      "Vegan: use coconut yogurt and maple or date syrup.",
    ],
    culturalNote:
      "Baobab pulp dissolved in milk with sugar is the classic Senegalese bouye drink. This bowl keeps the tart sherbet character and gives it breakfast bowl form.",
  },
  {
    slug: "baobab-ginger-cooler",
    title: "Baobab Ginger Cooler",
    subtitle: "The dry season refresher of the Sahel markets",
    foodSlugs: ["baobab"],
    region: "Sahel",
    country: "Senegal, Burkina Faso, Mali",
    image: "/images/recipes/baobab-cooler.jpg",
    imageAlt: "Two glasses of a creamy pale plant based drink on a white table",
    timeMinutes: 15,
    timeBand: "under-30",
    plusTimeNote: "plus chilling time",
    servings: "4 glasses",
    difficulty: "Easy",
    dietTags: ["vegetarian", "gluten-free", "under-30-minutes", "batch-friendly"],
    ingredients: [
      { item: "4 tablespoons baobab powder", note: "or pulp of 6 to 8 pods" },
      { item: "1 liter cold water or milk" },
      { item: "30 g fresh ginger, grated" },
      { item: "3 to 4 tablespoons sugar or honey, to taste" },
      { item: "Juice of 1 lime, optional" },
      { item: "Mint sprigs and ice, to serve" },
    ],
    steps: [
      {
        title: "Steep the ginger",
        body: "Warm 200 ml of the liquid with the grated ginger until steaming, then leave to infuse 10 minutes. Strain.",
      },
      {
        title: "Dissolve the baobab",
        body: "Whisk the baobab powder into the warm ginger infusion until smooth, then stir in the remaining cold liquid and the sweetener.",
      },
      {
        title: "Chill and serve",
        body: "Refrigerate at least an hour. Shake or stir well before pouring over ice with mint and a squeeze of lime.",
      },
    ],
    tips: [
      "With milk this becomes close to Senegalese bouye; with water it is lighter and fully vegan.",
      "The drink separates as it stands; a quick shake fixes it.",
      "Keep chilled and drink within two days.",
    ],
    culturalNote:
      "Baobab drinks are sold from gourds and jugs in Sahel markets through the hot season. The pulp's natural tartness means the drink refreshes with less sugar than many fruit drinks.",
  },
  {
    slug: "sorghum-ugali-with-sukuma",
    title: "Sorghum Ugali with Sukuma Wiki",
    subtitle: "The East African everyday plate, in its drought hardy version",
    foodSlugs: ["sorghum"],
    region: "East Africa",
    country: "Kenya, Tanzania",
    image: "/images/recipes/sorghum-ugali-sukuma.jpg",
    imageAlt: "A bowl of firm maize style porridge with seasoned greens and stew",
    timeMinutes: 40,
    timeBand: "30-60",
    servings: "4",
    difficulty: "Easy",
    dietTags: ["vegan", "gluten-free", "dairy-free"],
    ingredients: [
      { item: "300 g sorghum meal", note: "or half sorghum, half maize meal for a milder start" },
      { item: "900 ml water" },
      { item: "1 bunch sukuma wiki (collard greens), thinly sliced" },
      { item: "1 onion, sliced" },
      { item: "2 tomatoes, diced" },
      { item: "3 tablespoons oil" },
      { item: "Salt to taste" },
      { item: "Chili or pilipili sauce, to serve" },
    ],
    steps: [
      {
        title: "Boil the water",
        body: "Bring the water with a pinch of salt to a rolling boil in a heavy pot.",
      },
      {
        title: "Stream in the meal",
        body: "Reduce to medium and add the sorghum meal gradually, stirring constantly with a wooden paddle (mwiko) to avoid lumps.",
      },
      {
        title: "Cook and beat",
        body: "Keep stirring and pressing the ugali against the pot sides for 8 to 10 minutes until it pulls away from the pot, deepens in color and holds a firm mound. Beat it vigorously for the classic smooth texture.",
      },
      {
        title: "Rest and shape",
        body: "Turn out onto a board, cover and rest 5 minutes, then shape into mounds with wet hands.",
      },
      {
        title: "Cook the sukuma",
        body: "While the ugali rests, fry the onion in oil until soft, add tomatoes and cook down 5 minutes, then wilt the greens 5 to 7 minutes with a splash of water. Season well.",
      },
      {
        title: "Serve",
        body: "Serve ugali hot with the greens on the side and chili for the table. Eat with hands: pinch, roll, dent and scoop.",
      },
    ],
    tips: [
      "Pure sorghum ugali is darker, denser and earthier than maize; blending meals is the gentle introduction.",
      "Leftover ugali slices and fries beautifully for breakfast.",
      "Add spinach or amaranth (mchicha) if collards are unavailable.",
    ],
    culturalNote:
      "Ugali and sukuma wiki is the daily plate across East Africa. Sorghum versions belong to the drier counties and to families keeping climate hardy grains on the table.",
  },
  {
    slug: "sorghum-harvest-salad",
    title: "Whole Sorghum Harvest Salad",
    subtitle: "Chewy red sorghum with roasted squash and peanuts",
    foodSlugs: ["sorghum"],
    region: "Pan African",
    country: "City kitchens, continent wide",
    image: "/images/recipes/sorghum-salad.jpg",
    imageAlt: "A grain and vegetable salad bowl with carrots and peppers",
    timeMinutes: 60,
    timeBand: "30-60",
    plusTimeNote: "plus overnight soaking recommended",
    servings: "4 as a main, 6 as a side",
    difficulty: "Easy",
    dietTags: ["vegan", "gluten-free", "dairy-free", "batch-friendly"],
    ingredients: [
      { item: "250 g whole sorghum grain", note: "soaked overnight, or quick soaked 2 hours in hot water" },
      { item: "400 g butternut or pumpkin, cubed" },
      { item: "2 tablespoons oil, divided" },
      { item: "100 g baby spinach or chopped kale" },
      { item: "1 red onion, thinly sliced" },
      { item: "60 g roasted peanuts, roughly chopped" },
      { item: "Dressing: 3 tablespoons peanut butter, juice of 1 lime, 1 teaspoon honey or date syrup, 1 grated garlic clove, warm water to loosen, salt and chili to taste" },
    ],
    steps: [
      {
        title: "Cook the sorghum",
        body: "Drain the soaked grain, cover with fresh water, and simmer 45 to 55 minutes until tender but chewy, like al dente wheat berries. Drain and cool slightly. (Pressure cooker: about 25 minutes.)",
      },
      {
        title: "Roast the squash",
        body: "Toss the cubes with 1 tablespoon oil and salt and roast at 200 C for 25 minutes until golden at the edges.",
      },
      {
        title: "Whisk the dressing",
        body: "Blend the peanut butter, lime, honey, garlic and warm water into a pourable dressing. Season with salt and chili.",
      },
      {
        title: "Assemble",
        body: "Fold the warm sorghum with the dressing first so the grain absorbs it, then add squash, greens, onion and peanuts. Toss gently and serve warm or at room temperature.",
      },
    ],
    tips: [
      "Cooked sorghum keeps five days refrigerated; dress only what you serve.",
      "Swap peanuts for toasted sesame or sunflower seeds for a nut free bowl.",
      "A handful of dried hibiscus steeped in the cooking water tints the grain ruby.",
    ],
    culturalNote:
      "Whole grain sorghum salads are the new face of an ancient staple, appearing on menus from Nairobi to Accra as chefs rediscover the grain's texture.",
  },
  {
    slug: "pearl-millet-fura",
    title: "Fura with Nono Style Fermented Milk",
    subtitle: "Hausaland's spiced millet balls, the classic street pairing",
    foodSlugs: ["pearl-millet"],
    region: "West Africa",
    country: "Nigeria, Niger",
    image: "/images/recipes/pearl-millet-fura.jpg",
    imageAlt: "A breakfast setting with a bowl of creamy grain porridge and nuts",
    timeMinutes: 50,
    timeBand: "30-60",
    plusTimeNote: "plus soaking; milk fermenting 12 to 24 hours if making nono",
    servings: "6",
    difficulty: "Medium",
    dietTags: ["vegetarian", "gluten-free"],
    ingredients: [
      { item: "400 g pearl millet flour", note: "from soaked, dried and milled grain, or good quality millet meal" },
      { item: "1 teaspoon ground ginger" },
      { item: "Half teaspoon ground cloves" },
      { item: "Pinch of chili, optional" },
      { item: "Salt to taste" },
      { item: "Water, warm" },
      { item: "1 liter fermented milk (nono)", note: "or plain unsweetened yogurt thinned with milk" },
      { item: "Honey or sugar, optional, to taste" },
    ],
    steps: [
      {
        title: "Mix the dough",
        body: "Combine the millet flour, spices and salt. Add warm water gradually, kneading into a firm, smooth dough like bread dough. Rest 10 minutes.",
      },
      {
        title: "Shape and steam",
        body: "Divide into balls the size of a lime. Steam in a lined steamer or colander over boiling water for 25 to 30 minutes until firm and cooked through.",
      },
      {
        title: "Pound or blend",
        body: "Traditionally the hot balls are pounded in a mortar with a little warm water into a soft, stretchy mass, then re-shaped into smooth balls. A stand mixer with a paddle does the same job.",
      },
      {
        title: "Serve with nono",
        body: "Drop a fura ball into a glass or calabash of cold fermented milk, crush it with a spoon, sweeten lightly if you like, and drink and eat together.",
      },
    ],
    tips: [
      "Making true nono at home: warm fresh milk to body temperature, pour into a clean gourd or jar previously used for fermentation (or add a spoon of live yogurt as starter), wrap warm and leave 12 to 24 hours. Keep everything scrupulously clean.",
      "Fura keeps two days wrapped; refresh by steaming briefly.",
      "For a quick city version, many sellers blend fura straight into chilled yogurt drinks.",
    ],
    safetyNote:
      "Fermented dairy needs clean equipment and cool storage. If the milk smells off beyond sour, separates grey or shows mold, discard it. Boil raw milk before fermenting unless you have a trusted pasteurized source.",
    culturalNote:
      "Fura da nono is shared from one calabash between friends and travelers across Hausaland. It is meal, drink and handshake at once.",
  },
  {
    slug: "thiacry-style-millet-couscous",
    title: "Thiakry Style Sweet Millet Couscous",
    subtitle: "Senegal's beloved dessert couscous with soured milk",
    foodSlugs: ["pearl-millet"],
    region: "West Africa",
    country: "Senegal, Mali",
    image: "/images/recipes/thiakry-couscous.jpg",
    imageAlt: "Fine couscous style grains with herbs in a glass bowl",
    timeMinutes: 30,
    timeBand: "under-30",
    servings: "4",
    difficulty: "Medium",
    dietTags: ["vegetarian", "gluten-free"],
    ingredients: [
      { item: "250 g millet couscous (thiéré)", note: "or very coarse semolina-style millet granules" },
      { item: "300 ml yogurt or soured milk" },
      { item: "100 ml cream or coconut cream, optional" },
      { item: "3 tablespoons sugar or honey, to taste" },
      { item: "1 teaspoon vanilla" },
      { item: "Half teaspoon nutmeg, freshly grated" },
      { item: "60 g raisins or dried dates, chopped" },
      { item: "Pinch of salt" },
    ],
    steps: [
      {
        title: "Dampen the couscous",
        body: "Sprinkle the millet couscous with a few tablespoons of water, rub gently between your palms so the granules are evenly damp, and rest 5 minutes.",
      },
      {
        title: "Steam",
        body: "Steam in a couscoussier or lined colander over simmering water for 12 to 15 minutes. Fluff once halfway with a fork and a sprinkle of water.",
      },
      {
        title: "Make the sauce",
        body: "Whisk the yogurt, cream, sugar, vanilla and nutmeg until smooth and pourable.",
      },
      {
        title: "Combine and chill",
        body: "Fold the warm couscous and raisins into the sauce, cool to room temperature, then chill. Serve cold, dusted with a little extra nutmeg.",
      },
    ],
    tips: [
      "Thiakry tastes better after an hour in the fridge as the granules drink the sauce.",
      "Vegan: coconut yogurt and date syrup work beautifully.",
      "Add baobab powder to the sauce for the tangy Senegalese twist.",
    ],
    culturalNote:
      "Thiakry (also written thiacry) is Dakar's celebration dessert, sold in cups at every corner and made at home for Tabaski and family Fridays. It turns humble millet into feast food.",
  },
  {
    slug: "finger-millet-uji",
    title: "Fermented Wimbi Uji",
    subtitle: "East Africa's cocoa brown breakfast porridge",
    foodSlugs: ["finger-millet"],
    region: "East Africa",
    country: "Kenya, Uganda, Tanzania",
    image: "/images/recipes/finger-millet-uji.jpg",
    imageAlt: "A porridge bowl topped with banana slices and creamy sauce",
    timeMinutes: 20,
    timeBand: "under-30",
    plusTimeNote: "plus 12 to 24 hours fermentation (optional but classic)",
    servings: "4 cups",
    difficulty: "Easy",
    dietTags: ["vegetarian", "gluten-free", "under-30-minutes", "kid-friendly"],
    ingredients: [
      { item: "120 g finger millet flour (wimbi)" },
      { item: "1 liter water" },
      { item: "Milk, honey or sugar, to finish" },
      { item: "Pinch of salt" },
      { item: "Cinnamon or cardamom, optional" },
    ],
    steps: [
      {
        title: "Ferment (classic method)",
        body: "Mix the flour with 500 ml cool water in a clean jar, cover loosely and leave at room temperature 12 to 24 hours until gently bubbly and tangy. In a hot kitchen, 12 hours is plenty; refrigerate if going longer.",
      },
      {
        title: "Make the slurry",
        body: "If skipping fermentation, simply whisk the flour with the cool water until completely smooth. No lumps survives a good whisk.",
      },
      {
        title: "Cook",
        body: "Bring the remaining water to a boil with the salt. Pour in the slurry in a steady stream while stirring hard. Simmer on low 5 to 8 minutes, stirring often, until glossy and thickened. The porridge darkens to a rich brown.",
      },
      {
        title: "Finish",
        body: "Loosen with milk to drinking consistency, sweeten with honey or sugar, and add spice if you like. Serve hot in cups.",
      },
    ],
    tips: [
      "Uji is drunk, not chewed: aim for a pouring consistency.",
      "For children, enrich with milk and a little oil or groundnut flour; follow local health guidance for infants.",
      "A spoon of peanut butter stirred in makes it a meal.",
    ],
    safetyNote:
      "Ferment in clean containers at cool room temperature and refrigerate the result. Discard any ferment with pink, black or fuzzy mold or a putrid smell.",
    culturalNote:
      "Uji wa wimbi is the porridge of Kenyan childhoods, hospital trays and 6 am streets. Finger millet's calcium and gentle fermentation make it the grain families trust for the young, the old and the recovering.",
  },
  {
    slug: "wimbi-honey-porridge-bowl",
    title: "Wimbi Honey Porridge Bowl",
    subtitle: "Thick finger millet porridge, breakfast bowl style",
    foodSlugs: ["finger-millet"],
    region: "East Africa",
    country: "Kenya, Tanzania",
    image: "/images/recipes/wimbi-porridge-bowl.jpg",
    imageAlt: "A porridge bowl topped with citrus slices and crunchy nuts",
    timeMinutes: 25,
    timeBand: "under-30",
    servings: "2",
    difficulty: "Easy",
    dietTags: ["vegetarian", "gluten-free", "under-30-minutes", "kid-friendly"],
    ingredients: [
      { item: "100 g finger millet flour" },
      { item: "500 ml water or milk, plus extra" },
      { item: "2 tablespoons honey" },
      { item: "1 banana, sliced" },
      { item: "2 tablespoons crushed peanuts or toasted sesame" },
      { item: "Pinch of salt and cinnamon" },
    ],
    steps: [
      {
        title: "Slurry",
        body: "Whisk the flour smooth in 200 ml cool liquid.",
      },
      {
        title: "Cook thick",
        body: "Bring the remaining liquid to a boil with salt and cinnamon, stream in the slurry while stirring, and cook on low 8 to 10 minutes until it holds soft peaks like thick custard.",
      },
      {
        title: "Bowl it",
        body: "Spoon into bowls, swirl in honey, and top with banana and peanuts.",
      },
    ],
    tips: [
      "This is uji's thicker cousin; add milk to slide it back into drinking porridge.",
      "Stir in an egg at the end off the heat for a protein boost, whisking fast.",
      "Millet porridge sets firmly when cold; rewarm with a splash of milk.",
    ],
    culturalNote:
      "Highland kitchens often cook wimbi thicker for children to eat with a spoon. Honey and peanuts are the traditional toppers before breakfast cereals arrived.",
  },
  {
    slug: "zobo-hibiscus-cooler",
    title: "Zobo Hibiscus Cooler",
    subtitle: "Nigeria's ruby party drink, ginger sharp and pineapple sweet",
    foodSlugs: ["hibiscus"],
    region: "West Africa",
    country: "Nigeria, Ghana, Senegal",
    image: "/images/recipes/zobo-cooler.jpg",
    imageAlt: "Deep red iced zobo hibiscus drink in glasses with pineapple and mint",
    timeMinutes: 30,
    timeBand: "under-30",
    plusTimeNote: "plus chilling",
    servings: "2 liters",
    difficulty: "Easy",
    dietTags: ["vegan", "gluten-free", "dairy-free", "batch-friendly", "under-30-minutes"],
    ingredients: [
      { item: "80 g dried hibiscus calyxes", note: "about 3 heaping cups" },
      { item: "Peel of 1 pineapple", note: "washed well; or 200 g pineapple flesh" },
      { item: "50 g fresh ginger, sliced" },
      { item: "6 cloves" },
      { item: "1 stick cinnamon, optional" },
      { item: "150 to 200 g sugar, honey or dates, to taste" },
      { item: "2.5 liters water" },
      { item: "Juice of 1 orange or lime, optional" },
    ],
    steps: [
      {
        title: "Rinse the calyxes",
        body: "Rinse the dried hibiscus briefly in cool water to lift any dust.",
      },
      {
        title: "Boil the aromatics",
        body: "In a large pot, bring the water to a boil with the pineapple peel, ginger, cloves and cinnamon. Boil 10 minutes so the aromatics release.",
      },
      {
        title: "Steep the hibiscus",
        body: "Add the hibiscus, reduce to a gentle simmer and cook 8 to 10 minutes until deeply colored. Do not boil hard; the color dulls.",
      },
      {
        title: "Sweeten and strain",
        body: "Stir in the sweetener until dissolved, then strain through a fine sieve into a jug. Add citrus juice if using.",
      },
      {
        title: "Chill and serve",
        body: "Cool, then refrigerate until ice cold. Serve over ice with a pineapple wedge or mint.",
      },
    ],
    tips: [
      "Less sugar, more aroma: cut the sugar and boost ginger and pineapple.",
      "Zobo keeps 3 to 4 days refrigerated; freeze leftovers into ice cubes for pink lemonades.",
      "Sparkling zobo with soda water is a modern party favorite.",
    ],
    culturalNote:
      "Zobo flows at Nigerian weddings, birthdays and street corners alike. Its Senegalese cousin bissap and Ghanaian sobolo share the same ruby heart with local accents of mint, vanilla or orange blossom.",
  },
  {
    slug: "amaranth-mchicha-coconut",
    title: "Mchicha in Coconut Milk",
    subtitle: "The Swahili coast's creamy green side",
    foodSlugs: ["amaranth"],
    region: "East Africa",
    country: "Kenya, Tanzania",
    image: "/images/recipes/amaranth-mchicha.jpg",
    imageAlt: "Leafy greens simmering in a bubbling pot on the stove",
    timeMinutes: 20,
    timeBand: "under-30",
    servings: "4 as a side",
    difficulty: "Easy",
    dietTags: ["vegan", "gluten-free", "dairy-free", "under-30-minutes"],
    ingredients: [
      { item: "600 g amaranth leaves (mchicha), stems trimmed" },
      { item: "1 onion, finely chopped" },
      { item: "2 tomatoes, diced" },
      { item: "200 ml coconut milk" },
      { item: "2 tablespoons coconut or vegetable oil" },
      { item: "1 clove garlic, minced" },
      { item: "Salt and black pepper" },
      { item: "Chili to taste, optional" },
    ],
    steps: [
      {
        title: "Wash thoroughly",
        body: "Wash the leaves in several changes of water; amaranth hides grit. Shake dry and chop roughly.",
      },
      {
        title: "Fry the base",
        body: "Soften the onion in oil, 4 minutes. Add garlic and tomatoes and fry until the tomatoes collapse, 5 minutes.",
      },
      {
        title: "Wilt the greens",
        body: "Add the leaves in handfuls, stirring as they wilt, and cook 4 to 5 minutes until tender and deep green.",
      },
      {
        title: "Coconut finish",
        body: "Pour in the coconut milk, simmer gently 3 minutes without hard boiling, and season. Serve with ugali, rice or grilled fish.",
      },
    ],
    tips: [
      "Spinach or kale work in a pinch, but amaranth's earthy sweetness is the real coast flavor.",
      "A squeeze of lime cuts the richness.",
      "Leftovers are delicious folded into eggs the next morning.",
    ],
    culturalNote:
      "From Mombasa to Dar es Salaam, mchicha wa nazi is home cooking at its purest: a green from the backyard, coconut from the coast, and ugali on the side.",
  },
  {
    slug: "amaranth-harvest-porridge",
    title: "Amaranth Grain Harvest Porridge",
    subtitle: "Highland pseudocereal, popped and simmered",
    foodSlugs: ["amaranth"],
    region: "East Africa",
    country: "Ethiopia, Kenya",
    image: "/images/recipes/amaranth-porridge.jpg",
    imageAlt: "A candlelit bowl of creamy porridge topped with berries and granola",
    timeMinutes: 30,
    timeBand: "under-30",
    servings: "3",
    difficulty: "Easy",
    dietTags: ["vegetarian", "gluten-free", "under-30-minutes"],
    ingredients: [
      { item: "150 g amaranth grain" },
      { item: "600 ml water or milk" },
      { item: "1 tablespoon honey or date syrup" },
      { item: "Pinch of salt" },
      { item: "Dried fruit, toasted seeds or coconut, to top" },
    ],
    steps: [
      {
        title: "Toast or pop",
        body: "Dry toast the grain in a hot pan 2 to 3 minutes until it crackles and smells nutty. Some grains will pop like tiny popcorn; that is the point.",
      },
      {
        title: "Simmer",
        body: "Add the liquid and salt, bring to a boil, then simmer 20 to 25 minutes, stirring occasionally, until creamy with a gentle crunch.",
      },
      {
        title: "Sweeten and serve",
        body: "Stir in the honey, rest 2 minutes, and serve topped with fruit and seeds.",
      },
    ],
    tips: [
      "Amaranth thickens a lot as it cools; keep extra warm milk on the side.",
      "Blend cooked amaranth porridge smooth for a toddler friendly bowl (check temperature carefully).",
      "Popped amaranth alone, mixed with honey, is the traditional highland snack bar.",
    ],
    culturalNote:
      "Grain amaranth has been quietly harvested in Ethiopian and Kenyan highlands for generations, valued as a fast, hardy crop that feeds families between maize harvests.",
  },
  {
    slug: "okpa-steamed-bambara-pudding",
    title: "Okpa: Steamed Bambara Pudding",
    subtitle: "Enugu's golden street classic, made at home",
    foodSlugs: ["bambara-groundnut"],
    region: "West Africa",
    country: "Nigeria (Igbo)",
    image: "/images/recipes/okpa-pudding.jpg",
    imageAlt: "A slice of steamed pudding resting on a wooden table",
    timeMinutes: 90,
    timeBand: "over-60",
    plusTimeNote: "plus overnight soaking if starting from whole beans",
    servings: "6 wraps",
    difficulty: "Involved",
    dietTags: ["vegan", "gluten-free", "dairy-free"],
    ingredients: [
      { item: "400 g bambara flour", note: "or 400 g whole beans, soaked overnight, skins rubbed off, blended fine" },
      { item: "3 tablespoons red palm oil" },
      { item: "1 teaspoon salt" },
      { item: "1 teaspoon ground crayfish, optional (omit for vegan)" },
      { item: "1 scotch bonnet or chili powder, to taste" },
      { item: "400 to 500 ml warm water" },
      { item: "Banana leaves or heat safe food wraps for steaming" },
    ],
    steps: [
      {
        title: "Prepare the leaves",
        body: "Wilt banana leaves over a low flame or in hot water until pliable, wipe clean, and cut into 25 cm squares. If using heat safe wraps or foil, have them ready.",
      },
      {
        title: "Mix the batter",
        body: "Whisk the bambara flour, palm oil, salt, crayfish and chili with warm water into a smooth, pourable batter like thick pancake batter. Palm oil must emulsify fully; whisk hard.",
      },
      {
        title: "Wrap",
        body: "Ladle about 150 ml of batter into each leaf or wrap and fold or tie securely into flat parcels.",
      },
      {
        title: "Steam or boil",
        body: "Steam the parcels 50 to 60 minutes, or simmer them fully submerged in water 60 to 75 minutes. Okpa is done when firm to the touch and golden orange all the way through; a skewer should come out clean.",
      },
      {
        title: "Serve hot",
        body: "Okpa is at its best hot from the pot, in its wrap, with extra chili. It firms up as it cools and can be reheated by steaming.",
      },
    ],
    tips: [
      "Bambara flour is sold in Nigerian markets and online; from whole beans, blend soaked and de-skinned beans with a little of the water until silky.",
      "The batter must be smooth; gritty okpa means the blend needs another minute.",
      "Vegan okpa is traditional: the classic version is already plant based when crayfish is left out.",
    ],
    safetyNote:
      "Use banana leaves or wraps intended for hot food. Avoid ordinary plastic bags, which can leach into hot food.",
    culturalNote:
      "Okpa sellers in Enugu and Onitsha are famous, and the dish is a point of Igbo pride, sold from dawn at motor parks and served at ceremonies. Bambara itself is grown quietly across the savannah as a drought insurance crop.",
  },
];

export const recipeBySlug = new Map(recipes.map((r) => [r.slug, r]));

export function getRecipe(slug: string): Recipe | undefined {
  return recipeBySlug.get(slug);
}

export const dietTagLabels: Record<DietTag, string> = {
  vegan: "Vegan",
  vegetarian: "Vegetarian",
  "gluten-free": "Gluten free",
  "dairy-free": "Dairy free",
  "under-30-minutes": "Under 30 minutes",
  "batch-friendly": "Batch friendly",
  "kid-friendly": "Family friendly",
};

export const timeBandLabels: Record<TimeBand, string> = {
  "under-30": "Under 30 minutes",
  "30-60": "30 to 60 minutes",
  "over-60": "Over an hour",
};
