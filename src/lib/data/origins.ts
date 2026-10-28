export interface OriginRegion {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  countries: string[];
  crops: string[];
  foodSlugs: string[];
  story: string[];
  marketNote: string;
  quote?: { text: string; attribution: string };
}

export const origins: OriginRegion[] = [
  {
    slug: "west-africa",
    name: "West Africa",
    subtitle: "From the Gulf of Guinea to the Jos Plateau",
    image: "/images/origins/west-africa.jpg",
    imageAlt: "West African market stalls heaped with grains, peppers and produce",
    countries: ["Nigeria", "Ghana", "Guinea", "Senegal", "Mali", "Burkina Faso", "Cote d'Ivoire"],
    crops: ["Fonio", "Pearl millet", "Sorghum", "Bambara groundnut", "Hibiscus", "Amaranth"],
    foodSlugs: ["fonio", "pearl-millet", "bambara-groundnut", "hibiscus"],
    story: [
      "West Africa is one of the world's original farming civilizations. Sorghum and pearl millet were domesticated across the savannah belt thousands of years ago, fonio was gathered and then tended in the Fouta Djallon and the Sahelian margins, and bambara groundnut matured as a woman's crop in the woodlands of Nigeria and Cameroon.",
      "Today the region runs on two grain systems side by side: imported rice and wheat in the cities, and indigenous grains in the countryside, in heritage restaurants and increasingly in modern packaging. Jollof culture shows how a dish can travel; fonio jollof shows how the grain itself is coming back.",
      "Markets like Bodija in Ibadan, Kejetia in Kumasi and Madina in Conakry remain the true universities of West African grain knowledge, where varieties are named, priced and debated every morning.",
    ],
    marketNote:
      "Ask for acha in Hausa markets, thiéré in Dakar, findi in Bamako. Sellers will know the harvest district, which is the best quality signal you can get.",
    quote: {
      text: "We say fonio saves the farmer, because when the rains come late and the maize fails, fonio is still on the table in eight weeks.",
      attribution: "Proverb of the Fouta Djallon, Guinea",
    },
  },
  {
    slug: "sahel-belt",
    name: "The Sahel Belt",
    subtitle: "Farming at the edge of the Sahara",
    image: "/images/origins/sahel.jpg",
    imageAlt: "A baobab tree standing in open savannah grassland under a blue sky",
    countries: ["Senegal", "Mali", "Burkina Faso", "Niger", "Chad", "Sudan", "Nigeria (north)"],
    crops: ["Pearl millet", "Sorghum", "Fonio", "Baobab", "Hibiscus", "Moringa"],
    foodSlugs: ["pearl-millet", "sorghum", "fonio", "baobab", "moringa", "hibiscus"],
    story: [
      "The Sahel is where the desert meets the savannah, and its farming is a masterclass in resilience. Pearl millet grows on sand with less rain than a city lawn receives. Sorghum holds the heavier soils. Baobabs, some older than most nations, fruit through the dry months when fields are bare.",
      "This is also a landscape under pressure. Rainfall swings, temperatures climb, and the Sahel has become a frontline laboratory for climate adaptation, with indigenous grains at the center of the response because they evolved here for exactly these extremes.",
      "Sahelian food culture turns scarcity into poetry: fura pounded in calabashes, kisra fermented daily in Khartoum kitchens, bouye cooled in gourds under acacia shade.",
    ],
    marketNote:
      "Sahel grains travel best in dry form. Buy millet and sorghum grain or meal in quantities you will use within two months for the freshest flavor.",
  },
  {
    slug: "east-africa",
    name: "East Africa",
    subtitle: "Highlands, lakeshores and the Swahili coast",
    image: "/images/origins/east-africa.jpg",
    imageAlt: "Green East African savannah with acacia trees and distant hills",
    countries: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi"],
    crops: ["Finger millet", "Sorghum", "Amaranth", "Moringa", "Teff (trade)"],
    foodSlugs: ["finger-millet", "sorghum", "amaranth", "moringa"],
    story: [
      "East Africa's grain story is written in altitude. In the cool highlands of western Kenya, Uganda and Tanzania, finger millet (wimbi) has been farmed for centuries and still anchors porridge culture, traditional beer and the weaning foods of three generations.",
      "Sorghum stretches from the lakeshore to the drylands, while the coast contributes its own green intelligence: mchicha simmered in coconut milk, moringa grown as a living fence, and amaranth self seeding in every garden corner.",
      "Nairobi, Kampala and Dar es Salaam are now cities where uji wa wimbi is served in paper cups beside espresso, a daily picture of heritage holding its ground in modern life.",
    ],
    marketNote:
      "Wimbi flour sells in bright kilo packets at every East African dukas. Darker red flours generally mean more polyphenols and a maltier uji.",
    quote: {
      text: "Uji is not just breakfast. It is what you give a guest, a new mother, and a child coming home from school. One pot, three kindnesses.",
      attribution: "Kenyan home cook, Nairobi",
    },
  },
  {
    slug: "horn-of-africa",
    name: "Horn of Africa",
    subtitle: "The highland cradle of teff",
    image: "/images/origins/horn-of-africa.jpg",
    imageAlt: "Traditional clay cups of coffee and tea arranged on a silver tray",
    countries: ["Ethiopia", "Eritrea", "Somalia", "Djibouti", "Sudan (eastern trade)"],
    crops: ["Teff", "Sorghum", "Finger millet (dagussa)", "Moringa"],
    foodSlugs: ["teff", "sorghum", "finger-millet", "moringa"],
    story: [
      "The Ethiopian highlands domesticated teff, one of humanity's most remarkable crops: a grain so small that a single handful holds enough seeds to sow a field. Injera made from fermented teff is arguably the world's most elegant answer to the question of how to feed a nation gluten free.",
      "Teff farming shapes the calendar, the market and the national conversation. Its straw builds homes and feeds oxen; its price moves household budgets. Export restrictions over the years have been a government effort to keep the national grain at home.",
      "Alongside teff grow sorghum in the warmer lowlands and dagussa (finger millet) in the south, while moringa shades homesteads from the Rift Valley to the Somali coast.",
    ],
    marketNote:
      "Buy teff flour milled recently for injera; the fermented batter forgives many things, but stale flour is not one of them.",
  },
  {
    slug: "southern-africa",
    name: "Southern Africa",
    subtitle: "Sorghum, millet and the granary cultures",
    image: "/images/origins/southern-africa.jpg",
    imageAlt: "Aerial view of mountains and patchwork farmland in the Drakensberg",
    countries: ["South Africa", "Botswana", "Zimbabwe", "Zambia", "Malawi", "Namibia", "Mozambique"],
    crops: ["Sorghum", "Pearl millet (mahangu)", "Finger millet", "Bambara groundnut"],
    foodSlugs: ["sorghum", "pearl-millet", "finger-millet", "bambara-groundnut"],
    story: [
      "Southern Africa's grain heritage runs through sorghum: mabele porridge in Botswana, sorghum malt for umqombothi in South Africa, and red sorghum beers at ceremonies from Mthatha to Gaborone. In Namibia's north, mahangu (pearl millet) is a national staple with its own pounding rhythms and harvest ceremonies.",
      "Zimbabwe's small grains program has revived zviyo (finger millet) and rapoko in dryland districts, reconnecting granaries that once stored a decade of insurance against drought. In Zambia and Malawi, bambara (nyemba, jugo bean) softens in soda-scented stews through the cool months.",
      "The region's indigenous grain revival is closely tied to water: in places where maize has failed season after season, small grains are returning not as nostalgia but as strategy.",
    ],
    marketNote:
      "Sorghum malt for umqombothi is sold coarsely ground in township markets; ask for 'malt, not meal' and you will be understood.",
  },
  {
    slug: "diaspora-kitchens",
    name: "Diaspora Kitchens",
    subtitle: "Where the grains travel now",
    image: "/images/origins/diaspora.jpg",
    imageAlt: "A young woman preparing fresh vegetables in a modern city kitchen",
    countries: ["London", "Paris", "New York", "Toronto", "Dubai", "Johannesburg", "Nairobi (return kitchens)"],
    crops: ["All", "especially fonio, teff, moringa, baobab"],
    foodSlugs: ["fonio", "teff", "moringa", "baobab", "hibiscus"],
    story: [
      "The newest origin story of African grains is written in diaspora kitchens, where a packet of fonio bought in Brooklyn or Barbès reconnects a family to a grandmother's village. African, Caribbean and halal grocers now stock teff flour, wimbi flour, dried hibiscus and baobab powder as everyday shelf items.",
      "Second generation cooks are the accelerators: they blend heritage technique with local produce, write the food blogs, open the pop ups, and ask the sharp questions about sourcing ethics and farmer payment that keep the trade honest.",
      "This section of the story matters because demand in diaspora cities sets prices back home. Buying well, asking where grain came from, and cooking it faithfully is a form of support for the whole chain.",
    ],
    marketNote:
      "If a grain is missing locally, African grocers will often order by the sack for regulars. Asking is the oldest supply chain trick in the diaspora.",
  },
];

export const originBySlug = new Map(origins.map((o) => [o.slug, o]));

export function getOrigin(slug: string): OriginRegion | undefined {
  return originBySlug.get(slug);
}
