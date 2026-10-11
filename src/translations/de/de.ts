import { ITranslation } from "../ITranslation";

export const DE: ITranslation = {
  Navigation: {
    HomeLabel: "Startseite",
    MenuLabel: "Speisekarte",
    AboutLabel: "Über uns",
    ContactLabel: "Öffnungszeiten & Anfahrt",
    ReserveLabel: "Tisch reservieren",
    DropdownItems: [
      {
        title: "Crêpes süß & herzhaft",
        description: "18 süße & 4 herzhafte Variationen, frisch auf der Platte gebacken.",
        badge: "Frisch",
        href: "/speisekarte",
      },
      {
        title: "Crêpe-Bowls",
        description: "Lotus, Bueno und Raffaello mit frischen Früchten & Toppings.",
        badge: "Signature",
        href: "/speisekarte",
      },
      {
        title: "Waffeln",
        description: "Knusprige Herzwaffeln mit Puderzucker, Früchten oder Softeis.",
        badge: "Beliebt",
        href: "/speisekarte",
      },
      {
        title: "Softeis & Getränke",
        description: "Dänisches Softeis, große Eisbecher, Kaffeespezialitäten & Erfrischungen.",
        badge: "Klassiker",
        href: "/speisekarte",
      },
    ],
    DropdownHighlight: {
      tag: "Hafen-Empfehlung",
      title: "Crêpe-Bowl Lotus & frischer Cappuccino",
      description: "Lotus-Creme, Bananen, Lotus-Keks & aromatischer Kaffee mit Hafenblick.",
      href: "/speisekarte",
    },
  },

  HomePage: {
    MetaTags: {
      title: "Süße Auszeit — Hafencafé Eckernförde",
      description:
        "Willkommen im Café Süße Auszeit direkt an der Schiffbrücke in Eckernförde. Crêpes, knusprige Waffeln, dänisches Softeis und Kaffeespezialitäten mit Hafenblick.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Café", "Eckernförde", "Crêpes", "Waffeln", "Softeis", "Kaffee", "Hafen"],
      url: "https://suesse-auszeit.example.com",
    },
    Headline: "Dein Hafencafé für Crêpes, Waffeln & Softeis",
    Subheadline: "Frisch gebacken, herrlich knusprig und direkt an der Hafenpromenade in Eckernförde.",
    Description:
      "Lass die Seele baumeln. Direkt an der Schiffbrücke kreieren wir täglich frische süße und herzhafte Crêpes, ofenfrische Waffeln, Softeis und duftenden Kaffee.",
    ExperienceBadge: "Hafencafé & Terrasse direkt am Wasser",
    PrimaryCta: "Speisekarte entdecken",
    SecondaryCta: "Tisch anfragen",
    TrustIndicators: [
      {
        title: "Hafenblick",
        subtitle: "Sonnige Terrasse",
      },
      {
        title: "100%",
        subtitle: "Frisch zubereitet",
        highlight: true,
      },
      {
        title: "To Go",
        subtitle: "Auch zum Mitnehmen",
      },
    ],
    ShowcaseTag: "Willkommen in der Auszeit",
    ShowcaseTitle: "Kaffee, Crêpes & Wohlfühlmomente",
    ShowcaseDescription:
      "Täglich frisch gebackene Waffeln, Softeis und Spezialitätenkaffee auf unserer idyllischen Seeterrasse in entspanntem Hafen-Flair.",
    ConceptTag: "Das Konzept",
    ConceptTitle: "Warum die „Süße Auszeit“ begeistert",
    Highlights: [
      {
        title: "Süße & herzhafte Crêpes",
        desc: "Über 22 Variationen – von Zimt & Zucker bis Camembert & Preiselbeeren.",
      },
      {
        title: "Knusprige Waffeln",
        desc: "Ofenfrisch gebacken mit Puderzucker, heißen Kirschen, Sahne oder Softeis.",
      },
      {
        title: "Dänisches Softeis",
        desc: "Cremig, kalt und lecker – bunte Streusel gibt’s bei jeder Portion gratis dazu.",
      },
      {
        title: "Hafenblick & Entspannung",
        desc: "Direkt an der Schiffbrücke mit Blick auf die Boote und die Eckernförder Bucht.",
      },
    ],
    PreviewBadge: "Aus unserer Backstube & Eistheke",
    PreviewTitle: "Unsere beliebtesten Spezialitäten",
    PreviewSubtitle: "Täglich frisch für dich zubereitet",
    PreviewCta: "Gesamte Speisekarte entdecken",
  },

  MenuPage: {
    MetaTags: {
      title: "Speisekarte — Süße Auszeit | Hafencafé Eckernförde",
      description:
        "Entdecke unsere Speisekarte: Süße & herzhafte Crêpes, Crêpe-Bowls, Waffeln, Softeis sowie heiße und kalte Getränke.",
      imgUrl: "https://suesse-auszeit.example.com/og/menu.png",
      tags: ["Speisekarte", "Crêpes", "Waffeln", "Softeis", "Kaffee", "Süße Auszeit"],
      url: "https://suesse-auszeit.example.com/speisekarte",
    },
    Headline: "Unsere Speisekarte",
    Subheadline: "Frisch. Lecker. Unwiderstehlich. Alle Speisen gibt es auch zum Mitnehmen.",
    AllCategories: "Alle Spezialitäten",
    Categories: {
      alle: "Alle Spezialitäten",
      "crepes-suess": "Süße Crêpes",
      "crepes-herzhaft": "Herzhafte Crêpes",
      bowls: "Crêpe-Bowls",
      waffeln: "Waffeln",
      softeis: "Softeis & Becher",
      heiss: "Heiße Getränke",
      kalt: "Kalte Getränke",
    },
    FreshlyServedText: "Frisch zubereitet in ca. {prepTime} Min.",
  },

  ContactPage: {
    MetaTags: {
      title: "Öffnungszeiten & Anfahrt — Café Süße Auszeit",
      description:
        "Finden Sie unsere aktuellen Öffnungszeiten, Live-Status und Anfahrtsinformationen mit Routenplaner direkt zur Hafenpromenade.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Öffnungszeiten", "Anfahrt", "Adresse", "Süße Auszeit", "Café"],
      url: "https://suesse-auszeit.example.com/kontakt",
    },
    Headline: "Öffnungszeiten & Anfahrt",
    Subheadline: "Besuchen Sie uns direkt am Wasser – hier finden Sie alle Details für Ihren Besuch.",
    OpeningHoursCardTitle: "Öffnungszeiten",
    OpenNowBadge: "Jetzt geöffnet",
    ClosedNowBadge: "Derzeit geschlossen",
    Days: {
      monday: "Montag",
      tuesday: "Dienstag",
      wednesday: "Mittwoch",
      thursday: "Donnerstag",
      friday: "Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
    },
    ClosedLabel: "Ruhetag",
    TimeSuffix: "Uhr",
    LocationCardTitle: "Standort & Kontakt",
    AddressLabel: "Adresse",
    WaterfrontHint: "Direkt an der Uferpromenade mit Wasserblick",
    PhoneLabel: "Telefon",
    EmailLabel: "E-Mail",
    CopyAddressButton: "Adresse kopieren",
    CopiedAddressButton: "Adresse kopiert!",
    OpenMapsButton: "In Google Maps öffnen",
    ScenicLocationTag: "Traumhafte Lage",
    ScenicLocationTitle: "Direkt an der Uferpromenade mit Außenbereich",
    ScenicLocationDesc:
      "Parkplätze finden Sie bequem entlang der Promenade. Auch mit dem Fahrrad oder Boot optimal erreichbar.",
  },

  AboutPage: {
    MetaTags: {
      title: "Über uns — Café Süße Auszeit | Handwerk, Herz & Leidenschaft",
      description:
        "Lernen Sie die Menschen und die Geschichte hinter Café Süße Auszeit kennen. Von handwerklicher Patisserie bis zur idyllischen Seeterrasse.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Über uns", "Team", "Geschichte", "Patisserie", "Barista", "Süße Auszeit"],
      url: "https://suesse-auszeit.example.com/ueber-uns",
    },
    Badge: "Unsere Geschichte & Passion",
    Headline: "Hinter jedem Genussmoment steht ein Herzschlag",
    Subheadline:
      "Café Süße Auszeit entstand aus dem Wunsch, einen Ort der puren Entspannung zu schaffen – mit erstklassigen Zutaten, echter Handwerkskunst und warmer Gastfreundschaft.",
    Sections: [
      {
        tag: "Die Gründer & Vision",
        title: "Eine Leidenschaft für das Besondere",
        subtitle: "Wie aus einem Traum unser Lieblingsplatz am Hafen wurde",
        description:
          "Begonnen hat alles mit der Sehnsucht nach einem Rückzugsort vom hektischen Alltag: Ein Platz, an dem die Zeit für eine Weile stillsteht, duftender Kaffee durch die Luft zieht und jeder Crêpe mit Hingabe von Hand gebacken wird. Gemeinsam mit unserem Team haben wir das Café Süße Auszeit direkt an der Schiffbrücke ins Leben gerufen – eine Oase der Wärme, Gemütlichkeit und süßen Verwöhnung.",
        bullets: [
          "Gegründet aus Liebe zur frischen Crêpe- und Waffelkultur",
          "Regionale Zutaten, echtes dänisches Softeis und bester Kaffee",
          "Ein herzliches Team, das jeden Gast wie einen guten Freund empfängt",
        ],
        imageSrc: "/Images/Tasty_Food.png",
        imageAlt: "Frisch zubereitete süße Köstlichkeiten im Café Süße Auszeit",
      },
      {
        tag: "Atmosphäre & Design",
        title: "Gemütliches Lounge-Flair mit Neon-Akzenten",
        subtitle: "Stilvoller Innenbereich zum Wohlfühlen, Verweilen und Genießen",
        description:
          "Unser Innenbereich empfängt dich mit stimmungsvoller Beleuchtung, warmen Akzenten und modernen Lounge-Elementen. Ob ein gemütlicher Nachmittag bei Schietwetter oder ein entspannter Abend nach einem Spaziergang am Hafen – hier findest du deinen perfekten Wohlfühlort.",
        bullets: [
          "Einzigartiges modernes Ambiente mit liebevollen Neon-Details",
          "Bequeme Sitzgelegenheiten für Dates, Freunde und Familien",
          "Warme, einladende Akustik und Musik zum Entspannen",
        ],
        imageSrc: "/Images/Inside_Night_1.png",
        imageAlt: "Stimmungsvoller Innenbereich des Hafencafés bei Nacht",
      },
      {
        tag: "Handgemachter Genuss",
        title: "Frisch auf der Platte gebacken",
        subtitle: "Knusprige Waffeln, Crêpes & köstliche Toppings",
        description:
          "Jeder Crêpe und jede Waffel wird bei uns frisch auf Bestellung zubereitet. Wir setzen auf hochwertige Zutaten: Von samtiger Lotus-Creme und Nutella bis zu frischen Früchten, Daim-Crunch und zart schmelzendem Käse für herzhafte Genießer.",
        bullets: [
          "Über 22 süße & herzhafte Crêpe-Variationen zur Auswahl",
          "Beliebte Crêpe-Bowls mit Früchten und Wunsch-Soßen",
          "Dänisches Softeis mit gratis bunten Streuseln",
        ],
        imageSrc: "/Images/Tasty_Food_2.png",
        imageAlt: "Frisch gebackene Waffeln und Crêpes bei Süße Auszeit",
      },
      {
        tag: "Die Hafenlage",
        title: "Direkt an der Schiffbrücke in Eckernförde",
        subtitle: "Drinnen stilvoll entspannen, draußen den Blick auf die Boote genießen",
        description:
          "Süße Auszeit liegt direkt an der malerischen Hafenpromenade. Auf unserer Außenterrasse kannst du die frische Ostseebrise spüren, den Kuttern beim Einlaufen zusehen und deinen Kaffee mit echtem Hafen-Panorama genießen.",
        bullets: [
          "Großzügige Terrasse direkt an der Uferpromenade",
          "Herrlicher Ausblick auf das Wasser und die Schiffe",
          "Der perfekte Treffpunkt vor oder nach dem Strandspaziergang",
        ],
        imageSrc: "/Images/Inside_Night_2.png",
        imageAlt: "Blick in den gemütlichen Gastraum des Cafés Süße Auszeit",
      },
    ],
    Cta: {
      badge: "Herzlich Willkommen",
      title: "Bereit für Ihre persönliche süße Auszeit?",
      description:
        "Kommen Sie vorbei, nehmen Sie Platz und lassen Sie sich von unserem Team mit duftendem Kaffee und handgefertigter Patisserie verwöhnen.",
    },
  },

  LegalPage: {
    MetaTags: {
      title: "Impressum — Süße Auszeit",
      description: "Impressum und rechtliche Anbieterkennzeichnung des Café Süße Auszeit.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Impressum", "Süße Auszeit", "Rechtliches"],
      url: "https://suesse-auszeit.example.com/impressum",
    },
    Headline: "Impressum",
    Subheadline: "Rechtliche Angaben und Anbieterkennzeichnung gemäß § 5 TMG",
  },

  PrivacyPage: {
    MetaTags: {
      title: "Datenschutzerklärung — Süße Auszeit",
      description: "Informationen zum Schutz Ihrer persönlichen Daten bei Nutzung unserer Website.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Datenschutz", "DSGVO", "Süße Auszeit"],
      url: "https://suesse-auszeit.example.com/datenschutz",
    },
    Headline: "Datenschutzerklärung",
    Subheadline: "Transparenz und Schutz Ihrer Privatsphäre nach der DSGVO",
  },

  Footer: {
    Tagline: "Dein Rückzugsort für exzellenten Kaffee, feine Patisserie und stimmungsvolle Stunden direkt am Wasser.",
    OpeningHoursTitle: "Öffnungszeiten",
    OpeningHoursWeekdays: "Di – Fr: 09:00 – 18:30 Uhr",
    OpeningHoursWeekend: "Sa & So: 09:30 – 19:00 Uhr (Mo Ruhetag)",
    ContactTitle: "Kontakt & Anfahrt",
    ContactAndLegalTitle: "Kontakt & Rechtliches",
    Address: "Schiffbrücke 10, 24340 Eckernförde",
    Phone: "+49 (0) 123 456 789",
    Email: "info@hafencafe-eckernfoerde.de",
    QuickLinksTitle: "Navigation",
    PrivacyLabel: "Datenschutz",
    ImprintLabel: "Impressum",
    Copyright: "Alle Rechte vorbehalten.",
    CraftedWithLove: "Handgefertigt mit Liebe & Kaffee direkt am Wasser.",
  },
};
