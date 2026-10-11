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
import HeroSection from "@/components/hero/HeroSection";
import HighlightsSection from "@/components/highlights/HighlightsSection";
import MenuPreviewSection from "@/components/menu/MenuPreviewSection";
import FooterSection from "@/components/footer/FooterSection";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const t = await TranslationService.GetUserTranslations();
  return MetaTagService.CreateMetaTags(t.HomePage.MetaTags);
}

export default async function Home() {
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
        <NavigationItem href="/" label={t.Navigation.HomeLabel} isActive />
        <NavigationDropdownItem
          label={t.Navigation.MenuLabel}
          items={t.Navigation.DropdownItems}
          highlight={t.Navigation.DropdownHighlight}
        />
        <NavigationItem href="/ueber-uns" label={t.Navigation.AboutLabel} />
        <NavigationItem href="/kontakt" label={t.Navigation.ContactLabel} />
      </Navigation>

      <main className="flex-1">
        <HeroSection
          experienceBadge={t.HomePage.ExperienceBadge}
          headline={t.HomePage.Headline}
          subheadline={t.HomePage.Subheadline}
          description={t.HomePage.Description}
          primaryCta={t.HomePage.PrimaryCta}
          secondaryCta={t.HomePage.SecondaryCta}
          trustIndicators={t.HomePage.TrustIndicators}
          showcaseTag={t.HomePage.ShowcaseTag}
          showcaseTitle={t.HomePage.ShowcaseTitle}
          showcaseDescription={t.HomePage.ShowcaseDescription}
        />
        <HighlightsSection
          conceptTag={t.HomePage.ConceptTag}
          conceptTitle={t.HomePage.ConceptTitle}
          highlights={t.HomePage.Highlights}
        />
        <MenuPreviewSection
          badge={t.HomePage.PreviewBadge}
          title={t.HomePage.PreviewTitle}
          subtitle={t.HomePage.PreviewSubtitle}
          ctaText={t.HomePage.PreviewCta}
          prepText={t.MenuPage.FreshlyServedText}
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
        quickLinksTitle={t.Footer.QuickLinksTitle}
        contactAndLegalTitle={t.Footer.ContactAndLegalTitle}
        copyright={t.Footer.Copyright}
        craftedWithLove={t.Footer.CraftedWithLove}
      />
    </div>
  );
}
