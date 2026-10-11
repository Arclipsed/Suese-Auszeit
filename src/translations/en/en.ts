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
        subtitle: "How a shared dream became our beloved waterfront haven",
        description:
          "It all started with the wish for a tranquil escape from everyday hustle: a place where time slows down, aromatic specialty coffee fills the air, and every pastry is decorated with love. Together with our passionate crew, we founded Café Süße Auszeit – an oasis of warmth, comfort, and sweet indulgence.",
        bullets: [
          "Created out of love for artisan baking and specialty coffee culture",
          "Focus on regional organic ingredients and ethical direct trade",
          "A friendly team welcoming every guest like a close friend",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Our team baking with passion in the kitchen",
      },
      {
        tag: "Barista Craft",
        title: "Coffee Artistry in Perfection",
        subtitle: "Carefully sourced beans, gentle roasting & silky latte art",
        description:
          "Our barista team views coffee not merely as caffeine, but as a rich sensory ritual. We source beans from transparent, sustainable micro-farms. From nuanced espresso to velvety flat whites and signature drinks like our Ruby Rose Latte – each cup is handcrafted with devotion.",
        bullets: [
          "100% single-origin Arabica specialty beans from ethical farms",
          "Silky microfoam with organic dairy or plant-based alternatives at no extra cost",
          "Handcrafted precisely according to barista competition standards",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Barista preparing specialty coffee drinks",
      },
      {
        tag: "In-House Bakery",
        title: "Sweet Masterpieces Fresh Every Morning",
        subtitle: "Traditional European patisserie meets contemporary pastry arts",
        description:
          "Each morning in our bakery starts before sunrise. We deliberately avoid artificial flavors or pre-made mixes. Instead, we rely on genuine Bourbon vanilla, fine Belgian chocolate, handpicked fresh fruits, and treasured recipes.",
        bullets: [
          "Daily fresh tarts, cakes, croissants, and seasonal delicacies",
          "Wide selection of vegan and gluten-friendly creations",
          "Hand-decorated with edible blossoms and seasonal fruits",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Artisanal pastries and tarts in the bakery display",
      },
      {
        tag: "The Atmosphere",
        title: "Your Oasis with Waterfront Lounge Vibe",
        subtitle: "Unwind inside in plush velvet seating or on the lakefront terrace",
        description:
          "Süße Auszeit is more than just a café – it's your extended living room. Our interior pairs cozy armchairs with ambient warm neon lounge lighting. On our spacious lake terrace, you can enjoy the fresh breeze, watch the water, and let your thoughts drift away.",
        bullets: [
          "Spacious sun terrace directly along the scenic waterfront promenade",
          "Cozy lounge corners with atmospheric lighting and acoustics",
          "The ideal retreat for meetups, afternoon tea, or quiet contemplation",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Cozy café interior and waterfront terrace lounge",
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
