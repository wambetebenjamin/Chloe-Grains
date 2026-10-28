export interface ProducerEntry {
  slug: string;
  name: string;
  kind: string;
  region: string;
  country: string;
  crops: string[];
  image: string;
  imageAlt: string;
  whatTheyDo: string;
  ethicalNotes: string[];
  seasonNote: string;
}

/**
 * Producer listings on Chloe Grains are informational directory profiles of
 * the ecosystems where indigenous grains are grown and processed. They are
 * not endorsements, certifications or commercial partnerships, and the site
 * does not broker sales. See /sourcing-ethics.
 */
export const producers: ProducerEntry[] = [
  {
    slug: "fouta-djallon-fonio",
    name: "Fonio Women's Processing Groups, Fouta Djallon",
    kind: "Village cooperatives and small processors",
    region: "West Africa",
    country: "Guinea",
    crops: ["Fonio"],
    image: "/images/producers/fonio-guinea.jpg",
    imageAlt: "An elder woman selling spices and goods at a busy West African market",
    whatTheyDo:
      "Across the Fouta Djallon highlands, women's groups grow, thresh, winnow, wash and stone mill fonio, the most labor intensive cleaning of any grain because the seeds are so fine. Group processing centers now combine traditional winnowing with destoners and whitening machines, cutting hours of work while keeping quality high.",
    ethicalNotes: [
      "Fonio cleaning is among the hardest paid work in West African grains; fair pricing recognises the hours, not just the kilos.",
      "Many groups reinvest premiums in schools, wells and maternity funds chosen by members.",
      "Look for buyers who name the cooperative or zone on the packet and pay harvest season advances.",
    ],
    seasonNote: "Main harvest from September to November; the short cycle allows a second early planting in good rain years.",
  },
  {
    slug: "jos-plateau-acha",
    name: "Acha Growers of the Jos Plateau",
    kind: "Smallholder clusters and aggregators",
    region: "West Africa",
    country: "Nigeria",
    crops: ["Fonio (acha)", "Sorghum"],
    image: "/images/producers/acha-nigeria.jpg",
    imageAlt: "Young Nigerian farmers holding up their harvest together in the field",
    whatTheyDo:
      "On the cool Jos Plateau and in nearby valleys of Plateau, Nasarawa and Kaduna states, smallholder families intercrop acha with sorghum and vegetables on plots of one to three hectares. Local aggregators collect at farm gate, and urban processors in Jos and Abuja mill acha flour for porridge and modern retail packs.",
    ethicalNotes: [
      "Farm gate collection prices move with fuel costs; transparent weighing and same week payment matter as much as the number itself.",
      "Plateau acha has geographic story value that should reward the growers who keep the landrace alive.",
      "Intermixed harvests mean careful cleaning; processors who invest in sorting keep farmer reputation high.",
    ],
    seasonNote: "Planted with the first rains around May, harvested August to October.",
  },
  {
    slug: "tigray-teff",
    name: "Teff Farming Households, Ethiopian Highlands",
    kind: "Family farms and primary cooperatives",
    region: "Horn of Africa",
    country: "Ethiopia, Eritrea",
    crops: ["Teff", "Finger millet (dagussa)"],
    image: "/images/producers/teff-ethiopia.jpg",
    imageAlt: "A wooden sieve resting on a pile of grain in bright sunlight",
    whatTheyDo:
      "Teff is grown by millions of highland family farms, often on plots under a hectare, in a demanding cycle of tiny seed broadcasting, ox plow tillage, careful weeding and sickle harvest. Primary cooperatives aggregate grain, and union level stores stabilize supply between Addis Ababa's mills and regional markets.",
    ethicalNotes: [
      "Teff is a national staple; export rules have shifted over the years to keep local supply first, and respectful trade follows that priority.",
      "Improved seed access and fair moisture testing at collection points are the two issues farmers raise most.",
      "Straw is half the crop's value; agreements that ignore fodder hurt the household even when grain price looks fair.",
    ],
    seasonNote: "Planted at the start of the kiremt rains (June to July), harvested November to January.",
  },
  {
    slug: "drylands-moringa",
    name: "Drylands Moringa Growers and Dryers",
    kind: "Homestead growers, women's drying groups",
    region: "East Africa",
    country: "Kenya, Tanzania",
    crops: ["Moringa"],
    image: "/images/producers/moringa-kenya.jpg",
    imageAlt: "Close-up of fresh moringa leaves of the kind dried by small processors",
    whatTheyDo:
      "In dryland counties from Machakos and Kitui to the Kenyan and Tanzanian coast, moringa grows around homesteads, water pans and school compounds. Women's groups harvest leaflets, shade dry them on raised racks, mill the powder and pack it for markets, nutrition programs and export buyers.",
    ethicalNotes: [
      "Shade drying on clean raised racks protects color and nutrients; groups that invest in proper drying deserve premiums over sun scoured leaf.",
      "Leaf harvest should never strip a tree bare; ethical buyers train sustainable pruning.",
      "Nutrition program demand can spike prices locally; the best initiatives buy surplus without crowding out household use.",
    ],
    seasonNote: "Leaves harvest year round where water allows, peaking after rains; the dry season is moringa's moment of greatest value.",
  },
  {
    slug: "sahel-baobab-collectors",
    name: "Baobab Wild Harvest Collectors of the Sahel",
    kind: "Community wild harvest groups",
    region: "Sahel",
    country: "Senegal, Mali, Burkina Faso",
    crops: ["Baobab"],
    image: "/images/producers/baobab-sahel.jpg",
    imageAlt: "A majestic baobab tree in the lush Senegalese countryside",
    whatTheyDo:
      "Baobab is wild harvested rather than farmed: collector groups, largely women, gather fallen and picked pods across communal lands, crack them, sieve the pulp into powder and sell through national unions and export programs. Community harvest agreements decide who may collect where, protecting both trees and household income.",
    ethicalNotes: [
      "Wild harvest keeps standing baobabs worth more alive than cleared; buyers should fund guardian communities, not just collect from them.",
      "Pod collection should leave enough on the ground and canopy for wildlife and regeneration.",
      "Traceability to collector groups and prompt payment after weighing are the markers of a serious program.",
    ],
    seasonNote: "Pods ripen and are collected through the dry season, roughly November to May.",
  },
  {
    slug: "niger-millet-markets",
    name: "Millet Growers and Millers of Niger and Northern Nigeria",
    kind: "Village growers, market millers",
    region: "Sahel",
    country: "Niger, Nigeria",
    crops: ["Pearl millet", "Sorghum"],
    image: "/images/producers/millet-niger.jpg",
    imageAlt: "Pearl millet plants reaching toward a clear sky in a grower field",
    whatTheyDo:
      "Pearl millet is the Sahel's insurance crop, grown by village households on sandy soils with rainfall that would end maize farming. Market towns run hammer mills where families bring grain to be milled into fura and porridge meal, and traders move surplus along the Niger and Nigeria corridors to city markets.",
    ethicalNotes: [
      "The village miller is infrastructure: fair milling fees and maintained machines keep grain local instead of lost to spoilage.",
      "Granary credit (selling forward in lean months) can trap households in low prices; warehouse receipt systems are the healthier alternative.",
      "Support buyers who purchase at harvest when prices are fair, not only in the hungry season.",
    ],
    seasonNote: "Planted with first rains (June), harvested October to December across the belt.",
  },
  {
    slug: "zimbabwe-smallgrains",
    name: "Small Grains Growers of Zimbabwe's Dry Districts",
    kind: "Smallholder groups and seed savers",
    region: "Southern Africa",
    country: "Zimbabwe, Zambia",
    crops: ["Finger millet (zviyo)", "Sorghum", "Pearl millet", "Bambara (nyemba)"],
    image: "/images/producers/smallgrains-zimbabwe.jpg",
    imageAlt: "Dryland farming country under dramatic skies in Southern Africa",
    whatTheyDo:
      "In Masvingo, Matabeleland and the Zambezi valley, farming households grow zviyo, sorghum and nyemba in fields rotated with maize, keeping landrace seed in family granaries for years. Community seed fairs and small grains programs have revived exchange of named varieties, and women lead much of the seed selection and storage.",
    ethicalNotes: [
      "Seed sovereignty comes first: programs should multiply and return seed to communities, not extract landraces for commercial breeding without benefit sharing.",
      "Traditional beer demand (zviyo and sorghum malt) is a real market; fair local prices keep youth interested in the crop.",
      "Granary storage knowledge is an asset worth paying for in extension programs.",
    ],
    seasonNote: "Planted November to December with the rains, harvested April to June.",
  },
  {
    slug: "namibia-mahangu",
    name: "Mahangu Growers and Pounders of Northern Namibia",
    kind: "Homestead growers, communal mills",
    region: "Southern Africa",
    country: "Namibia",
    crops: ["Pearl millet (mahangu)"],
    image: "/images/producers/mahangu-namibia.jpg",
    imageAlt: "A red dirt road winding through Namibian savannah at sunset",
    whatTheyDo:
      "Mahangu is a national staple grown by homestead families in the north, where the harvest rhythm includes communal pounding and, increasingly, rural mill services. The grain feeds households first and markets second, and its straw and chaff cycle back to the fields and livestock.",
    ethicalNotes: [
      "Household food security leads: trade should buy surplus only, never the family's winter store.",
      "Rural milling services reduce women's pounding labor and post harvest losses; supporting them supports the whole chain.",
      "Mahangu landraces are adapted to extreme variability; conservation should stay in farmers' fields, not only in gene banks.",
    ],
    seasonNote: "Harvest peaks May to July, marked in some areas by first fruit ceremonies.",
  },
];

export const producerBySlug = new Map(producers.map((p) => [p.slug, p]));
