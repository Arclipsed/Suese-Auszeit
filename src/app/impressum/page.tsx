import { Metadata } from "next";
import { MetaTagService } from "@/services/MetaTagService";
import { TranslationService } from "@/services/TranslationService";
import Navigation from "@/components/navigation/Navigation";
import NavigationLogo from "@/components/navigation/NavigationLogo";
import NavigationItem from "@/components/navigation/NavigationItem";
import NavigationDropdownItem from "@/components/navigation/NavigationDropdownItem";
import NavigationVerticalLine from "@/components/navigation/NavigationVerticalLine";
import NavigationReserveButton from "@/components/navigation/NavigationReserveButton";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import LegalContentSection from "@/components/legal/LegalContentSection";
import FooterSection from "@/components/footer/FooterSection";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const t = await TranslationService.GetUserTranslations();
  return MetaTagService.CreateMetaTags(t.LegalPage.MetaTags);
}

const MENU_DROPDOWN_ITEMS = [
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
];

const MENU_HIGHLIGHT = {
  tag: "Signature Empfehlung",
  title: "Ruby Rose Latte & Himbeer-Pistazien Törtchen",
  description: "Zartrosa Rote-Bete-Hafer-Latte harmonisch abgestimmt mit samtiger Patisserie.",
  href: "/speisekarte",
};

export default async function ImpressumPage() {
  const t = await TranslationService.GetUserTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0c0e] text-stone-100 selection:bg-pink-500 selection:text-white">
      <Navigation
        logo={<NavigationLogo cafeName="Süße Auszeit" tagline="Café & Lounge" />}
        actions={
          <>
            <div className="hidden sm:flex items-center gap-3">
              <NavigationVerticalLine className="h-5 w-px bg-stone-800" />
              <NavigationReserveButton label={t.Navigation.ReserveLabel} href="/#reservierung" />
            </div>

            <MobileNavigation
              homeLabel={t.Navigation.HomeLabel}
              menuLabel={t.Navigation.MenuLabel}
              aboutLabel={t.Navigation.AboutLabel}
              contactLabel={t.Navigation.ContactLabel}
              reserveLabel={t.Navigation.ReserveLabel}
              menuItems={MENU_DROPDOWN_ITEMS}
            />
          </>
        }
      >
        <NavigationItem href="/" label={t.Navigation.HomeLabel} />
        <NavigationDropdownItem
          label={t.Navigation.MenuLabel}
          items={MENU_DROPDOWN_ITEMS}
          highlight={MENU_HIGHLIGHT}
        />
        <NavigationItem href="/ueber-uns" label={t.Navigation.AboutLabel} />
        <NavigationItem href="/#kontakt" label={t.Navigation.ContactLabel} />
      </Navigation>

      <main className="flex-1 w-full">
        <LegalContentSection
          headline={t.LegalPage.Headline}
          subheadline={t.LegalPage.Subheadline}
        />
      </main>

      <FooterSection
        tagline={t.Footer.Tagline}
        homeLabel={t.Navigation.HomeLabel}
        menuLabel={t.Navigation.MenuLabel}
        aboutLabel={t.Navigation.AboutLabel}
        contactLabel={t.Navigation.ContactLabel}
        privacyLabel={t.Footer.PrivacyLabel}
        imprintLabel={t.Footer.ImprintLabel}
        address={t.Footer.Address}
        phone={t.Footer.Phone}
        email={t.Footer.Email}
      />
    </div>
  );
}
