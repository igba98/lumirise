import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumirise.co.tz"),
  title: {
    default:
      "Lumirise Company Limited | Cross-Border Transport & Logistics | Tanzania",
    template: "%s | Lumirise Company Limited",
  },
  description:
    "Safe, reliable, on-time cargo transport from Dar es Salaam to 7 countries across East and Central Africa. Containers, fuel, dry cargo, and break-bulk.",
  keywords: [
    "Transport company Tanzania",
    "Logistics Dar es Salaam",
    "Cross-border transport East Africa",
    "Container transport Tanzania",
    "Fuel tanker transport Tanzania",
  ],
  openGraph: {
    type: "website",
    siteName: "Lumirise Company Limited",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${urbanist.variable} h-full`}>
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
