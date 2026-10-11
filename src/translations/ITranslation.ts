import { IMetaTags } from "../services/MetaTagService";

export interface ITranslation {
  Navigation: {
    HomeLabel: string;
    MenuLabel: string;
    AboutLabel: string;
    ContactLabel: string;
    ReserveLabel: string;
    DropdownItems: Array<{
      title: string;
      description: string;
      badge?: string;
      href: string;
    }>;
    DropdownHighlight: {
      tag: string;
      title: string;
      description: string;
      href: string;
    };
  };

  HomePage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
    Description: string;
    PrimaryCta: string;
    SecondaryCta: string;
    ConceptTag: string;
    ConceptTitle: string;
    Highlights: Array<{
      title: string;
      desc: string;
    }>;
    PreviewBadge: string;
    PreviewTitle: string;
    PreviewSubtitle: string;
    PreviewCta: string;
  };

  MenuPage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
    AllCategories: string;
    Categories: Record<string, string>;
  };

  ContactPage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
  };

  AboutPage: {
    MetaTags: IMetaTags;
    Badge: string;
    Headline: string;
    Subheadline: string;
    Sections: Array<{
      tag: string;
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
      imageSrc: string;
      imageAlt: string;
    }>;
    Cta: {
      badge: string;
      title: string;
      description: string;
    };
  };

  LegalPage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
  };

  PrivacyPage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
  };

  Footer: {
    Tagline: string;
    OpeningHoursTitle: string;
    OpeningHoursWeekdays: string;
    OpeningHoursWeekend: string;
    ContactTitle: string;
    Address: string;
    Phone: string;
    Email: string;
    QuickLinksTitle: string;
    PrivacyLabel: string;
    ImprintLabel: string;
    Copyright: string;
  };
}
