import { IMetaTags } from "../services/MetaTagService";

export interface ITranslation {
  Navigation: {
    HomeLabel: string;
    MenuLabel: string;
    AboutLabel: string;
    ContactLabel: string;
    ReserveLabel: string;
  };

  HomePage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
    Description: string;
    PrimaryCta: string;
    SecondaryCta: string;
  };

  MenuPage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
    AllCategories: string;
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
