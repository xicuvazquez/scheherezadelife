"use client";

import Link from "next/link";

export default function SunrisePendantPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] px-6 pt-32 pb-24 text-[#2b2b2b] font-serif md:px-20 md:pt-36">
      <section className="mx-auto max-w-[1180px]">
        {/* BREADCRUMB */}
        <div className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-black/40">
          <Link href="/" className="transition-opacity hover:opacity-55">
            Home
          </Link>

          <span>/</span>

          <Link href="/shop" className="transition-opacity hover:opacity-55">
            Shop
          </Link>

          <span>/</span>

          <Link
            href="/shop/pendants"
            className="transition-opacity hover:opacity-55"
          >
            Colgantes
          </Link>

          <span>/</span>

          <span>Sunrise</span>
        </div>

        {/* PRODUCT LAYOUT */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.8fr]">
          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src="/images/products/sunrise-editorial.png"
              alt="Sunrise Pendant"
              className="h-[420px] w-full object-cover md:h-[620px]"
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center py-6 md:px-10">
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-black/45">
              Sculptural Pendant
            </p>

            <h1 className="max-w-[420px] text-[2.8rem] leading-[1.02] tracking-[-0.04em] md:text-[3.5rem]">
              Sunrise
            </h1>

            <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-black/40">
              59€
            </p>

            <p className="mt-10 max-w-[420px] text-[1.02rem] leading-8 text-neutral-700">
              Un colgante inspirado en la luz cálida reflejada sobre superficies irregulares y formas silenciosas.
            </p>

            <p className="mt-5 max-w-[420px] text-[1rem] leading-8 text-neutral-600">
              Diseñado para convivir con el cuerpo de forma natural, sin imponerse.
            </p>

            {/* SECOND IMAGE */}
            <div className="mt-12 overflow-hidden">
              <img
                src="/images/products/sunrise-worn.png"
                alt="Sunrise worn"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* BACK LINK */}
            <Link
              href="/shop/pendants"
              className="mt-10 w-fit border-b border-black/20 pb-1 text-[10px] uppercase tracking-[0.28em] text-black/55 transition-opacity hover:opacity-55"
            >
              Volver a colgantes →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}