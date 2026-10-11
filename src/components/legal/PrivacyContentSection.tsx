import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

interface PrivacyContentSectionProps {
  headline: string;
  subheadline: string;
}

export default function PrivacyContentSection({ headline, subheadline }: PrivacyContentSectionProps) {
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
        <Lock className="size-3.5 text-pink-400" />
        <span>Datenschutz & Privatsphäre</span>
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
        {headline}
      </h1>
      <p className="text-stone-400 text-sm sm:text-base mb-10 pb-6 border-b border-white/10">
        {subheadline}
      </p>

      <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            Süße Auszeit – Hafencafé Eckernförde<br />
            Schiffbrücke 10, 24340 Eckernförde<br />
            E-Mail: info@hafencafe-eckernfoerde.de
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">3. Datenerfassung auf dieser Website</h2>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. bei einer Tischreservierung per Kontaktformular oder E-Mail).
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Browsertyp, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-white">4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
          </p>
        </section>
      </div>
    </article>
  );
}
