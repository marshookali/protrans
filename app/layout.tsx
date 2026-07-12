import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.protransllp.com"),
  title: {
    default: "PRO TRANS Logistics — Speed. Safety. Reliability.",
    template: "%s · PRO TRANS Logistics",
  },
  description:
    "PRO TRANS LOGISTICS LLP — technology-driven FMCG transportation across South India with Pan-India connectivity. Cold chain, fragile handling, and 24/7 live fleet tracking.",
  keywords: [
    "FMCG logistics",
    "cold chain transport",
    "fleet management",
    "South India logistics",
    "Ashok Leyland fleet",
    "Thermo King",
    "Malappuram logistics",
  ],
  openGraph: {
    title: "PRO TRANS Logistics — Speed. Safety. Reliability.",
    description:
      "Technology-driven FMCG transportation across South India with Pan-India connectivity.",
    type: "website",
    url: "https://www.protransllp.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-asphalt font-sans text-paper antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
