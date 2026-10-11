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
import MenuCategoryView from "@/components/menu/MenuCategoryView";
import FooterSection from "@/components/footer/FooterSection";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const t = await TranslationService.GetUserTranslations();
  return MetaTagService.CreateMetaTags(t.MenuPage.MetaTags);
}

export default async function SpeisekartePage() {
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
              menuItems={t.Navigation.DropdownItems}
            />
          </>
        }
      >
        <NavigationItem href="/" label={t.Navigation.HomeLabel} />
        <NavigationDropdownItem
          label={t.Navigation.MenuLabel}
          items={t.Navigation.DropdownItems}
          highlight={t.Navigation.DropdownHighlight}
        />
        <NavigationItem href="/ueber-uns" label={t.Navigation.AboutLabel} />
        <NavigationItem href="/kontakt" label={t.Navigation.ContactLabel} />
      </Navigation>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold text-pink-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,77,148,0.2)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
            Patisserie & Kaffeebar
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.MenuPage.Headline}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.MenuPage.Subheadline}
          </p>
        </div>

        {/* Menu Interactive Category Filter & List */}
        <MenuCategoryView categories={t.MenuPage.Categories} />
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
