import Image from "next/image";
import Link from "next/link";
import MinimalFooter from "@/components/ui/MinimalFooter";

interface FooterSectionProps {
  tagline: string;
  homeLabel: string;
  menuLabel: string;
  aboutLabel: string;
  galleryLabel: string;
  contactLabel: string;
  privacyLabel: string;
  imprintLabel: string;
  address: string;
  phone: string;
  email: string;
}

export default function FooterSection({
  tagline,
  homeLabel,
  menuLabel,
  aboutLabel,
  galleryLabel,
  contactLabel,
  privacyLabel,
  imprintLabel,
  address,
  phone,
  email,
}: FooterSectionProps) {
  const brandNode = (
    <Link href="/" className="flex items-center gap-3.5 group select-none">
      <div className="relative size-10 rounded-full overflow-hidden border border-pink-500/40 p-0.5 bg-black shadow-[0_0_12px_rgba(255,77,148,0.3)] group-hover:scale-105 transition-all">
        <Image
          src="/logo.jpg"
          alt="Süße Auszeit Logo"
          fill
          sizes="40px"
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-pink-300 transition-colors">
          Süße Auszeit
        </span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-pink-400">
          Café & Lounge
        </span>
      </div>
    </Link>
  );

  const primaryLinks = [
    { title: homeLabel, href: "/" },
    { title: menuLabel, href: "#kaffee" },
    { title: aboutLabel, href: "#ueber-uns" },
    { title: galleryLabel, href: "#impressionen" },
    { title: contactLabel, href: "#kontakt" },
  ];

  const secondaryLinks = [
    { title: address, href: "#kontakt" },
    { title: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { title: email, href: `mailto:${email}` },
    { title: privacyLabel, href: "/datenschutz" },
    { title: imprintLabel, href: "/impressum" },
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="size-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      link: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: (
        <svg className="size-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      link: "https://facebook.com",
      label: "Facebook",
    },
  ];

  return (
    <MinimalFooter
      brandNode={brandNode}
      brandDescription={tagline}
      primaryColumnTitle="Navigation"
      primaryLinks={primaryLinks}
      secondaryColumnTitle="Kontakt & Rechtliches"
      secondaryLinks={secondaryLinks}
      socialLinks={socialLinks}
      copyrightText="Süße Auszeit. Alle Rechte vorbehalten."
    />
  );
}
