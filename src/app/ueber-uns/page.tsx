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
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutFeatureRow from "@/components/about/AboutFeatureRow";
import AboutCtaSection from "@/components/about/AboutCtaSection";
import FooterSection from "@/components/footer/FooterSection";

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const t = await TranslationService.GetUserTranslations();
  return MetaTagService.CreateMetaTags(t.AboutPage.MetaTags);
}

export default async function UeberUnsPage() {
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
        <NavigationItem href="/ueber-uns" label={t.Navigation.AboutLabel} isActive />
        <NavigationItem href="/kontakt" label={t.Navigation.ContactLabel} />
      </Navigation>

      <main className="flex-1 w-full pb-16">
        <AboutHeroSection
          badge={t.AboutPage.Badge}
          headline={t.AboutPage.Headline}
          subheadline={t.AboutPage.Subheadline}
        />

        {t.AboutPage.Sections.map((section, idx) => (
          <AboutFeatureRow
            key={section.tag}
            tag={section.tag}
            title={section.title}
            subtitle={section.subtitle}
            description={section.description}
            bullets={section.bullets}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            reverse={idx % 2 === 1}
            stepNumber={`0${idx + 1}`}
          />
        ))}

        <AboutCtaSection
          badge={t.AboutPage.Cta.badge}
          title={t.AboutPage.Cta.title}
          description={t.AboutPage.Cta.description}
          reserveLabel={t.Navigation.ReserveLabel}
          menuLabel={t.Navigation.MenuLabel}
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
