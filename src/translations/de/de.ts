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
        subtitle: "Wie aus einem Traum unser Lieblingsplatz am Wasser wurde",
        description:
          "Begonnen hat alles mit der Sehnsucht nach einem Rückzugsort vom hektischen Alltag: Ein Platz, an dem die Zeit für eine Weile stillsteht, duftender Espresso durch die Luft zieht und jede Torte mit Hingabe von Hand garniert wird. Gemeinsam mit unserem Team haben wir das Café Süße Auszeit ins Leben gerufen – eine Oase der Wärme, Gemütlichkeit und süßen Verwöhnung.",
        bullets: [
          "Gegründet aus Liebe zur traditionellen Back- und Kaffeekultur",
          "Fokus auf regionale Bio-Zutaten und faire Partnerschaften",
          "Ein herzliches Team, das jeden Gast wie einen guten Freund empfängt",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Unser Gründer-Team mit Leidenschaft in der Backstube",
      },
      {
        tag: "Barista-Handwerk",
        title: "Kaffeekunst in Perfektion",
        subtitle: "Ausgewählte Bohnen, aromaschonende Röstung & Latte Art",
        description:
          "Unser Barista-Team versteht Kaffee nicht nur als Wachmacher, sondern als echtes Sinneserlebnis. Wir beziehen unsere Bohnen aus transparenten, nachhaltigen Direktkooperationen. Ob feinsinniger Espresso, samtiger Flat White oder unsere Signature Kreationen wie der Ruby Rose Latte – jede Tasse wird mit Präzision und Herzblut zubereitet.",
        bullets: [
          "100% sortenreine Arabica-Spezialitätenbohnen aus nachhaltigem Anbau",
          "Perfekt temperierter Milchschaum & vegane Bio-Alternativen ohne Aufpreis",
          "Individuelle Zubereitung nach Barista-Standard",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Barista bereitet sorgfältig Kaffeespezialitäten zu",
      },
      {
        tag: "Hauseigene Backstube",
        title: "Süße Meisterwerke jeden Morgen frisch",
        subtitle: "Traditionelle Patisserie trifft auf moderne Kreationen",
        description:
          "Jeden Tag beginnt in unserer gläsernen Backstube das Kneten, Rollen und Verzieren, bevor die ersten Sonnenstrahlen das Wasser küssen. Wir verzichten konsequent auf künstliche Aromen oder vorgefertigte Backmischungen. Stattdessen vertrauen wir auf echte Bourbon-Vanille, feinste belgische Schokolade, frische Beeren und überlieferte Familienrezepte.",
        bullets: [
          "Täglich ofenfrische Tartes, Törtchen, Croissants und Kuchen",
          "Große Auswahl an veganen und glutenfreien Genussoptionen",
          "Liebevolle Dekoration mit essbaren Blüten und feinsten Früchten",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Frisch zubereitete Torten und Gebäcke in der Patisserie",
      },
      {
        tag: "Das Ambiente",
        title: "Ihre Oase mit Seeblick & Lounge-Flair",
        subtitle: "Drinnen stilvoll entspannen, draußen das Glitzern des Wassers genießen",
        description:
          "Süße Auszeit ist mehr als ein Café – es ist Ihr zweites Wohnzimmer. Unser Interieur kombiniert gemütliche Samtsessel mit stimmungsvollem Lounge-Licht und warmen Holzelementen. Auf unserer großen Seeterrasse können Sie die frische Brise genießen, den Schwänen zuschauen und die Seele baumeln lassen.",
        bullets: [
          "Weitläufige Sonnenterrasse direkt an der Uferpromenade",
          "Gemütliche Lounge-Sitzecken mit warmem Lichtkonzept",
          "Der perfekte Ort für Verabredungen, Auszeiten oder entspanntes Arbeiten",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Stimmungsvolles Café-Ambiente und Terrasse am Wasser",
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
