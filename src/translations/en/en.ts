import { ITranslation } from "../ITranslation";

export const EN: ITranslation = {
  Navigation: {
    HomeLabel: "Home",
    MenuLabel: "Menu",
    AboutLabel: "About Us",
    ContactLabel: "Hours & Location",
    ReserveLabel: "Reserve Table",
    DropdownItems: [
      {
        title: "Sweet & Savory Crêpes",
        description: "18 sweet & 4 savory variations, freshly baked on the hot plate.",
        badge: "Fresh",
        href: "/speisekarte",
      },
      {
        title: "Crêpe Bowls",
        description: "Lotus, Bueno, and Raffaello loaded with fresh fruits & toppings.",
        badge: "Signature",
        href: "/speisekarte",
      },
      {
        title: "Waffles",
        description: "Crispy heart-shaped waffles with powdered sugar, berries, or soft serve.",
        badge: "Popular",
        href: "/speisekarte",
      },
      {
        title: "Soft Serve & Drinks",
        description: "Danish soft-serve ice cream, sundae cups, coffee & chilled drinks.",
        badge: "Classic",
        href: "/speisekarte",
      },
    ],
    DropdownHighlight: {
      tag: "Harbor Special",
      title: "Crêpe Bowl Lotus & fresh Cappuccino",
      description: "Lotus Biscoff cream, bananas, cookies & aromatic coffee with harbor view.",
      href: "/speisekarte",
    },
  },

  HomePage: {
    MetaTags: {
      title: "Süße Auszeit — Harbor Café Eckernförde",
      description:
        "Welcome to Café Süße Auszeit right at the Schiffbrücke harbor in Eckernförde. Crêpes, waffles, soft-serve ice cream, and coffee overlooking the water.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Cafe", "Eckernförde", "Crepes", "Waffles", "Ice Cream", "Coffee", "Harbor"],
      url: "https://suesse-auszeit.example.com",
    },
    Headline: "Your harbor café for crêpes, waffles & soft serve",
    Subheadline: "Freshly baked, deliciously crispy, right along the waterfront promenade in Eckernförde.",
    Description:
      "Take a relaxing pause. At the Schiffbrücke harbor, we serve sweet and savory crêpes, hot waffles, soft-serve ice cream, and specialty coffee daily.",
    ExperienceBadge: "Harbor Café & Terrace Directly on the Water",
    PrimaryCta: "Explore Menu",
    SecondaryCta: "Book a Table",
    TrustIndicators: [
      {
        title: "Harbor View",
        subtitle: "Sunny Terrace",
      },
      {
        title: "100%",
        subtitle: "Freshly Prepared",
        highlight: true,
      },
      {
        title: "To Go",
        subtitle: "Takeaway Available",
      },
    ],
    ShowcaseTag: "Welcome to your Timeout",
    ShowcaseTitle: "Coffee, Crêpes & Cozy Moments",
    ShowcaseDescription:
      "Freshly baked waffles, soft serve, and coffee on our scenic water terrace with relaxing harbor vibes.",
    ConceptTag: "The Concept",
    ConceptTitle: "Why guests fall in love with Süße Auszeit",
    Highlights: [
      {
        title: "Sweet & Savory Crêpes",
        desc: "Over 22 variations – from cinnamon sugar to camembert & lingonberry.",
      },
      {
        title: "Crispy Waffles",
        desc: "Hot off the iron with powdered sugar, warm cherries, cream, or soft serve.",
      },
      {
        title: "Danish Soft Serve",
        desc: "Creamy and refreshing – complimentary colorful sprinkles with every serving.",
      },
      {
        title: "Harbor View & Relaxation",
        desc: "Directly at Schiffbrücke with scenic views of boats and the Baltic bay.",
      },
    ],
    PreviewBadge: "From our Bakery & Ice Counter",
    PreviewTitle: "Our Most Popular Specialties",
    PreviewSubtitle: "Freshly prepared for you every single day",
    PreviewCta: "Explore Full Menu",
  },

  MenuPage: {
    MetaTags: {
      title: "Menu — Süße Auszeit | Harbor Café Eckernförde",
      description:
        "Explore our menu: sweet & savory crêpes, crêpe bowls, waffles, Danish soft serve, and hot & cold beverages.",
      imgUrl: "https://suesse-auszeit.example.com/og/menu.png",
      tags: ["Menu", "Crepes", "Waffles", "Soft Serve", "Coffee", "Süße Auszeit"],
      url: "https://suesse-auszeit.example.com/speisekarte",
    },
    Headline: "Our Menu",
    Subheadline: "Fresh. Delicious. Irresistible. All items are also available for takeaway.",
    AllCategories: "All Specialties",
    Categories: {
      alle: "All Specialties",
      "crepes-suess": "Sweet Crêpes",
      "crepes-herzhaft": "Savory Crêpes",
      bowls: "Crêpe Bowls",
      waffeln: "Waffles",
      softeis: "Soft Serve & Cups",
      heiss: "Hot Beverages",
      kalt: "Cold Drinks",
    },
    FreshlyServedText: "Freshly prepared in approx. {prepTime} min.",
  },

  ContactPage: {
    MetaTags: {
      title: "Opening Hours & Location — Café Süße Auszeit",
      description: "Find our live opening hours, status, and navigation to the waterfront location.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Hours", "Directions", "Address", "Süße Auszeit", "Café"],
      url: "https://suesse-auszeit.example.com/kontakt",
    },
    Headline: "Opening Hours & Directions",
    Subheadline: "Visit us right by the water – here are all the details for your visit.",
    OpeningHoursCardTitle: "Opening Hours",
    OpenNowBadge: "Open now",
    ClosedNowBadge: "Currently closed",
    Days: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    },
    ClosedLabel: "Closed",
    TimeSuffix: "",
    LocationCardTitle: "Location & Contact",
    AddressLabel: "Address",
    WaterfrontHint: "Right on the promenade with water view",
    PhoneLabel: "Phone",
    EmailLabel: "Email",
    CopyAddressButton: "Copy address",
    CopiedAddressButton: "Address copied!",
    OpenMapsButton: "Open in Google Maps",
    ScenicLocationTag: "Scenic Location",
    ScenicLocationTitle: "Directly on the waterfront promenade with outdoor patio",
    ScenicLocationDesc:
      "Parking is conveniently available along the promenade. Also easily accessible by bicycle or boat.",
  },

  AboutPage: {
    MetaTags: {
      title: "About Us — Café Süße Auszeit | Craft, Passion & Community",
      description:
        "Meet the team and the story behind Café Süße Auszeit. Handcrafted patisserie, barista coffee, and relaxing waterfront vibes.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["About us", "Team", "Story", "Patisserie", "Barista", "Süße Auszeit"],
      url: "https://suesse-auszeit.example.com/ueber-uns",
    },
    Badge: "Our Story & Passion",
    Headline: "Behind every indulgent moment is heartfelt passion",
    Subheadline:
      "Café Süße Auszeit was born from the desire to create a sanctuary of relaxation – with premium ingredients, authentic craft, and warm hospitality.",
    Sections: [
      {
        tag: "Founders & Vision",
        title: "A Passion for the Extraordinary",
        subtitle: "How a shared dream became our beloved harbor sanctuary",
        description:
          "It all started with the wish for a tranquil retreat from everyday bustle: a place where time slows down, aromatic coffee fills the air, and every crêpe is freshly baked on the hot plate. Together with our passionate crew, we founded Café Süße Auszeit directly at Schiffbrücke – an oasis of warmth, comfort, and sweet indulgence.",
        bullets: [
          "Created out of love for artisan crêpes and waffle culture",
          "Regional ingredients, authentic Danish soft serve, and specialty coffee",
          "A friendly team welcoming every guest like a close friend",
        ],
        imageSrc: "/Images/Tasty_Food.png",
        imageAlt: "Freshly prepared sweet specialties at Café Süße Auszeit",
      },
      {
        tag: "Atmosphere & Design",
        title: "Cozy Lounge Vibe",
        subtitle: "Stylish interior to unwind, relax, and savor",
        description:
          "Our interior welcomes you with warm ambient lighting, glowing neon accents, and modern lounge comfort. Whether you seek shelter from brisk coastal breezes or wish to conclude an evening stroll along the harbor, you'll find your perfect cozy spot here.",
        bullets: [
          "Unique contemporary ambiance with charming neon lighting",
          "Comfortable seating corners for dates, friends, and families",
          "Warm acoustics and relaxing lounge music",
        ],
        imageSrc: "/Images/Inside_Night_1.png",
        imageAlt: "Atmospheric evening interior of the harbor café",
      },
      {
        tag: "Handcrafted Craft",
        title: "Fresh from the Hot Griddle",
        subtitle: "Crispy waffles, tender crêpes & decadent toppings",
        description:
          "Every single crêpe and waffle is baked fresh to order. We rely on top-quality ingredients: from velvety Lotus Biscoff spread and Nutella to fresh berries, Daim crunch, and melting cheeses for savory food lovers.",
        bullets: [
          "Over 22 sweet & savory crêpe creations to choose from",
          "Popular crêpe bowls loaded with fresh fruits and favorite sauces",
          "Danish soft-serve ice cream with complimentary colorful sprinkles",
        ],
        imageSrc: "/Images/Tasty_Food_2.png",
        imageAlt: "Freshly baked waffles and crêpes at Süße Auszeit",
      },
      {
        tag: "Scenic Waterfront",
        title: "Directly at the Schiffbrücke in Eckernförde",
        subtitle: "Relax inside in comfort or enjoy waterside boat views outside",
        description:
          "Süße Auszeit is situated directly along the picturesque harbor promenade. On our outdoor terrace, you can feel the Baltic sea breeze, watch boats gliding by, and enjoy your coffee with authentic maritime flair.",
        bullets: [
          "Spacious sun terrace directly along the harbor boardwalk",
          "Magnificent views of the waterfront and historic ships",
          "The ideal retreat before or after a stroll along the beach",
        ],
        imageSrc: "/Images/Inside_Night_2.png",
        imageAlt: "Cozy harbor café interior with warm seating",
      },
    ],
    Cta: {
      badge: "Warm Welcome",
      title: "Ready for your sweet timeout?",
      description:
        "Join us by the water, take a seat, and let our team pamper you with aromatic coffee and handcrafted patisserie.",
    },
  },

  LegalPage: {
    MetaTags: {
      title: "Legal Notice — Süße Auszeit",
      description: "Legal notice and operator information for Café Süße Auszeit.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Legal Notice", "Süße Auszeit", "Imprint"],
      url: "https://suesse-auszeit.example.com/impressum",
    },
    Headline: "Legal Notice",
    Subheadline: "Information pursuant to Section 5 TMG",
  },

  PrivacyPage: {
    MetaTags: {
      title: "Privacy Policy — Süße Auszeit",
      description: "Information about data privacy and how your data is handled.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Privacy Policy", "GDPR", "Süße Auszeit"],
      url: "https://suesse-auszeit.example.com/datenschutz",
    },
    Headline: "Privacy Policy",
    Subheadline: "Transparency and protection of your personal data under GDPR",
  },

  Footer: {
    Tagline: "Your destination for specialty coffee, artisan pastries, and vibrant moments right by the water.",
    OpeningHoursTitle: "Opening Hours",
    OpeningHoursWeekdays: "Tue – Fri: 09:00 AM – 06:30 PM",
    OpeningHoursWeekend: "Sat & Sun: 09:30 AM – 07:00 PM (Mon Closed)",
    ContactTitle: "Contact & Location",
    ContactAndLegalTitle: "Contact & Legal",
    Address: "Schiffbrücke 10, 24340 Eckernförde",
    Phone: "+49 (0) 123 456 789",
    Email: "info@hafencafe-eckernfoerde.de",
    QuickLinksTitle: "Navigation",
    PrivacyLabel: "Privacy Policy",
    ImprintLabel: "Legal Notice",
    Copyright: "All rights reserved.",
    CraftedWithLove: "Handcrafted with love & coffee by the water.",
  },
};
