"use client";

import Link from "next/link";
import { useState } from "react";
import RelatedProducts from "@/components/RelatedProducts";
const product = {
  name: "Lovehoops",

  price: "59€",

  description:
    "Selected silver objects shaped through light, texture and sculptural simplicity.",

  materials: [
    "Sterling Silver 925",
    "Hand polished finish",
  ],

  editorial: "/images/products/lovehoops-editorial.png",

  worn: "/images/products/lovehoops-worn.png",
};

export default function LovehoopsPage() {

  const [activeImage, setActiveImage] = useState(product.editorial);

  return (

    <main className="bg-[#f5f1eb] min-h-screen text-black">

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

          </div>

        </div>

      </header>



      <section className="max-w-[1600px] mx-auto px-8 md:px-14 pt-14 pb-32">

        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] opacity-45 mb-10">

          <Link href="/">
            Home
          </Link>

          <span>/</span>

          <Link href="/shop">
            Shop
          </Link>

          <span>/</span>

          <Link href="/shop/earrings">
            Pendientes
          </Link>

          <span>/</span>

          <span className="opacity-80">
            Lovehoops
          </span>

        </div>



        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

          <div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ebe7e2]">

              <img
                src={activeImage}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />

            </div>



            <div className="flex gap-4 mt-5">

              <button
                onClick={() => setActiveImage(product.editorial)}
                className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.22em] transition ${
                  activeImage === product.editorial
                    ? "bg-black text-white"
                    : "bg-[#e5dfd8]"
                }`}
              >
                Editorial
              </button>

              <button
                onClick={() => setActiveImage(product.worn)}
                className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.22em] transition ${
                  activeImage === product.worn
                    ? "bg-black text-white"
                    : "bg-[#e5dfd8]"
                }`}
              >
                Worn
              </button>

            </div>

          </div>



          <div className="lg:sticky lg:top-32">

            <p className="uppercase tracking-[0.32em] text-[11px] opacity-50 mb-5">
              Scheherezade Selection
            </p>

            <h1
              className="text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.06em] mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {product.name}
            </h1>

            <p className="text-lg opacity-75 leading-relaxed max-w-[520px] mb-10">
              {product.description}
            </p>

            <div className="text-[2rem] tracking-[-0.04em] mb-10">
              {product.price}
            </div>



            <div className="border-t border-black/10 pt-8 mb-10">

              <p className="uppercase tracking-[0.26em] text-[11px] opacity-45 mb-5">
                Materials
              </p>

              <div className="space-y-3">

                {product.materials.map((material) => (

                  <div
                    key={material}
                    className="text-sm opacity-70"
                  >
                    {material}
                  </div>

                ))}

              </div>

            </div>



            <button className="w-full bg-black text-white rounded-full py-5 uppercase tracking-[0.28em] text-[11px] hover:opacity-90 transition">

              Add to cart

            </button>

          </div>

        </div>

      </section>

<RelatedProducts
  category="earrings"
  currentProduct="lovehoops"
/>
    </main>

  );
}