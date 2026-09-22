export type TravelPreference = "culture" | "scenery" | "hiking";

export interface Destination {
  id: number;
  title: string;
  country: string;
  city: string;
  bestMonths: string[];
  seasonReason: string;
  flightHours: number;
  entryNote: string;
  priceVolatility: string;
  preferences: TravelPreference[];
  description: string;
  gradient: string;
  images: string[];
}

export const destinations: Destination[] = [
  // === INTERNATIONAL ===
  {
    id: 1,
    title: "SAMARKAND",
    country: "UZBEKISTAN",
    city: "Samarkand",
    bestMonths: ["April", "May", "September", "October"],
    seasonReason: "Spring and autumn bring comfortable temperatures and the golden registan glows under soft light.",
    flightHours: 8,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "Usually stable, spring prices rise slightly",
    preferences: ["culture"],
    description: "Ancient Silk Road crossroads where turquoise domes meet centuries of mosaic craft.",
    gradient: "linear-gradient(135deg, #3d2b1f 0%, #1a120d 50%, #2e1f14 100%)",
    images: ["/destinations/samarkand-01.jpg", "/destinations/samarkand-02.jpg", "/destinations/samarkand-03.jpg"],
  },
  {
    id: 2,
    title: "BUKHARA",
    country: "UZBEKISTAN",
    city: "Bukhara",
    bestMonths: ["April", "May", "September", "October"],
    seasonReason: "Spring and autumn offer the most comfortable temperatures for walking the old city.",
    flightHours: 8,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "Stable, low season price drops",
    preferences: ["culture"],
    description: "A living museum of Islamic architecture where the Ark fortress watches over caravanserais.",
    gradient: "linear-gradient(135deg, #4a3525 0%, #2a1e14 50%, #3d2b1f 100%)",
    images: ["/destinations/bukhara-01.jpg", "/destinations/bukhara-02.jpg", "/destinations/bukhara-03.jpg"],
  },
  {
    id: 3,
    title: "ALMATY",
    country: "KAZAKHSTAN",
    city: "Almaty",
    bestMonths: ["May", "June", "September", "October"],
    seasonReason: "Late spring and early autumn offer mild weather and the best mountain hiking conditions.",
    flightHours: 7,
    entryNote: "Visa-free for Chinese citizens (14 days)",
    priceVolatility: "Seasonal - summer peaks, spring shoulder lower",
    preferences: ["scenery", "hiking"],
    description: "Nestled against the Tian Shan, Central Asia's most cultured city blends urban energy with mountain wilderness.",
    gradient: "linear-gradient(135deg, #2d3530 0%, #1a221d 50%, #1e2e28 100%)",
    images: ["/destinations/almaty-01.jpg"],
  },
  {
    id: 4,
    title: "GEORGE TOWN",
    country: "MALAYSIA",
    city: "George Town, Penang",
    bestMonths: ["November", "December", "January", "February", "March"],
    seasonReason: "The northeast monsoon retreat brings drier conditions to Penang's streets and food stalls.",
    flightHours: 6,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "High - festive seasons spike, low season affordable",
    preferences: ["culture", "scenery"],
    description: "Street art and colonial-era shophouses coexist with some of the world's best street food.",
    gradient: "linear-gradient(135deg, #c4956a 0%, #8b6940 50%, #5c4033 100%)",
    images: ["/destinations/george-town-penang.jpg"],
  },
  {
    id: 5,
    title: "ABU DHABI",
    country: "UAE",
    city: "Abu Dhabi",
    bestMonths: ["November", "December", "January", "February", "March"],
    seasonReason: "Winter temperatures drop to a pleasant 25C, making outdoor exploration comfortable.",
    flightHours: 8,
    entryNote: "Visa on arrival or ETA for Chinese citizens",
    priceVolatility: "High - winter peaks, summer extremely low",
    preferences: ["scenery"],
    description: "Desert dunes meet futuristic architecture in a city that balances tradition and ambition.",
    gradient: "linear-gradient(135deg, #d4a856 0%, #8b7340 50%, #5c4a2a 100%)",
    images: ["/destinations/abu-dhabi-01.jpg", "/destinations/abu-dhabi-02.jpg"],
  },
  {
    id: 6,
    title: "ISTANBUL",
    country: "TURKEY",
    city: "Istanbul",
    bestMonths: ["April", "May", "September", "October"],
    seasonReason: "Spring and autumn bring comfortable temperatures and fewer crowds to the Bosphorus.",
    flightHours: 9,
    entryNote: "Visa-free for Chinese citizens (90 days)",
    priceVolatility: "Moderate - peak summer higher, shoulder seasons better value",
    preferences: ["culture"],
    description: "Where continents collide - Byzantine domes, bazaars, and the Bosphorus flow between continents.",
    gradient: "linear-gradient(135deg, #3d3530 0%, #1e1c1a 50%, #2e2820 100%)",
    images: ["/destinations/istanbul-01.jpg", "/destinations/istanbul-02.jpg", "/destinations/istanbul-03.jpg"],
  },
  {
    id: 7,
    title: "ELLA + SIGIRIYA",
    country: "SRI LANKA",
    city: "Ella & Sigiriya",
    bestMonths: ["January", "February", "March", "July", "August"],
    seasonReason: "The dry inter-monsoon window offers clear views of Sigiriya rock and Ella's tea hills.",
    flightHours: 10,
    entryNote: "ETA available for Chinese citizens",
    priceVolatility: "Moderate - peak season December-January higher",
    preferences: ["scenery", "hiking"],
    description: "Tea-clad hills, ancient rock fortresses, and a tropical landscape unlike anywhere else.",
    gradient: "linear-gradient(135deg, #4a7a5a 0%, #2d5a3d 50%, #1e3d2a 100%)",
    images: [],
  },
  {
    id: 8,
    title: "TBILISI + KAZBEGI",
    country: "GEORGIA",
    city: "Tbilisi & Kazbegi",
    bestMonths: ["May", "June", "September", "October"],
    seasonReason: "Late spring and early autumn bring perfect hiking weather in the Caucasus.",
    flightHours: 9,
    entryNote: "Visa-free for Chinese citizens (1 year)",
    priceVolatility: "Stable - shoulder seasons are the sweet spot",
    preferences: ["scenery", "hiking"],
    description: "Ancient wine culture meets modern creative energy in the Caucasus, with mountain peaks above.",
    gradient: "linear-gradient(135deg, #3d2820 0%, #1e1814 50%, #2e1e18 100%)",
    images: [],
  },
  {
    id: 9,
    title: "DOHA",
    country: "QATAR",
    city: "Doha",
    bestMonths: ["November", "December", "January", "February", "March"],
    seasonReason: "Winter brings comfortable temperatures and the city opens up with outdoor cultural events.",
    flightHours: 8,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "High - winter peaks, summer extremely low",
    preferences: ["culture", "scenery"],
    description: "Desert horizons meet modern sculpture and museum culture on the Arabian Gulf.",
    gradient: "linear-gradient(135deg, #c9a86a 0%, #8b7340 50%, #5c4a2a 100%)",
    images: [],
  },
  // === DOMESTIC CHINA ===
  {
    id: 10,
    title: "TIANSUI",
    country: "GANSU",
    city: "Tianshui",
    bestMonths: ["May", "June", "September", "October"],
    seasonReason: "Spring and autumn offer the best weather for exploring street food and Maijishan cave temples.",
    flightHours: 3,
    entryNote: "No entry requirements (domestic)",
    priceVolatility: "Low - domestic prices remain stable",
    preferences: ["culture", "hiking"],
    description: "China's hidden culinary capital - spicy soup, paper-cutting, and 1,600-year-old cave temples.",
    gradient: "linear-gradient(135deg, #4a4035 0%, #2e2820 50%, #3d3530 100%)",
    images: ["/destinations/tianshui-01.jpg"],
  },
  {
    id: 11,
    title: "KASHGAR",
    country: "XINJIANG",
    city: "Kashgar",
    bestMonths: ["May", "June", "September", "October"],
    seasonReason: "The Silk Road's oasis town is most comfortable in spring and autumn before winter snow.",
    flightHours: 5,
    entryNote: "Domestic travel - ID card required",
    priceVolatility: "Moderate - festival seasons spike",
    preferences: ["culture", "scenery"],
    description: "The last great Silk Road bazaar where Uyghur culture thrives in a desert oasis.",
    gradient: "linear-gradient(135deg, #6b5a3a 0%, #3d3020 50%, #2e2518 100%)",
    images: ["/destinations/kashgar-01.jpg", "/destinations/kashgar-02.jpg", "/destinations/kashgar-03.jpg"],
  },
  {
    id: 12,
    title: "QUANZHOU",
    country: "FUJIAN",
    city: "Quanzhou",
    bestMonths: ["March", "April", "October", "November"],
    seasonReason: "Mild temperatures and lower humidity make it ideal for exploring UNESCO heritage sites.",
    flightHours: 2,
    entryNote: "No entry requirements (domestic)",
    priceVolatility: "Low - stable domestic pricing",
    preferences: ["culture"],
    description: "The ancient Asian trading hub where mosques, temples, and Minnan architecture share one street.",
    gradient: "linear-gradient(135deg, #8b7050 0%, #5c4030 50%, #3d2e20 100%)",
    images: ["/destinations/quanzhou-01.jpg"],
  },
  {
    id: 13,
    title: "DANBA",
    country: "SICHUAN",
    city: "Danba",
    bestMonths: ["May", "June", "September", "October"],
    seasonReason: "The Tibetan highlands are accessible in spring and autumn, with dramatic valley scenery.",
    flightHours: 4,
    entryNote: "No entry requirements (domestic)",
    priceVolatility: "Low - domestic prices stable",
    preferences: ["scenery", "hiking"],
    description: "Towering Tibetan fortresses rise above abyssal valleys in one of China's most remote landscapes.",
    gradient: "linear-gradient(135deg, #3a5a4a 0%, #1e3d2d 50%, #2e4a3a 100%)",
    images: ["/destinations/danba-01.jpg", "/destinations/danba-02.jpg"],
  },
  {
    id: 14,
    title: "LESHAN",
    country: "SICHUAN",
    city: "Leshan",
    bestMonths: ["March", "April", "May", "September", "October"],
    seasonReason: "Comfortable temperatures and clear water make it ideal for visiting the giant Buddha.",
    flightHours: 3,
    entryNote: "No entry requirements (domestic)",
    priceVolatility: "Low - stable domestic pricing",
    preferences: ["scenery"],
    description: "A thousand-year-old stone Buddha gazes out over the confluence of three rivers.",
    gradient: "linear-gradient(135deg, #5a6a50 0%, #2e3d2a 50%, #3d4a35 100%)",
    images: ["/destinations/leshan-01.jpg"],
  },
  {
    id: 15,
    title: "SHANGRI-LA",
    country: "YUNNAN",
    city: "Shangri-La",
    bestMonths: ["May", "June", "September", "October"],
    seasonReason: "The Tibetan plateau blooms in late spring and autumn brings golden grasslands.",
    flightHours: 3,
    entryNote: "No entry requirements (domestic)",
    priceVolatility: "Low - stable domestic pricing",
    preferences: ["scenery", "culture"],
    description: "High-altitude Tibetan monasteries and vast grasslands feel like a place frozen in time.",
    gradient: "linear-gradient(135deg, #5a5a6a 0%, #2e2e3d 50%, #3a3a4a 100%)",
    images: ["/destinations/shangri-la-01.jpg", "/destinations/shangri-la-02.jpg"],
  },
  // === POTENTIAL ADDITIONS ===
  {
    id: 16,
    title: "TASHKENT",
    country: "UZBEKISTAN",
    city: "Tashkent",
    bestMonths: ["April", "May", "September", "October"],
    seasonReason: "The capital offers a more modern contrast to the ancient Silk Road cities.",
    flightHours: 8,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "Stable - moderate seasonal variation",
    preferences: ["culture"],
    description: "A modern Soviet-influenced capital with hidden Soviet-era mosaics and vibrant bazaars.",
    gradient: "linear-gradient(135deg, #5a4a35 0%, #2e2518 50%, #3d3020 100%)",
    images: [],
  },
  {
    id: 17,
    title: "BAKU",
    country: "AZERBAIJAN",
    city: "Baku",
    bestMonths: ["April", "May", "September", "October"],
    seasonReason: "Mild coastal weather makes it ideal for exploring the old city and modern architecture.",
    flightHours: 9,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "Moderate - seasonal variation",
    preferences: ["culture", "scenery"],
    description: "Fire temple heritage meets futuristic architecture on the Caspian Sea coast.",
    gradient: "linear-gradient(135deg, #3a4a5a 0%, #1e2e3d 50%, #2a3a4a 100%)",
    images: [],
  },
  {
    id: 18,
    title: "CHIANG MAI",
    country: "THAILAND",
    city: "Chiang Mai",
    bestMonths: ["November", "December", "January", "February"],
    seasonReason: "The cool season is the most comfortable time to explore temples and mountain villages.",
    flightHours: 6,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "High - cool season peaks, hot season lower",
    preferences: ["culture", "scenery"],
    description: "Northern Thailand's cultural heart - ancient temples, night bazaars, and mountain tribes.",
    gradient: "linear-gradient(135deg, #8b9a6a 0%, #5c6a40 50%, #3d4a2a 100%)",
    images: [],
  },
  {
    id: 19,
    title: "SINGAPORE",
    country: "SINGAPORE",
    city: "Singapore",
    bestMonths: ["February", "March", "April", "May"],
    seasonReason: "The drier months make outdoor exploration more pleasant in this tropical city-state.",
    flightHours: 6,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "High - peak seasons and F1 period spike",
    preferences: ["culture"],
    description: "A garden city where Chinese, Malay, Indian, and Western cultures converge seamlessly.",
    gradient: "linear-gradient(135deg, #4a6a7a 0%, #2a4a5a 50%, #1e3a4a 100%)",
    images: [],
  },
  {
    id: 20,
    title: "BANGKOK",
    country: "THAILAND",
    city: "Bangkok",
    bestMonths: ["November", "December", "January", "February"],
    seasonReason: "The cool and dry season makes temple-hopping and street food exploration comfortable.",
    flightHours: 5,
    entryNote: "Visa-free for Chinese citizens (30 days)",
    priceVolatility: "High - cool season peaks, hot season much lower",
    preferences: ["culture"],
    description: "The City of Angels blends grand palaces, floating markets, and relentless energy.",
    gradient: "linear-gradient(135deg, #9a7a5a 0%, #6a5a3a 50%, #4a3a2a 100%)",
    images: [],
  },
  {
    id: 21,
    title: "MALE",
    country: "MALDIVES",
    city: "Male",
    bestMonths: ["November", "December", "January", "February", "March", "April"],
    seasonReason: "The dry season offers crystal-clear turquoise waters and perfect visibility for underwater life.",
    flightHours: 6,
    entryNote: "Visa on arrival (ETA) for Chinese citizens (30 days)",
    priceVolatility: "High - dry season peaks, wet season significantly lower",
    preferences: ["scenery"],
    description: "A scattered archipelago where overwater villas meet infinite Indian Ocean horizons.",
    gradient: "linear-gradient(135deg, #1a5a7a 0%, #0d3b5e 50%, #0a2a42 100%)",
    images: [],
  },
  {
    id: 22,
    title: "OSAKA",
    country: "JAPAN",
    city: "Osaka",
    bestMonths: ["March", "April", "October", "November"],
    seasonReason: "Cherry blossoms in spring and autumn foliage make this city a seasonal spectacle.",
    flightHours: 4,
    entryNote: "Visa-free for Chinese citizens (15 days)",
    priceVolatility: "Moderate - cherry blossom period peaks, shoulder seasons better value",
    preferences: ["culture", "scenery"],
    description: "Japan's kitchen - street food capital where ancient temples meet neon-lit nightlife.",
    gradient: "linear-gradient(135deg, #8a4a5a 0%, #5a2a3a 50%, #3a1a2a 100%)",
    images: [],
  },
];

export function getBestMonth(departureDate: string): string {
  if (!departureDate) return "";
  const date = new Date(departureDate + "T00:00:00");
  return date.toLocaleString("en-US", { month: "long" });
}

export function calculateScore(
  dest: Destination,
  departureMonth: string,
  preferences: TravelPreference[]
): number {
  let score = 0;

  if (dest.bestMonths.includes(departureMonth)) {
    score += 40;
  } else if (dest.bestMonths.length > 0) {
    score += Math.round(40 * 0.4);
  }

  const matchingPrefs = preferences.filter((p) => dest.preferences.includes(p));
  score += matchingPrefs.length * 20;

  if (dest.flightHours <= 5) {
    score += 20;
  } else if (dest.flightHours <= 8) {
    score += 15;
  } else {
    score += 10;
  }

  return score;
}

export function getRecommendations(
  departureMonth: string,
  preferences: TravelPreference[]
) {
  const scored = destinations
    .map((d) => ({ ...d, score: calculateScore(d, departureMonth, preferences) }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  scored.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    return a.flightHours - b.flightHours;
  });

  return {
    top: scored.slice(0, 5),
    more: scored.slice(5),
    totalResults: scored.length,
  };
}

export function buildFlightDeepLink(
  destination: Destination,
  departureDate: string,
  returnDate: string
): string {
  const origin = "SHA";
  const destCode = destination.city
    .split(/[\s+]/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00");
    return date.toISOString().split("T")[0];
  };
  return `https://www.skyscanner.net/search/flights/${origin.toLowerCase()}${destCode}/${formatDate(departureDate)}/${formatDate(returnDate)}`;
}
