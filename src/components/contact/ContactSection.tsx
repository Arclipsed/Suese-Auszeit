import LiveOpeningHoursCard from "@/components/contact/LiveOpeningHoursCard";
import AddressCard from "@/components/contact/AddressCard";
import Image from "next/image";

interface ContactSectionProps {
  headline?: string;
  subheadline?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export default function ContactSection({
  headline = "Öffnungszeiten & Anfahrt",
  subheadline = "Besuchen Sie uns direkt am Wasser – hier finden Sie alle Details für Ihren Besuch.",
  address,
  phone,
  email,
}: ContactSectionProps) {
  return (
    <section id="kontakt" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {headline}
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base">
            {subheadline}
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <LiveOpeningHoursCard />
          <AddressCard address={address} phone={phone} email={email} />
        </div>

        {/* Exterior Cafe Panorama Highlight under the cards */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 relative h-[300px] sm:h-[380px] group shadow-2xl">
          <Image
            src="/cafe-exterior.jpg"
            alt="Café Süße Auszeit Terrasse am Wasser"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <span className="text-xs uppercase font-bold tracking-widest text-pink-400">
              Traumhafte Lage
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              Direkt an der Uferpromenade mit Außenbereich
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
              Parkplätze finden Sie bequem entlang der Promenade. Auch mit dem Fahrrad oder Boot optimal erreichbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
