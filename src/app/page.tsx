import { Metadata } from "next";
import { MetaTagService } from "@/services/MetaTagService";
import { TranslationService } from "@/services/TranslationService";
import Navigation from "@/components/navigation/Navigation";
import NavigationLogo from "@/components/navigation/NavigationLogo";
import NavigationItem from "@/components/navigation/NavigationItem";
import NavigationDropdownItem from "@/components/navigation/NavigationDropdownItem";
import NavigationVerticalLine from "@/components/navigation/NavigationVerticalLine";
import NavigationReserveButton from "@/components/navigation/NavigationReserveButton";
import HeroSection from "@/components/hero/HeroSection";
import HighlightsSection from "@/components/highlights/HighlightsSection";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const t = await TranslationService.GetUserTranslations();
  return MetaTagService.CreateMetaTags(t.HomePage.MetaTags);
}

const MENU_DROPDOWN_ITEMS = [
  {
    title: "Kaffee & Barista-Kreationen",
    description: "Espresso, Flat White, Cold Brew und saisonale Kaffee-Spezialitäten.",
    badge: "Bio Bohnen",
    href: "#kaffee",
  },
  {
    title: "Torten & Patisserie",
    description: "Täglich frisch gebackene Kuchen, Törtchen und feine Macarons.",
    badge: "Frisch",
    href: "#kuchen",
  },
  {
    title: "Frühstück & Brunch",
    description: "Artisan-Brot, Croissants, hausgemachte Aufstriche und Bowls.",
    href: "#fruehstueck",
  },
  {
    title: "Erfrischungen & Tees",
    description: "Bio-Limonaden, frisch gepresste Säfte und Bio-Kräutertees.",
    href: "#getraenke",
  },
];

const MENU_HIGHLIGHT = {
  tag: "Empfehlung des Hauses",
  title: "Hausgemachte Pistazientorte & Hafer-Cappuccino",
  description: "Cremige Füllung mit 100% sizilianischer Pistazie und samtiger Milchschaum.",
  href: "#empfehlung",
};

export default async function Home() {
  const t = await TranslationService.GetUserTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-stone-900 selection:bg-amber-200">
      <Navigation
        logo={<NavigationLogo cafeName="Süße Auszeit" tagline="Café & Patisserie" />}
        actions={
          <>
            <NavigationVerticalLine className="hidden sm:block h-5 w-px bg-stone-300" />
            <NavigationReserveButton label={t.Navigation.ReserveLabel} href="#reservierung" />
          </>
        }
      >
        <NavigationItem href="/" label={t.Navigation.HomeLabel} isActive />
        <NavigationDropdownItem
          label={t.Navigation.MenuLabel}
          items={MENU_DROPDOWN_ITEMS}
          highlight={MENU_HIGHLIGHT}
        />
        <NavigationItem href="#ueber-uns" label={t.Navigation.AboutLabel} />
        <NavigationItem href="#impressionen" label={t.Navigation.GalleryLabel} />
        <NavigationItem href="#kontakt" label={t.Navigation.ContactLabel} />
      </Navigation>

      <main className="flex-1">
        <HeroSection
          headline={t.HomePage.Headline}
          subheadline={t.HomePage.Subheadline}
          description={t.HomePage.Description}
          primaryCta={t.HomePage.PrimaryCta}
          secondaryCta={t.HomePage.SecondaryCta}
        />
        <HighlightsSection />
      </main>
    </div>
  );
}
