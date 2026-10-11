// Needs useState for interactive copy-to-clipboard state
"use client";

import { useState } from "react";
import { MapPin, Navigation2, Copy, Check, ExternalLink } from "lucide-react";

interface AddressCardProps {
  address?: string;
  phone?: string;
  email?: string;
}

export default function AddressCard({
  address = "Hafenpromenade 12, 12345 Musterstadt",
  phone = "+49 (0) 123 456 789",
  email = "hallo@suesse-auszeit.de",
}: AddressCardProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Café Süße Auszeit ${address}`
  )}`;

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#141217] p-6 sm:p-8 shadow-xl">
      <div>
        <div className="flex items-center gap-2 pb-6 border-b border-white/5">
          <MapPin className="size-5 text-pink-400" />
          <h3 className="font-serif text-xl font-bold text-white">Standort & Kontakt</h3>
        </div>

        <div className="pt-6 space-y-4 text-sm text-stone-300">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-pink-400 block mb-1">
              Adresse
            </span>
            <p className="text-base font-semibold text-white leading-snug">{address}</p>
            <p className="text-xs text-stone-400 mt-1">Direkt an der Uferpromenade mit Wasserblick</p>
          </div>

          <div className="pt-2 border-t border-white/5">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400 block mb-1">
              Telefon
            </span>
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="text-stone-200 hover:text-pink-300 transition-colors">
              {phone}
            </a>
          </div>

          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400 block mb-1">
              E-Mail
            </span>
            <a href={`mailto:${email}`} className="text-stone-200 hover:text-pink-300 transition-colors">
              {email}
            </a>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={copyAddress}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold text-stone-200 hover:bg-white/10 hover:border-pink-500/30 transition-all cursor-pointer"
        >
          {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
          <span>{copied ? "Adresse kopiert!" : "Adresse kopieren"}</span>
        </button>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-pink-500 px-4 py-3 text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,77,148,0.35)] hover:shadow-[0_0_20px_rgba(255,77,148,0.5)] transition-all"
        >
          <Navigation2 className="size-4" />
          <span>In Google Maps öffnen</span>
          <ExternalLink className="size-3 opacity-70" />
        </a>
      </div>
    </div>
  );
}
