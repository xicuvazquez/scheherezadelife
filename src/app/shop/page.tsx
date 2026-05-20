"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Abstra Earrings",
    price: "49€",
    category: "earrings",
    images: [
      "/images/products/abstra-editorial.png",
      "/images/products/abstra-worn.png",
    ],
  },

  {
    id: 2,
    name: "Cara Ring",
    price: "39€",
    category: "rings",
    images: [
      "/images/products/cararing-editorial.png",
      "/images/products/cararing-worn.png",
    ],
  },

  {
    id: 3,
    name: "Moonface Pendant",
    price: "79€",
    category: "pendants",
    images: [
      "/images/products/colgante-moonface-editorial.png",
      "/images/products/colgante-moonface-worn.png",
    ],
  },

  {
    id: 4,
    name: "Fortuna Ring",
    price: "69€",
    category: "selection",
    images: [
      "/images/products/fortuna-editorial.png",
      "/images/products/fortuna-worn.png",
    ],
  },

  {
    id: 5,
    name: "Lovehoops",
    price: "59€",
    category: "earrings",
    images: [
      "/images/products/lovehoops-editorial.png",
      "/images/products/lovehoops-worn.png",
    ],
  },

  {
    id: 6,
    name: "Mamba Ring",
    price: "89€",
    category: "selection",
    images: [
      "/images/products/mamba-editorial.png",
      "/images/products/mamba-worn.png",
    ],
  },
];

export default function ShopPage() {
  return (
    <main className="bg-[#f5f1eb] min-h-screen text-black">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 px-4 md:px-8 pt-4">

        <div className="backdrop-blur-md bg-[#a7a19c]/90 rounded-full px-8 py-5 flex items-center justify-between">

          <Link
            href="/"
            className="tracking-[0.35em] uppercase text-[11px] text-white"
          >
            SCHEHEREZADE LIFE
          </Link>

          <div className="flex items-center gap-10">

            <Link
              href="/journal"
              className="tracking-[0.28em] uppercase text-[11px] text-white"
            >
              Journal
            </Link>

            <Link
              href="/shop"
              className="tracking-[0.28em] uppercase text-[11px] text-white"
            >
              Shop
            </Link>

            <div className="w-4 h-4 border border-white rounded-sm" />

          </div>

        </div>

      </header>



     {/* HERO */}

<section className="px-8 md:px-14 pt-16 pb-14">

  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-[780px]"
  >

    <p className="uppercase tracking-[0.32em] text-[11px] opacity-50 mb-5">
      Editorial Silver Objects
    </p>

    <h1
      className="text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.06em]"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      Editorial Silver Objects.
    </h1>

  </motion.div>

</section>



      {/* CATEGORIES */}

      <section className="max-w-[1600px] mx-auto px-8 md:px-14 pb-28">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PENDIENTES */}

          <Link
            href="/shop/earrings"
            className="group cursor-pointer block"
          >

            <div className="relative overflow-hidden rounded-[2.2rem] aspect-[3/4]">

              <img
                src="/images/categories/earrings-category.png"
                alt="Pendientes"
                className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute bottom-8 left-8">

                <p className="text-white/70 uppercase tracking-[0.25em] text-[11px] mb-3">
                  Scheherezade Life
                </p>

                <h2
                  className="text-white text-4xl tracking-[-0.05em]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Pendientes
                </h2>

              </div>

            </div>

          </Link>



          {/* ANILLOS */}

          <Link
            href="/shop/rings"
            className="group cursor-pointer block"
          >

            <div className="relative overflow-hidden rounded-[2.2rem] aspect-[3/4]">

              <img
                src="/images/categories/rings-category.png"
                alt="Anillos"
                className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute bottom-8 left-8">

                <p className="text-white/70 uppercase tracking-[0.25em] text-[11px] mb-3">
                  Scheherezade Life
                </p>

                <h2
                  className="text-white text-4xl tracking-[-0.05em]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Anillos
                </h2>

              </div>

            </div>

          </Link>



          {/* COLGANTES */}

          <Link
            href="/shop/pendants"
            className="group cursor-pointer block"
          >

            <div className="relative overflow-hidden rounded-[2.2rem] aspect-[3/4]">

              <img
                src="/images/categories/pendants-category.png"
                alt="Colgantes"
                className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute bottom-8 left-8">

                <p className="text-white/70 uppercase tracking-[0.25em] text-[11px] mb-3">
                  Scheherezade Life
                </p>

                <h2
                  className="text-white text-4xl tracking-[-0.05em]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Colgantes
                </h2>

              </div>

            </div>

          </Link>

        </div>

      </section>

    </main>
  );
}