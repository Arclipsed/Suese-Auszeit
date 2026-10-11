import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

interface LegalContentSectionProps {
  headline: string;
  subheadline: string;
}

export default function LegalContentSection({ headline, subheadline }: LegalContentSectionProps) {
  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-pink-400 transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        <span>Zurück zur Startseite</span>
      </Link>

      <div className="flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-300 w-max mb-4">
        <ShieldCheck className="size-3.5 text-pink-400" />
        <span>Rechtliche Hinweise</span>
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
        {headline}
      </h1>
      <p className="text-stone-400 text-sm sm:text-base mb-10 pb-6 border-b border-white/10">
        {subheadline}
      </p>

      <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">Angaben gemäß § 5 TMG</h2>
          <p>
            Café Süße Auszeit<br />
            Hafenpromenade 12<br />
            12345 Musterstadt am Wasser
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">Vertreten durch</h2>
          <p>Inhaber: Max Mustermann</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456 789<br />
            E-Mail: hallo@suesse-auszeit.de
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 123 456 789
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </article>
  );
}
