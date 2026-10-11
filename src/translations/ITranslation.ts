import { IMetaTags } from "../services/MetaTagService";

export interface ITranslation {
  Navigation: {
    HomeLabel: string;
    MenuLabel: string;
    AboutLabel: string;
    GalleryLabel: string;
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
}
