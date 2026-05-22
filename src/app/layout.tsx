import { AnimatePresence } from "framer-motion"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Scheherezade Life",
  description:
    "Curated silver objects, textures and Mediterranean atmospheres.",

  openGraph: {
    title: "Scheherezade Life",
    description:
      "Curated silver objects, textures and Mediterranean atmospheres.",
    url: "https://scheherezadelife.com",
    siteName: "Scheherezade Life",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scheherezade Life",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Scheherezade Life",
    description:
      "Curated silver objects, textures and Mediterranean atmospheres.",
    images: ["/images/og-image.jpg"],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className={cormorant.className}>
   <Navbar />
  <AnimatePresence mode="wait">
  {children}
</AnimatePresence>
<Footer />
</body>
  </html>
  );
}
