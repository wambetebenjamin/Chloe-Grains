export type FoodCategory =
  | "Grain"
  | "Pseudocereal"
  | "Legume"
  | "Leaf"
  | "Fruit botanical"
  | "Flower botanical";

export type RegionKey =
  | "West Africa"
  | "Sahel"
  | "East Africa"
  | "Horn of Africa"
  | "Southern Africa"
  | "Pan African";

export interface Food {
  slug: string;
  name: string;
  scientificName: string;
  category: FoodCategory;
  localNames: { name: string; language: string }[];
  regions: RegionKey[];
  countries: string[];
  image: string;
  imageAlt: string;
  tagline: string;
  intro: string;
  origin: string;
  nutritionHighlights: string[];
  traditionalUses: string[];
  modernUses: string[];
  flavor: string;
  cookingNotes: { title: string; body: string }[];
  resilience: string;
  culture: string;
  recipeSlugs: string[];
}

export const foods: Food[] = [
  {
    slug: "fonio",
    name: "Fonio",
    scientificName: "Digitaria exilis",
    category: "Grain",
    localNames: [
      { name: "Acha", language: "Hausa" },
      { name: "Findi", language: "Wolof" },
      { name: "Pennisetum blanc", language: "French trade name" },
    ],
    regions: ["West Africa", "Sahel"],
    countries: ["Guinea", "Mali", "Burkina Faso", "Senegal", "Nigeria"],
    image: "/images/foods/fonio.jpg",
    imageAlt: "Mounds of fine pale grain in open sacks at a Nigerian grain market",
    tagline: "The fastest cereal in Africa",
    intro:
      "Fonio is a tiny ancient cereal of the West African interior, prized for maturing in as little as six to eight weeks and for thriving on poor, sandy, drought stressed soils where maize fails. It is one of the oldest cultivated grains on the continent, with archaeological evidence pointing to use for at least two thousand years.",
    origin:
      "Fonio is native to the savannah belt stretching from Senegal to Lake Chad. The Fouta Djallon highlands of Guinea remain its cultural heartland, where entire villages still harvest, thresh and winnow it by hand, a task often led by women's groups. In Nigeria's Jos Plateau it grows as acha, a heritage staple of smaller farms.",
    nutritionHighlights: [
      "Naturally gluten free, which makes it a friendly base for coeliac and gluten sensitive cooking.",
      "Commonly reported to contain meaningful amounts of the sulfur containing amino acids methionine and cysteine, which many major cereals are low in.",
      "A source of iron and zinc in traditional diets, especially when eaten with vitamin C rich foods that aid absorption.",
      "Whole grain by default: the tiny grains are usually consumed with their bran after careful washing.",
    ],
    traditionalUses: [
      "Steamed fonio couscous served with groundnut, okra or baobab leaf sauces across Guinea, Mali and Senegal.",
      "Thick morning porridge, often with fermented milk, in Hausa acha cuisine.",
      "Ritual and celebratory dishes, including offerings and dishes for new mothers in several cultures.",
      "Traditional beers and fermented drinks in parts of Togo and Burkina Faso.",
    ],
    modernUses: [
      "Fonio jollof, where the grain stands in for rice with a lighter, quicker result.",
      "Salads and side pilafs in city kitchens from Dakar to Lagos.",
      "Gluten free baking blends, often mixed with cassava or sorghum flour.",
      "Export value chains that pay premiums to women's processing cooperatives.",
    ],
    flavor:
      "Delicate and slightly nutty, closer to couscous than to rice, with a light fluffy texture once steamed.",
    cookingNotes: [
      {
        title: "Rinse gently, cook briefly",
        body: "Rinse until the water runs fairly clear, then simmer one part fonio in about one and a half parts water for roughly five minutes. Remove from heat and let it steam covered for five more minutes before fluffing.",
      },
      {
        title: "Steaming like couscous",
        body: "For the classic West African texture, dampen the grain, then steam it in a couscoussier or colander set over a sauce, fluffing twice and sprinkling a little water between steams.",
      },
      {
        title: "Watch the pot",
        body: "Fonio goes from fluffy to gluey quickly. Low heat and a tight lid matter more than exact timing.",
      },
    ],
    resilience:
      "Fonio's six to eight week cycle and tolerance of poor soils make it a classic hunger breaking crop, planted when stores run low and rains are unreliable. It needs little or no fertilizer and stabilizes sandy soils against erosion.",
    culture:
      "Among the Dogon of Mali, fonio carries cosmological meaning as the seed of the universe in creation narratives. In Guinea it anchors harvest festivals and is a marker of hospitality at weddings and naming ceremonies.",
    recipeSlugs: ["fonio-jollof", "fonio-morning-porridge"],
  },
  {
    slug: "teff",
    name: "Teff",
    scientificName: "Eragrostis tef",
    category: "Grain",
    localNames: [
      { name: "Tef", language: "Amharic" },
      { name: "Taff", language: "Tigrinya" },
      { name: "Williams lovegrass", language: "Botanical English" },
    ],
    regions: ["Horn of Africa"],
    countries: ["Ethiopia", "Eritrea"],
    image: "/images/foods/teff.jpg",
    imageAlt: "Ethiopian woman seated on the ground sorting grain at a sunlit market",
    tagline: "The smallest cereal with the biggest table presence",
    intro:
      "Teff is the world's smallest cereal grain, about one millimeter across, yet it feeds a nation. Domesticated in the Ethiopian highlands thousands of years ago, it is the flour behind injera, the sourdough flatbread that is plate, utensil and staple all at once.",
    origin:
      "Teff was domesticated in the Ethiopian highlands between 4000 and 1000 BCE and remains almost exclusively grown in Ethiopia and Eritrea. It spans an impressive range of altitudes, from highland plateaus above 2500 meters down to hotter lowlands, and its straw is as valued as its grain for building, fodder and bedding.",
    nutritionHighlights: [
      "Because the grain is so small it is never refined: teff flour is always whole grain.",
      "Commonly reported to be a good source of iron, with brown and red varieties often showing higher levels than white.",
      "A notable calcium content for a cereal, frequently cited around 180 mg per 100 g of grain.",
      "Naturally gluten free, and its slow digesting starch profile means injera is often described as gently filling.",
    ],
    traditionalUses: [
      "Injera: fermented teff batter poured in a spiral on a hot clay mitad, the centerpiece of Ethiopian and Eritrean meals.",
      "Teff porridge (genfo style thick porridges and lighter gruels for children and elders).",
      "Kolo style snacks and traditional beers such as tella, where teff is used with other grains.",
      "Straw for animal fodder and for reinforcing plaster and dung daub in rural construction.",
    ],
    modernUses: [
      "Teff flour in gluten free bread, pancakes and pasta blends around the world.",
      "Whole teff cooked like a polenta or rice substitute in diaspora kitchens.",
      "Sports nutrition interest in teff porridge as a slow release energy breakfast.",
      "Government and research programs improving seed systems for farmers.",
    ],
    flavor:
      "Earthy, mildly malty and cocoa like in darker varieties; white teff is milder and yeasty once fermented.",
    cookingNotes: [
      {
        title: "Fermentation is the craft",
        body: "Injera batter ferments one to three days at room temperature. In cool climates it may take longer. A fruity, tangy smell means it is working; a grey liquid layer on top (ersho) is normal and can be stirred back in.",
      },
      {
        title: "Whole grain porridge",
        body: "Simmer one part whole teff in three to four parts water, stirring often, for about twenty minutes until it thickens like polenta. Toasting the grain first deepens the flavor.",
      },
      {
        title: "Never grind at home unless you must",
        body: "Teff flour is milled fine for injera. If you mill your own, sift well; a coarse grind gives a gritty injera.",
      },
    ],
    resilience:
      "Teff tolerates waterlogged highland soils that drown other cereals and also survives dry spells. Its fine root mass holds fragile highland soils together, and farmers store it for years with little loss when kept dry.",
    culture:
      "Injera is etiquette: eating from a shared platter with the right hand, honoring guests with a rolled morsel (gursha), and breaking bread as a social act. Teff prices and harvests are national news in Ethiopia.",
    recipeSlugs: ["teff-injera-home-style", "teff-porridge-with-banana"],
  },
  {
    slug: "moringa",
    name: "Moringa",
    scientificName: "Moringa oleifera",
    category: "Leaf",
    localNames: [
      { name: "Zogale", language: "Hausa" },
      { name: "Mlonge", language: "Swahili" },
      { name: "Nevie day", language: "Wolof trade name" },
      { name: "Arumoongga", language: "Somali" },
    ],
    regions: ["Pan African", "West Africa", "East Africa", "Sahel"],
    countries: ["Nigeria", "Kenya", "Senegal", "Sudan", "Ethiopia", "Ghana"],
    image: "/images/foods/moringa.jpg",
    imageAlt: "Fresh green moringa leaves on the branch with a basket of harvested leaflets",
    tagline: "The hardy leafy tree of the drylands",
    intro:
      "Moringa is a fast growing, drought tolerant tree whose leaves are eaten across Africa as a green vegetable and dried into powder for year round use. It is often called the miracle tree in marketing, but farmers know it by a simpler truth: it is one of the few leafy greens that stays productive through the dry season.",
    origin:
      "Moringa oleifera originated in the foothills of the Himalayas and traveled ancient trade routes to Africa, where it has been cultivated for so long it reads as native across the Sahel and the eastern seaboard. In northern Nigeria zogale is a market staple; in Kenya mlonge grows in homesteads from the coast to the dry interior.",
    nutritionHighlights: [
      "Fresh leaves are a source of vitamin A (as beta carotene), vitamin C, calcium, potassium and iron.",
      "Dried leaf powder concentrates these nutrients and is widely used to fortify porridges, especially for children's weaning foods in community programs.",
      "The leaf is unusually protein rich for a green vegetable, commonly reported around 20 to 25 percent of dry weight.",
      "Leaves contain antioxidant polyphenols; research is ongoing and everyday portions are best understood as a nutritious vegetable, not a medicine.",
    ],
    traditionalUses: [
      "Zogale soup and sauces in Hausa cooking, often with groundnut paste.",
      "Leaf sauces stirred into millet or maize porridges across the Sahel.",
      "Living fences and shade trees around homesteads, with leaves, flowers and young pods all eaten.",
      "Traditional water clarifying: crushed seeds help settle turbid water, a practice studied and used in rural settings.",
    ],
    modernUses: [
      "Moringa powder in smoothies, teas and fortified flour blends.",
      "Leaf stir fries and greens stews in urban and diaspora kitchens.",
      "Smallholder income programs, with women's groups drying and packing leaf powder.",
      "Fodder that improves milk yields in dryland dairying.",
    ],
    flavor:
      "Grassy and slightly horseradish sharp, like a green with a peppery edge. The sharpness softens quickly with cooking.",
    cookingNotes: [
      {
        title: "Add leaves late",
        body: "Stir fresh leaves in during the last three to five minutes of cooking. Long boiling dulls the color and the vitamin C.",
      },
      {
        title: "Powder discipline",
        body: "One to two teaspoons of dried powder per person per day is a sensible culinary amount. Stir it into porridge or sauce off the boil.",
      },
      {
        title: "Wash and pick",
        body: "Strip leaflets from fibrous stems and wash well, especially leaves gathered near roads or dusty yards.",
      },
    ],
    resilience:
      "Moringa grows fast in poor soils with little water, regenerates after hard pruning, and provides green leaves exactly when other vegetables are scarce, which is why nutrition programs across the Sahel plant it near kitchens and clinics.",
    culture:
      "In Hausa markets the morning call for zogale is familiar as the call for tomatoes. In Senegal moringa leaf powder (lalo style greens) thickens couscous sauces, and in coastal Kenya mlonge is the dependable backyard green.",
    recipeSlugs: ["moringa-greens-with-groundnut", "moringa-lentil-soup"],
  },
  {
    slug: "baobab",
    name: "Baobab",
    scientificName: "Adansonia digitata",
    category: "Fruit botanical",
    localNames: [
      { name: "Kuka", language: "Hausa (leaf)" },
      { name: "Goui", language: "Wolof" },
      { name: "Mbuyu", language: "Swahili" },
      { name: "Lalo", language: "Senegalese French (leaf powder)" },
      { name: "Tabaldi", language: "Fulfulde" },
    ],
    regions: ["Sahel", "West Africa", "East Africa", "Southern Africa"],
    countries: ["Senegal", "Mali", "Burkina Faso", "Nigeria", "Kenya", "Tanzania", "Zimbabwe"],
    image: "/images/foods/baobab.jpg",
    imageAlt: "A towering baobab tree standing in green Senegalese countryside",
    tagline: "The upside down tree that feeds the dry season",
    intro:
      "The African baobab is a cathedral of a tree that can live for many centuries and store thousands of liters of water in its trunk. Its velvety pods ripen in the dry season and hold a tangy, sherbet like pulp around brittle seeds, plus leaves that are eaten as a vegetable.",
    origin:
      "Baobab ranges across the dry savannahs of mainland Africa, from Senegal to Sudan and down to the Zambezi. It is mostly wild harvested rather than farmed, which makes it a crucial dry season resource and a cornerstone of non timber forest product economies. Many communities treat mature trees as protected landmarks.",
    nutritionHighlights: [
      "The dried fruit pulp is commonly reported to be very rich in vitamin C, with figures often cited in the range of 150 to 300 mg per 100 g of powder.",
      "Pulp is about half soluble fiber, a prebiotic profile that traditional diets already valued for digestion.",
      "A source of calcium, potassium and magnesium, plus antioxidant polyphenols.",
      "Leaves (kuka, lalo) are a mucilaginous green rich in minerals, used like okra to thicken sauces.",
    ],
    traditionalUses: [
      "Baobab pulp stirred into water or milk with sugar for the classic Sahel refreshment, from bouye in Senegal to uchi in Nigeria.",
      "Kuka leaf sauce over tuwo or couscous in Hausa cooking; lalo powder in Senegalese thieb and couscery sauces.",
      "Pulp as a natural acidulant and preservative in gruels and traveler's foods.",
      "Bark fiber for rope and mats; the hollow trunk used historically as granary and shelter.",
    ],
    modernUses: [
      "Baobab powder in smoothie bowls, juices, energy balls and yogurt.",
      "Export wild harvest programs that pay collector communities, often women's cooperatives.",
      "Pulp powder as a tangy natural flavoring in dressings and marinades.",
      "Seed oil in cosmetics, a small but growing niche.",
    ],
    flavor:
      "Bright, sherbety tartness with citrus and pear notes; the powder dissolves into a refreshing acidity that lifts sweet and savory dishes alike.",
    cookingNotes: [
      {
        title: "Do not boil the pulp",
        body: "Vitamin C fades with prolonged heat. Stir powder or sieved pulp into warm, not boiling, liquids and drinks.",
      },
      {
        title: "Crack and sieve",
        body: "Whole pods: crack the shell, break the pulp into chunks, sieve away seeds and fiber. The resulting powder keeps for months in a sealed jar.",
      },
      {
        title: "Start with a teaspoon",
        body: "Baobab is tart. One to two teaspoons per serving is plenty in smoothies and drinks.",
      },
    ],
    resilience:
      "Baobabs are icons of resilience: they regenerate bark after stripping, store water for drought years, and fruit when other crops have failed. Wild harvest gives standing trees more value than cleared land, an argument communities make for conservation.",
    culture:
      "Across the Sahel the baobab is a meeting tree: markets, courts and ceremonies gather in its shade. In Senegal, griot traditions and in Zimbabwe, Shona folklore give the tree deep symbolic weight as a giver of shelter, food and medicine.",
    recipeSlugs: ["baobab-smoothie-bowl", "baobab-ginger-cooler"],
  },
  {
    slug: "sorghum",
    name: "Sorghum",
    scientificName: "Sorghum bicolor",
    category: "Grain",
    localNames: [
      { name: "Mabele", language: "Setswana" },
      { name: "Amabele", language: "isiZulu" },
      { name: "Dura", language: "Sudanese Arabic" },
      { name: "Mtama", language: "Swahili" },
      { name: "Great millet", language: "English agronomy" },
    ],
    regions: ["Pan African", "Sahel", "East Africa", "Southern Africa"],
    countries: ["Nigeria", "Sudan", "Ethiopia", "South Africa", "Zimbabwe", "Burkina Faso", "Kenya"],
    image: "/images/foods/sorghum.jpg",
    imageAlt: "A worker threshing harvested sorghum heads in dusty sunlight",
    tagline: "The drought champion of the cereal world",
    intro:
      "Sorghum is one of Africa's two great indigenous cereals, domesticated in the savannahs of Sudan and Nigeria perhaps five thousand years ago. It laughs at heat, shrugs off drought, and delivers grain where maize cannot, which is why it remains the backbone staple across the Sahel and dryland eastern and southern Africa.",
    origin:
      "Archaeobotanical evidence places sorghum domestication in the Sudanese savannah and independently in West Africa. From there it traveled east to the Nile and India and south with Bantu expansions, diversifying into hundreds of landraces: white sorghums for porridge and flatbreads, red and brown sorghums for beer and stiff porridges.",
    nutritionHighlights: [
      "Gluten free whole grain with a slowly digesting starch profile.",
      "Red and brown varieties carry tannins and polyphenols, antioxidant pigments studied for their role in traditional diets.",
      "A source of iron, magnesium and B vitamins in whole grain form.",
      "Fermented sorghum foods, from uji to opaque beer, improve mineral availability through lactic acid fermentation.",
    ],
    traditionalUses: [
      "Stiff porridges: tuwo (Nigeria), sadza variants, bogobe (Botswana), kisra and asida (Sudan).",
      "Kisra: the thin fermented sorghum flatbread of Sudan, made daily in millions of homes.",
      "Opaque beers: umqombothi (South Africa), dolo (Burkina Faso), merissa (Sudan), hallia, all built on sorghum malt.",
      "Sweet sorghum stalks chewed like sugarcane by children; grain popped like corn.",
    ],
    modernUses: [
      "Sorghum flour blends in gluten free baking across African cities.",
      "Whole grain sorghum salads and pilafs in modern restaurants.",
      "Craft brewing reviving traditional sorghum malt styles.",
      "Climate smart crop programs expanding improved drought tolerant varieties.",
    ],
    flavor:
      "Mildly sweet and wheaty in white varieties; red sorghums are deeper, earthier and slightly astringent from tannins.",
    cookingNotes: [
      {
        title: "Soak for speed",
        body: "Whole sorghum grain is dense. Soak overnight, then simmer forty five to sixty minutes until chewy tender, or use a pressure cooker for about twenty five.",
      },
      {
        title: "Stir constantly for porridge",
        body: "Sorghum meal porridge thickens fast and scorches easily. Add meal in a slow stream to boiling water while stirring with a wooden paddle.",
      },
      {
        title: "Pop it",
        body: "Dry whole sorghum pops in a hot covered pan like miniature popcorn, a traditional snack with new restaurant appeal.",
      },
    ],
    resilience:
      "Sorghum's deep roots and waxy leaves let it keep producing through heat waves and erratic rain. It is repeatedly cited among the most climate resilient cereals, and breeding programs now pair farmer landraces with modern science for hotter decades ahead.",
    culture:
      "Sorghum is ceremonial grain: bride price brews, harvest thanksgivings and ancestor offerings from the Niger bend to the Limpopo. In Botswana, bogobe jwa logala is comfort food; in South Africa, umqombothi carries social and ritual life.",
    recipeSlugs: ["sorghum-ugali-with-sukuma", "sorghum-harvest-salad"],
  },
  {
    slug: "pearl-millet",
    name: "Pearl Millet",
    scientificName: "Pennisetum glaucum",
    category: "Grain",
    localNames: [
      { name: "Gero", language: "Hausa" },
      { name: "Mahangu", language: "Oshiwambo (Namibia)" },
      { name: "Uwele", language: "Swahili" },
      { name: "Petit mil", language: "French Sahel" },
      { name: "Gawu", language: "Songhai" },
    ],
    regions: ["Sahel", "West Africa", "Southern Africa"],
    countries: ["Nigeria", "Niger", "Mali", "Senegal", "Namibia", "India (global co-heritage)"],
    image: "/images/foods/pearl-millet.jpg",
    imageAlt: "Pearl millet heads on the plant in a sunlit grower field",
    tagline: "Grain of the deep dry",
    intro:
      "Pearl millet is the most drought tolerant of all cereals, grown on the Sahel's sandy margins where rainfall is scarce and soils are poor. Its dramatic spiked cobs feed millions in West Africa and Namibia, and its flour anchors beloved foods from fura to mahangu porridge.",
    origin:
      "Pearl millet was domesticated in the Sahel zone of West Africa around 4000 years ago, an African crop from the start, unlike many cereals that arrived through trade. It spread east to the Nile and India, but its center of gravity remains the band from Senegal to Chad and the dry fields of northern Namibia.",
    nutritionHighlights: [
      "Gluten free whole grain with a protein content commonly reported around 10 to 12 percent, higher than maize and rice.",
      "A good source of iron and zinc among cereals, frequently highlighted in Sahelian nutrition work.",
      "Rich in insoluble fiber from the whole grain meal.",
      "The classic pairing with fermented milk (fura da nono) adds protein, calcium and beneficial fermentation to the grain.",
    ],
    traditionalUses: [
      "Fura: spiced steamed millet balls, pounded and served with fermented milk (nono) across Hausaland.",
      "Thin fermented gruels and thick porridges for daily meals in Niger, Mali and Burkina Faso.",
      "Mahangu porridge and mahangu beer in Namibia, where the grain is a national staple.",
      "Flatbreads and couscous style steamed dishes (thiéré) in Senegal.",
    ],
    modernUses: [
      "Millet couscous (thiéré) sold ready steamed in urban markets and supermarkets.",
      "Fura da nono packaged as a chilled drink in Nigerian cities.",
      "Millet flour in gluten free blends and infant porridge programs.",
      "Climate adaptation programs pushing improved millet in drying maize zones.",
    ],
    flavor:
      "Slightly sweet with a corn-like depth and a hint of bitterness in the bran; warming spices like ginger and clove are traditional companions.",
    cookingNotes: [
      {
        title: "Whole grain porridge",
        body: "Simmer one part millet meal in four parts water, stirring, for twenty to twenty five minutes. Fermenting the slurry overnight adds the classic tangy aroma.",
      },
      {
        title: "Millet as rice",
        body: "Toast whole pearl millet grain lightly, then simmer one to two and a half parts water for about twenty five minutes for a fluffy side.",
      },
      {
        title: "Freshness matters",
        body: "Millet's natural oils mean whole meal can turn bitter if stored warm and long. Buy in small quantities and store cool and sealed.",
      },
    ],
    resilience:
      "Pearl millet grows where annual rainfall drops below 400 mm and temperatures soar, produces grain on sandy soils with minimal inputs, and its deep roots scavenge water other crops cannot reach. It is a frontline crop for a hotter Sahel.",
    culture:
      "In Hausaland, fura da nono is social fuel, shared from a single calabash. In Namibia, mahangu pounding is communal rhythm, and the first mahangu of the harvest is marked with ceremony in the north.",
    recipeSlugs: ["pearl-millet-fura", "thiacry-style-millet-couscous"],
  },
  {
    slug: "finger-millet",
    name: "Finger Millet",
    scientificName: "Eleusine coracana",
    category: "Grain",
    localNames: [
      { name: "Wimbi", language: "Swahili" },
      { name: "Zviyo", language: "Shona" },
      { name: "Rapoko", language: "isiNdebele" },
      { name: "Tef-like dagussa", language: "Ethiopian trade" },
      { name: "Ragi", language: "South Asian co-cultivar name" },
    ],
    regions: ["East Africa", "Horn of Africa", "Southern Africa"],
    countries: ["Kenya", "Uganda", "Tanzania", "Ethiopia", "Zimbabwe", "Malawi"],
    image: "/images/foods/finger-millet.jpg",
    imageAlt: "Close-up of mixed golden millet seeds heaped together",
    tagline: "The calcium grain of the highlands",
    intro:
      "Finger millet grows as elegant green hands of grain across the East African highlands and southern Africa. Its flour makes uji, the fermented porridge that many East Africans grew up on, and its grain stores so reliably that families keep it for a decade.",
    origin:
      "Finger millet was domesticated in the Ethiopian highlands and spread with farmers into the East African highlands and southward. In Kenya and Uganda it is closely tied to highland smallholders; in Zimbabwe zviyo and rapoko anchor traditional beer and porridge culture; in Ethiopia it grows alongside teff as dagussa.",
    nutritionHighlights: [
      "Outstanding calcium for a cereal, commonly reported above 300 mg per 100 g of grain, several times more than milk by weight.",
      "Naturally gluten free with a low glycemic reputation in traditional diets, partly from its polyphenols and fiber.",
      "A source of iron, methionine and antioxidants, with dark red varieties richest in pigments.",
      "Fermented wimbi uji is a traditional weaning and recovery food, gentle on the gut and easy to enrich with milk or oil.",
    ],
    traditionalUses: [
      "Uji: thin fermented porridge drunk at breakfast and given to children, elders and new mothers.",
      "Ugali wa wimbi: stiff finger millet porridge in western Kenya and Tanzania.",
      "Traditional beers: chibwantu and kachasu base beers in Zambia and Malawi, whawha in Zimbabwe.",
      "Kolo style roasted snacks and porridge flours sold in highland markets.",
    ],
    modernUses: [
      "Wimbi flour blends for infant porridge programs, often mixed with amaranth or soy.",
      "Gluten free baking and cookie making with millet flour.",
      "Value chain projects linking women's groups to urban supermarkets.",
      "Restaurant uji served with honey, milk and cinnamon as heritage brunch.",
    ],
    flavor:
      "Malty, earthy and gently astringent, with a distinctive aroma when fermenting; the porridge turns a warm cocoa brown.",
    cookingNotes: [
      {
        title: "Slurry first",
        body: "Mix the flour with cool water into a smooth slurry before adding it to hot water. This prevents the lumps that ruin uji.",
      },
      {
        title: "Ferment for flavor and gut",
        body: "Let a flour and water slurry sit twelve to twenty four hours for classic tangy uji. Keep utensils clean and refrigerate ferments in warm kitchens.",
      },
      {
        title: "Enrich for children",
        body: "Traditional practice enriches uji with milk, a little oil or groundnut flour for growing children. Follow local health guidance for infant feeding.",
      },
    ],
    resilience:
      "Finger millet tolerates poor soils, resists many pests, and its grain resists storage insects and mold better than almost any cereal, which is why granaries keep it as insurance against lean years.",
    culture:
      "In western Kenya, uji wa wimbi is the morning of childhood; in Zimbabwe, zviyo porridge and beer carry ritual weight at gatherings for ancestors. The grain is a quiet symbol of highland endurance.",
    recipeSlugs: ["finger-millet-uji", "wimbi-honey-porridge-bowl"],
  },
  {
    slug: "hibiscus",
    name: "Hibiscus (Zobo, Bissap)",
    scientificName: "Hibiscus sabdariffa",
    category: "Flower botanical",
    localNames: [
      { name: "Zobo", language: "Hausa and Nigerian English" },
      { name: "Bissap", language: "Wolof" },
      { name: "Sobolo", language: "Twi" },
      { name: "Karkadé", language: "Arabic (Sudan, Egypt)" },
      { name: "Roselle", language: "English trade" },
    ],
    regions: ["West Africa", "Sahel", "East Africa", "Pan African"],
    countries: ["Nigeria", "Senegal", "Ghana", "Sudan", "Egypt", "Kenya"],
    image: "/images/foods/hibiscus.jpg",
    imageAlt: "Two deep red hibiscus flowers in full bloom among green leaves",
    tagline: "The ruby cooler of the continent",
    intro:
      "Hibiscus sabdariffa is grown across Africa for its deep red calyxes, which steep into the continent's most beloved cold drink: zobo in Nigeria, bissap in Senegal, sobolo in Ghana, karkadé in Sudan and Egypt. Tart as cranberry and red as wine, it turns up at every celebration.",
    origin:
      "Roselle is likely native from West Africa to Sudan and has been cultivated across the tropics for centuries. In the Sahel it grows as a rainy season crop beside millet; in Sudan karkadé has deep roots and became a major export crop; Senegalese bissap sellers flavor it with mint and orange blossom.",
    nutritionHighlights: [
      "The red calyxes are rich in anthocyanins, the same family of pigments found in berries.",
      "Naturally caffeine free and, when unsweetened, essentially calorie light.",
      "A source of vitamin C and minerals in traditional preparations.",
      "Hibiscus tea has been studied for its effects on blood pressure; enjoy it as a drink, and speak with a professional about any health questions.",
    ],
    traditionalUses: [
      "Zobo: boiled with ginger, cloves and pineapple peel, sweetened and served ice cold at Nigerian parties.",
      "Bissap: steeped cold or warm with mint, sometimes with orange flower water, sold in glass jars on Dakar streets.",
      "Sobolo: Ghanaian spiced hibiscus drink with ginger and pineapple, often sold chilled in sachets.",
      "Karkadé: drunk hot and sweet in winter, cold and tart in Ramadan, a Sudanese and Egyptian classic.",
      "Leaves eaten as a sour green; seeds fermented into furundu condiment in Sudan.",
    ],
    modernUses: [
      "Bottled zobo and bissap brands in African supermarkets and diaspora shops.",
      "Hibiscus cocktails, mocktails and shrubs in bars from Lagos to London.",
      "Dried calyxes as a natural food coloring and tart flavoring.",
      "Hibiscus jams, sorbets and salad dressings.",
    ],
    flavor:
      "Cranberry-like tartness with floral notes; it takes ginger, citrus and warm spices generously.",
    cookingNotes: [
      {
        title: "Steep, don't overboil",
        body: "A short boil or a long steep extracts color and tang. Overboiling can turn the drink flat and dull.",
      },
      {
        title: "Sweeten smart",
        body: "Traditional recipes are sweet; you can cut sugar by half and boost aroma with pineapple peel, ginger, cloves or lemongrass.",
      },
      {
        title: "Stains and storage",
        body: "Hibiscus stains cloth and counters. Refrigerate brewed drinks and enjoy within three to four days.",
      },
    ],
    resilience:
      "Roselle is a hardy rainy season crop that grows on marginal land with little care, and the dried calyxes store and ship easily, making it a reliable cash crop for smallholders, especially women's groups.",
    culture:
      "No Nigerian party is complete without chilled zobo; in Senegal, bissap is the welcome drink; during Ramadan across the Sahel and the Nile, hibiscus breaks the fast. The drink is a red thread of African hospitality.",
    recipeSlugs: ["zobo-hibiscus-cooler"],
  },
  {
    slug: "amaranth",
    name: "Amaranth",
    scientificName: "Amaranthus spp.",
    category: "Pseudocereal",
    localNames: [
      { name: "Mchicha", language: "Swahili" },
      { name: "Ewe tete", language: "Yoruba" },
      { name: "Terera", language: "Amharic (grain types)" },
      { name: "Doodo", language: "Luganda" },
      { name: "Mgagani", language: "Chagga" },
    ],
    regions: ["East Africa", "West Africa", "Pan African"],
    countries: ["Kenya", "Tanzania", "Uganda", "Nigeria", "Ethiopia"],
    image: "/images/foods/amaranth.jpg",
    imageAlt: "Leafy green vegetables arranged at an outdoor market stall",
    tagline: "Leaf and grain in one tough plant",
    intro:
      "Amaranth does double duty across Africa: its leaves (mchicha, ewe tete) are a beloved market green, and its grain is a traditional pseudocereal of Ethiopian and Kenyan highlands. Fast growing and heat loving, it is one of the easiest indigenous crops for a beginner garden.",
    origin:
      "Grain amaranths were domesticated in the Americas but reached Africa centuries ago and were adopted into highland farming in Ethiopia and Kenya; leaf amaranths, some of African origin, have been gathered and cultivated across the continent since antiquity. Today both forms thrive from backyard beds to market gardens.",
    nutritionHighlights: [
      "The grain is a complete protein among pseudocereals, unusually rich in lysine.",
      "Leaves are a strong source of vitamin A, vitamin C, iron, calcium and folate.",
      "Gluten free grain with a good fiber profile.",
      "As with many greens, moderate portions and varied diets are the traditional wisdom, since leaves also carry oxalates.",
    ],
    traditionalUses: [
      "Mchicha with coconut milk, a coastal Kenyan and Tanzanian classic.",
      "Ewe tete stewed with palm oil, pepper and locust bean in Yoruba cooking.",
      "Grain amaranth porridges and breads in Ethiopian highland communities.",
      "The grain popped like tiny popcorn for snacks and mixed with honey.",
    ],
    modernUses: [
      "Amaranth grain in granola, energy bars and gluten free baking.",
      "Urban market gardens supplying restaurants with baby mchicha.",
      "Amaranth flour blended into school feeding porridges.",
      "Home garden favorite for quick harvests in small spaces.",
    ],
    flavor:
      "Leaves taste like a hearty cross between spinach and chard; the grain is grassy, peppery and malty, with a crunchy pop.",
    cookingNotes: [
      {
        title: "Greens in minutes",
        body: "Wash well, then wilt the leaves in a hot pan with oil or coconut milk for five to eight minutes. They cook down fast.",
      },
      {
        title: "Grain like porridge",
        body: "Simmer one part amaranth grain in three parts water for twenty to twenty five minutes; it thickens into a porridge that keeps its tiny crunch.",
      },
      {
        title: "Harvest leaves young",
        body: "Pinch tips regularly to keep the plant bushy and tender; older stems get fibrous.",
      },
    ],
    resilience:
      "Amaranth grows fast in heat, tolerates poor soils, self-seeds happily and yields both leaves and grain from the same plant, a rare efficiency for small gardens and dryland farms.",
    culture:
      "Mchicha is everyday comfort on the Swahili coast, served with ugali and fish. Among the Kikuyu and Chagga, leaf amaranth carries grandmother status: the green that makes a meal complete.",
    recipeSlugs: ["amaranth-mchicha-coconut", "amaranth-harvest-porridge"],
  },
  {
    slug: "bambara-groundnut",
    name: "Bambara Groundnut",
    scientificName: "Vigna subterranea",
    category: "Legume",
    localNames: [
      { name: "Okpa", language: "Igbo" },
      { name: "Ditloo", language: "Setswana" },
      { name: "Jugo bean", language: "Southern African English" },
      { name: "Gurjiya", language: "Hausa" },
      { name: "Nyemba", language: "Shona" },
    ],
    regions: ["West Africa", "Southern Africa", "Sahel"],
    countries: ["Nigeria", "Ghana", "Cameroon", "Botswana", "Zimbabwe", "Zambia"],
    image: "/images/foods/bambara.jpg",
    imageAlt: "A farmer hands holding freshly dug groundnut pods in the field",
    tagline: "The drought proof legume of village fields",
    intro:
      "Bambara groundnut is Africa's third most important legume after groundnut and cowpea, yet it barely appears in export catalogs. It buries its pods like a peanut, thrives on poor soil with unreliable rain, and fixes nitrogen for the crops that follow. In southeastern Nigeria, okpa is street food royalty.",
    origin:
      "Bambara was domesticated in West Africa, likely around the Jos Plateau and the Benue valley, and spread with Bantu migrations into southern Africa, where Setswana farmers call it ditloo. It has always been described as a woman's crop, grown in home fields for household food security.",
    nutritionHighlights: [
      "A balanced legume: commonly reported around 20 percent protein, 60 percent carbohydrate and only 6 percent fat.",
      "Rich in lysine, complementing cereals like sorghum and millet in traditional mixed diets.",
      "A good source of iron, zinc and soluble fiber.",
      "Low fat compared with peanut, which traditional cooks already valued for lighter stews.",
    ],
    traditionalUses: [
      "Okpa: Igbo steamed pudding of milled bambara with palm oil and spices, wrapped in leaves (or modern heat safe wraps) and boiled, sold hot in Enugu markets.",
      "Nyemba stew in Zimbabwe, cooked with the classic soda that softens the tough skins.",
      "Ditloo boiled with maize or sorghum in Botswana, a dry season protein anchor.",
      "Roasted snacks and soups across the Sahel, often by Hausa gurjiya sellers.",
    ],
    modernUses: [
      "Bambara flour in gluten free and high protein baking experiments.",
      "Bambara milk and yogurt style ferments in food labs.",
      "Climate smart rotation crop programs with legume breeding.",
      "Restaurant okpa and bambara hummus on heritage menus.",
    ],
    flavor:
      "Nutty, chestnut like sweetness with a firm bite; milled into flour it takes palm oil, ginger and chili beautifully.",
    cookingNotes: [
      {
        title: "Soak long",
        body: "Whole bambara beans are dense. Soak twelve to twenty four hours and simmer one to two hours, or use a pressure cooker for about thirty five minutes.",
      },
      {
        title: "Okpa technique",
        body: "Blend soaked beans smooth with palm oil, salt and pepper, then steam in banana leaves or heat safe food wraps for about an hour until firm and golden inside.",
      },
      {
        title: "Food safety note",
        body: "Use banana leaves or wraps rated for hot food. Some street methods use plastic that is not heat safe; at home, choose leaves, foil or heat safe pouches.",
      },
    ],
    resilience:
      "Bambara produces reliable yields on marginal soils with 500 mm of rain and keeps producing when droughts wipe out other legumes, which is why agronomists call it a future smart crop and farmers call it insurance.",
    culture:
      "Okpa sellers in Enugu are institutions, and the dish marks homecoming for many Igbo families. In Botswana, ditloo features at weddings and funerals alike. Everywhere it grows, bambara is quietly described as women's wealth.",
    recipeSlugs: ["okpa-steamed-bambara-pudding"],
  },
];

export const foodBySlug = new Map(foods.map((f) => [f.slug, f]));

export function getFood(slug: string): Food | undefined {
  return foodBySlug.get(slug);
}
