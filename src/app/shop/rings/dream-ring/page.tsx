"use client";

import Link from "next/link";
import { useState } from "react";
import RelatedProducts from "@/components/RelatedProducts";

const product = {
  name: "Dream Ring",

  price: "19,99€",

  description:
    "Anillo de plata seleccionado por su silueta lunar, su delicadeza abierta y su presencia simbólica.",

  materials: [
    "Plata de ley 925",
  ],

  details: [
    "Diseño con luna creciente",
    "Estructura abierta",
    "Acabado pulido",
  ],

  editorial: "/images/products/dream-ring-editorial.png",

  worn: "/images/products/dream-ring-worn.png",
};

export default function DreamRingPage() {
  const [activeImage, setActiveImage] = useState(product.editorial);

  return (
    <main className="bg-[#f5f1eb] min-h-screen text-black">
      {/* PRODUCT */}
      <section className="max-w-[1600px] mx-auto px-8 md:px-14 pt-14 pb-32">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] opacity-45 mb-10">
          <Link href="/">Home</Link>

          <span>/</span>

          <Link href="/shop">Shop</Link>

          <span>/</span>

          <Link href="/shop/rings">Anillos</Link>

          <span>/</span>

          <span className="opacity-80">Dream Ring</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          {/* LEFT */}
          <div>
            <div className="relative overflow-hidden rounded-[2.2rem] bg-[#ebe7e2]">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* IMAGE SWITCHER */}
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

          {/* RIGHT */}
          <div className="lg:sticky lg:top-32">
            <p className="uppercase tracking-[0.32em] text-[11px] opacity-70 mb-5">
              Scheherezade Life
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

            {/* MATERIALS */}
            <div className="border-t border-black/10 pt-8 mb-10">
              <p className="uppercase tracking-[0.26em] text-[11px] opacity-45 mb-5">
                Materiales
              </p>

              <div className="space-y-3">
                {product.materials.map((material) => (
                  <div key={material} className="text-sm opacity-70">
                    {material}
                  </div>
                ))}
              </div>
            </div>

            {/* DESCRIPTION DETAILS */}
            <div className="border-t border-black/10 pt-8 mb-10">
              <p className="uppercase tracking-[0.26em] text-[11px] opacity-45 mb-5">
                Descripción
              </p>

              <div className="space-y-3">
                {product.details.map((detail) => (
                  <div key={detail} className="text-sm opacity-70">
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-black text-white rounded-full py-5 uppercase tracking-[0.28em] text-[11px] hover:opacity-90 transition">
              Añadir al carrito
            </button>
          </div>
        </div>
      </section>

      <RelatedProducts category="rings" currentProduct="dream-ring" />
    </main>
  );
}