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
        title: "Kaffee & Barista-Kreationen",
        description: "Espresso, Flat White, Cold Brew und saisonale Kaffee-Spezialitäten.",
        badge: "Bio Bohnen",
        href: "/speisekarte",
      },
      {
        title: "Torten & Patisserie",
        description: "Täglich frisch gebackene Kuchen, Törtchen und feine Macarons.",
        badge: "Frisch",
        href: "/speisekarte",
      },
      {
        title: "Frühstück & Brunch",
        description: "Artisan-Brot, Croissants, hausgemachte Aufstriche und Bowls.",
        href: "/speisekarte",
      },
      {
        title: "Erfrischungen & Signature Drinks",
        description: "Pink Dragon Limo, hausgemachte Eistees und Bio-Kräutertees.",
        badge: "Special",
        href: "/speisekarte",
      },
    ],
    DropdownHighlight: {
      tag: "Signature Empfehlung",
      title: "Ruby Rose Latte & Himbeer-Pistazien Törtchen",
      description: "Zartrosa Rote-Bete-Hafer-Latte harmonisch abgestimmt mit samtiger Patisserie.",
      href: "/speisekarte",
    },
  },

  HomePage: {
    MetaTags: {
      title: "Süße Auszeit — Café & Feinste Patisserie",
      description:
        "Willkommen im Café Süße Auszeit. Genießen Sie frisch gerösteten Kaffeespezialitäten, handgemachte Torten und ein gemütliches Ambiente direkt am Wasser.",
      imgUrl: "https://suesse-auszeit.example.com/og/home.png",
      tags: ["Café", "Süße Auszeit", "Kaffee", "Kuchen", "Patisserie", "Frühstück", "Lounge"],
      url: "https://suesse-auszeit.example.com",
    },
    Headline: "Eine genussvolle Pause für den Alltag",
    Subheadline: "Handgefertigte Törtchen, feinster Barista-Kaffee und herzliche Gastfreundschaft.",
    Description:
      "Lassen Sie die Seele baumeln. In unserem gemütlichen Café direkt an der Seepromenade kreieren wir täglich frische Backkunstwerke und servieren aromatische Kaffeespezialitäten.",
    ExperienceBadge: "Café & Lounge Erlebnis direkt am Wasser",
    PrimaryCta: "Speisekarte entdecken",
    SecondaryCta: "Tisch anfragen",
    TrustIndicators: [
      {
        title: "Wasserblick",
        subtitle: "Herrliche Terrasse",
      },
      {
        title: "100%",
        subtitle: "Handgemacht & Bio",
        highlight: true,
      },
      {
        title: "Lounge",
        subtitle: "Stimmungsvoll",
      },
    ],
    ShowcaseTag: "Willkommen in der Auszeit",
    ShowcaseTitle: "Kaffee, Genuss & Wohlfühlmomente",
    ShowcaseDescription:
      "Täglich frisch gerösteter Spezialitätenkaffee und feine Törtchen auf unserer idyllischen Seeterrasse in entspanntem Lounge-Flair.",
    ConceptTag: "Das Konzept",
    ConceptTitle: "Warum die „Süße Auszeit“ begeistert",
    Highlights: [
      {
        title: "Specialty Coffee",
        desc: "Single-Origin Bohnen, aromaschonend geröstet und von passionierten Baristas zubereitet.",
      },
      {
        title: "Frische Backkunst",
        desc: "Hausgemachte Törtchen, Kuchen und Desserts täglich frisch mit Liebe zubereitet.",
      },
      {
        title: "Lounge & Seeterrasse",
        desc: "Gemütliche Sitzbereiche und Aussicht für entspannte Treffen, Dates oder Pausen.",
      },
      {
        title: "Herzliche Gastfreundschaft",
        desc: "Eine Wohlfühloase mit stimmungsvoller Musik und herzlichem Service.",
      },
    ],
    PreviewBadge: "Köstlichkeiten & Kaffeespezialitäten",
    PreviewTitle: "Aus unserer Patisserie & Kaffeebar",
    PreviewSubtitle: "Täglich frisch zubereitet mit erlesenen Bio-Zutaten",
    PreviewCta: "Gesamte Speisekarte entdecken",
  },

  MenuPage: {
    MetaTags: {
      title: "Speisekarte — Süße Auszeit | Café & Patisserie",
      description:
        "Entdecken Sie unsere vollständige Speisekarte: Barista-Kaffee, kunstvolle Torten, herzhaftes Frühstück und erfrischende Signature Drinks.",
      imgUrl: "https://suesse-auszeit.example.com/og/menu.png",
      tags: ["Speisekarte", "Kaffee", "Kuchen", "Frühstück", "Patisserie", "Süße Auszeit"],
      url: "https://suesse-auszeit.example.com/speisekarte",
    },
    Headline: "Unsere Speisekarte",
    Subheadline: "Handgefertigte Meisterwerke, Spezialitätenkaffee und erfrischende Kreationen für Ihre Auszeit.",
    AllCategories: "Alle Spezialitäten",
    Categories: {
      alle: "Alle Spezialitäten",
      kaffee: "Kaffee & Barista",
      torten: "Torten & Patisserie",
      fruehstueck: "Frühstück & Brunch",
      drinks: "Erfrischungen & Drinks",
    },
    FreshlyServedText: "Frisch serviert in ca. {prepTime} Min.",
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
    Address: "Hafenpromenade 12, Am Wasser",
    Phone: "+49 (0) 123 456 789",
    Email: "hallo@suesse-auszeit.de",
    QuickLinksTitle: "Navigation",
    PrivacyLabel: "Datenschutz",
    ImprintLabel: "Impressum",
    Copyright: "Alle Rechte vorbehalten.",
    CraftedWithLove: "Handgefertigt mit Liebe & Kaffee direkt am Wasser.",
  },
};
