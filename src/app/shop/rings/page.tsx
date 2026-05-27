"use client";

import Link from "next/link";

const rings = [
  {
    id: 1,
    slug: "cara-ring",
    name: "Cara Ring",
    price: "39€",
    editorial: "/images/products/cararing-editorial.png",
    worn: "/images/products/cararing-worn.png",
  },
  {
    id: 2,
    slug: "fortuna-ring",
    name: "Fortuna Ring",
    price: "69€",
    editorial: "/images/products/fortuna-editorial.png",
    worn: "/images/products/fortuna-worn.png",
  },
  {
    id: 3,
    slug: "mamba-ring",
    name: "Mamba Ring",
    price: "89€",
    editorial: "/images/products/mamba-editorial.png",
    worn: "/images/products/mamba-worn.png",
  },
];

export default function RingsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] px-6 pt-32 pb-20 text-[#2b2b2b] font-serif md:px-20 md:pt-36 md:pb-28">
      <section className="mx-auto max-w-[1040px]">
        {/* HEADER */}
        <div className="mb-12 md:mb-14">
          <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-black/40">
            <Link href="/" className="transition-opacity hover:opacity-55">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="transition-opacity hover:opacity-55">
              Shop
            </Link>
            <span>/</span>
            <span>Anillos</span>
          </div>

          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-black/45">
            Sculptural Silver
          </p>

          <h1 className="max-w-[560px] text-[2.7rem] leading-[1.02] tracking-[-0.04em] md:text-[3.5rem] lg:text-[3.9rem]">
            Anillos de plata seleccionados por forma y presencia.
          </h1>
        </div>

        {/* EDITORIAL PRODUCT GRID */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[0.72fr_1fr]">
          {/* INTRO / FEATURED TEXT */}
          <div className="flex flex-col justify-center bg-[#f5f1eb] py-8 md:pr-12">
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-black/45">
              Selección
            </p>

            <h2 className="max-w-[360px] text-[2.2rem] leading-[1.03] tracking-[-0.04em] md:text-[2.8rem]">
              Formas limpias, textura y brillo silencioso.
            </h2>

            <p className="mt-7 max-w-[360px] text-[1.02rem] leading-8 text-neutral-600">
              Piezas pensadas para acompañar la mano sin imponerse.
            </p>
          </div>

          {/* FEATURED PRODUCT */}
          <Link
            href={`/shop/rings/${rings[0].slug}`}
            className="group relative overflow-hidden"
          >
            <img
              src={rings[0].editorial}
              alt={rings[0].name}
              className="h-[300px] w-full object-cover transition duration-[1600ms] group-hover:opacity-0 md:h-[360px]"
            />
            <img
              src={rings[0].worn}
              alt={rings[0].name}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-[1600ms] group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white drop-shadow-md">
                {rings[0].name} →
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/85 drop-shadow-md">
                {rings[0].price}
              </p>
            </div>
          </Link>

          {/* SECONDARY PRODUCTS */}
          {rings.slice(1).map((product) => (
            <Link
              href={`/shop/rings/${product.slug}`}
              key={product.id}
              className="group relative overflow-hidden"
            >
              <img
                src={product.editorial}
                alt={product.name}
                className="h-[250px] w-full object-cover transition duration-[1600ms] group-hover:opacity-0 md:h-[280px]"
              />
              <img
                src={product.worn}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-[1600ms] group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white drop-shadow-md">
                  {product.name} →
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/85 drop-shadow-md">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}