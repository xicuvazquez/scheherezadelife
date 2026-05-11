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
<footer className="px-6 md:px-12 py-20 border-t border-black/10 bg-[#F5F1EB]">

  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">

    <div>

      <p className="tracking-[0.18em] text-xs text-[#777] mb-6">
        Scheherezade Life
      </p>

      <h2 className="text-3xl md:text-5xl leading-tight max-w-xl">
        Mediterranean atmosphere and timeless visual storytelling.
      </h2>

    </div>

    <div className="flex flex-col gap-5 text-sm tracking-[0.08em] break-all">

      <a
        href="https://instagram.com/scheherezadelife"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textTransform: "lowercase" }}
        className="hover:opacity-50 transition duration-500"
      >
        instagram
      </a>

     <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@scheherezadelife.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textTransform: "lowercase" }}
  className="block w-fit hover:opacity-50 transition duration-500"
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
