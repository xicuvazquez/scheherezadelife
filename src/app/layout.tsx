import { AnimatePresence } from "framer-motion"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/navbar/Navbar"
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
export const metadata: Metadata = {
  title: "Scheherezade Life",

  description:
    "Mediterranean atmosphere, quiet luxury and timeless silver objects.",

  openGraph: {
    title: "Scheherezade Life",

    description:
      "Mediterranean atmosphere, quiet luxury and timeless silver objects.",

    images: ["/images/og-image.png"],
  },
};
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
<footer className="px-6 md:px-12 py-20 border-t border-black/10 bg-[#F5F1EB]">

  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">

    <div>

      <p className="uppercase tracking-[0.3em] text-xs text-[#777] mb-6">
        Scheherezade Life
      </p>

      <h2 className="text-3xl md:text-5xl leading-tight max-w-xl">
        Mediterranean atmosphere and timeless visual storytelling.
      </h2>

    </div>

    <div className="flex flex-col gap-4 uppercase tracking-[0.25em] text-xs">

      <a
        href="https://instagram.com/scheherezadelife"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        Instagram
      </a>

      <a
        href="mailto:hello@scheherezadelife.com"
        className="hover:opacity-50 transition duration-500"
      >
        hello@scheherezadelife.com
      </a>

    </div>

  </div>

</footer>
</body>
  </html>
  );
}
