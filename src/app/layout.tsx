import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * No page-level metadata here — every page exports its own generateMetadata()
 * using TranslationService + MetaTagService so that meta tags are locale-aware.
 *
 * The only global concern kept here is metadataBase (required for resolving
 * relative OG image URLs) and the robots directive.
 */
export const metadata = {
  metadataBase: new URL("https://suesse-auszeit.example.com"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
