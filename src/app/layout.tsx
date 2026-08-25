import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gtengineering.me"),
  title: {
    default: "GT Engineering Services · Aviation engineering & supply, Dubai",
    template: "%s · GT Engineering Services",
  },
  description:
    "Engineering support, maintenance and parts supply for aircraft operators, MROs, airports and government fleets — delivered with the release documentation that makes it auditable. Dubai, UAE.",
  keywords: [
    "aviation spare parts Dubai",
    "aircraft maintenance support",
    "AOG desk UAE",
    "aviation supply chain",
    "Stratose aviation software",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "GT Engineering Services",
    title: "Engineering support and supply, held to the record.",
    description:
      "Maintenance and engineering support, parts supply, systems integration and the Stratose management platform — from Dubai, on documentation that stands up to audit.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* suppressHydrationWarning is load-bearing here, not a papered-over bug:
       the script below stamps `data-anim` on this very element before React
       hydrates, so the server markup (which must NOT carry it) and the live DOM
       legitimately differ by that one attribute. The warning suppression is
       one level deep — it covers <html>'s own attributes and nothing inside. */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking, and deliberately so: it must land before first paint or the
            pre-animation state flashes. Its only job is to prove JS ran — the
            CSS keys every hidden initial state off this attribute, which is why
            the attribute cannot simply be rendered on the server. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.anim="on"`,
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${lora.variable} ${archivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
