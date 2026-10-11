export interface MenuItem {
  name: string;
  category: "kaffee" | "torten" | "fruehstueck" | "drinks";
  price: number;
  originalPrice?: number;
  quantity: string;
  prepTimeInMinutes: number;
  imageUrl: string;
  badge?: string;
  isVegetarian?: boolean;
  description: string;
}

export const MENU_CATEGORIES = [
  { id: "alle", label: "Alle Spezialitäten" },
  { id: "kaffee", label: "Kaffee & Barista" },
  { id: "torten", label: "Torten & Patisserie" },
  { id: "fruehstueck", label: "Frühstück & Brunch" },
  { id: "drinks", label: "Erfrischungen & Drinks" },
] as const;

export const ALL_MENU_ITEMS: MenuItem[] = [
  // Kaffee
  {
    name: "Specialty Flat White",
    category: "kaffee",
    price: 4.6,
    quantity: "Doppelter Espresso, Hafermilch",
    prepTimeInMinutes: 3,
    imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    isVegetarian: true,
    description: "Samtig feinporiger Mikroschaum mit floralen Arabica-Noten aus Äthiopien.",
  },
  {
    name: "Signature Rose Velvet Latte",
    category: "kaffee",
    price: 5.2,
    quantity: "350 ml",
    prepTimeInMinutes: 4,
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    badge: "Signature",
    isVegetarian: true,
    description: "Espresso verfeinert mit natürlichem Rosenwasser und Bourbon-Vanille.",
  },
  {
    name: "Nitro Cold Brew on Tap",
    category: "kaffee",
    price: 4.9,
    quantity: "300 ml",
    prepTimeInMinutes: 2,
    imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    description: "18h kalt extrahiert, cremig gezapft mit samtiger Crema ohne Bitterstoffe.",
  },
  {
    name: "Classic Cappuccino Italiano",
    category: "kaffee",
    price: 4.2,
    quantity: "220 ml",
    prepTimeInMinutes: 3,
    imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    description: "Klassisch italienischer Roast mit schokoladig-nussigem Abgang.",
  },

  // Torten & Patisserie
  {
    name: "Himbeer-Pistazien Törtchen",
    category: "torten",
    price: 5.9,
    originalPrice: 6.5,
    quantity: "Hausgemacht",
    prepTimeInMinutes: 2,
    imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    badge: "Meisterwerk",
    isVegetarian: true,
    description: "Knuspriger Mürbeteigboden, sizilianische Pistaziencreme und frische Himbeeren.",
  },
  {
    name: "Heidelbeer-Cheesecake Tarte",
    category: "torten",
    price: 5.4,
    quantity: "Tagesfrisch",
    prepTimeInMinutes: 2,
    imageUrl: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    description: "Cremiger New York Style Frischkäse auf Mandelboden mit Waldheidelbeeren.",
  },
  {
    name: "Artisan Macarons Selection (4er)",
    category: "torten",
    price: 6.8,
    quantity: "4 Stück",
    prepTimeInMinutes: 1,
    imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",
    badge: "Beliebt",
    isVegetarian: true,
    description: "Zarte Mandelbaisers in den Sorten Pistazie, Rose-Himbeere, Vanille & Karamell.",
  },
  {
    name: "Triple Chocolate Lava Törtchen",
    category: "torten",
    price: 6.2,
    quantity: "Warm serviert",
    prepTimeInMinutes: 4,
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    description: "Warmer Schokokuchen mit flüssigem 70% Valrhona-Kern und Beerenkompott.",
  },

  // Frühstück & Brunch
  {
    name: "Avocado & Sauerteig Deluxe",
    category: "fruehstueck",
    price: 9.8,
    quantity: "Große Portion",
    prepTimeInMinutes: 6,
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    badge: "Brunch Hit",
    isVegetarian: true,
    description: "Geröstetes Steinofenbrot, frische Guacamole, Bio-Kresse und Granatapfelkerne.",
  },
  {
    name: "Berry Acai Glow Bowl",
    category: "fruehstueck",
    price: 8.9,
    quantity: "Bio Bowl",
    prepTimeInMinutes: 5,
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    description: "Gefrorenes Açaí-Püree mit knusprigem Granola, Chiasamen und frischen Beeren.",
  },
  {
    name: "Warmes Pistazien-Croissant",
    category: "fruehstueck",
    price: 4.5,
    quantity: "Ofenfrisch",
    prepTimeInMinutes: 2,
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    badge: "Neu",
    isVegetarian: true,
    description: "Butter-Blätterteig, gefüllt mit samtig geschlagener Pistazien-Ganache.",
  },

  // Erfrischungen & Drinks
  {
    name: "Pink Dragonfruit Spritz",
    category: "drinks",
    price: 5.6,
    quantity: "400 ml",
    prepTimeInMinutes: 3,
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    badge: "Erfrischung",
    isVegetarian: true,
    description: "Drachenfrucht-Essenz, Limette, Minze und prickelndes Quellwasser.",
  },
  {
    name: "Hausgemachter Hibiskus-Eistee",
    category: "drinks",
    price: 4.8,
    quantity: "400 ml",
    prepTimeInMinutes: 3,
    imageUrl: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    description: "Kalt gebrühte Bio-Hibiskusblüten mit Johannisbeere und Zitrone.",
  },
];
