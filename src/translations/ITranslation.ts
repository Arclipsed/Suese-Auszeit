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
    ExperienceBadge: string;
    Headline: string;
    Subheadline: string;
    Description: string;
    PrimaryCta: string;
    SecondaryCta: string;
    TrustIndicators: Array<{
      title: string;
      subtitle: string;
      highlight?: boolean;
    }>;
    ShowcaseTag: string;
    ShowcaseTitle: string;
    ShowcaseDescription: string;
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
    FreshlyServedText: string;
  };

  ContactPage: {
    MetaTags: IMetaTags;
    Headline: string;
    Subheadline: string;
    OpeningHoursCardTitle: string;
    OpenNowBadge: string;
    ClosedNowBadge: string;
    Days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    ClosedLabel: string;
    TimeSuffix: string;
    LocationCardTitle: string;
    AddressLabel: string;
    WaterfrontHint: string;
    PhoneLabel: string;
    EmailLabel: string;
    CopyAddressButton: string;
    CopiedAddressButton: string;
    OpenMapsButton: string;
    ScenicLocationTag: string;
    ScenicLocationTitle: string;
    ScenicLocationDesc: string;
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
    ContactAndLegalTitle: string;
    Address: string;
    Phone: string;
    Email: string;
    QuickLinksTitle: string;
    PrivacyLabel: string;
    ImprintLabel: string;
    Copyright: string;
    CraftedWithLove: string;
  };
}
