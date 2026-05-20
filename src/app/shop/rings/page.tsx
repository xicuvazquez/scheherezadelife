"use client";

import Link from "next/link";

const rings = [
  {
    id: 1,
    name: "Cara Ring",
    price: "39€",
    editorial: "/images/products/cararing-editorial.png",
    worn: "/images/products/cararing-worn.png",
  },

  {
    id: 2,
    name: "Fortuna Ring",
    price: "69€",
    editorial: "/images/products/fortuna-editorial.png",
    worn: "/images/products/fortuna-worn.png",
  },

  {
    id: 3,
    name: "Mamba Ring",
    price: "89€",
    editorial: "/images/products/mamba-editorial.png",
    worn: "/images/products/mamba-worn.png",
  },
];

export default function RingsPage() {
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

          </div>

        </div>

      </header>



     {/* CATEGORY HEADER */}

<section className="px-8 md:px-14 pt-16 pb-12">

  {/* BREADCRUMB */}

  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] opacity-45 mb-8">

    <Link href="/">
      Home
    </Link>

    <span>/</span>

    <Link href="/shop">
      Shop
    </Link>

    <span>/</span>

    <span className="opacity-80">
      Anillos
    </span>

  </div>



  {/* TITLE */}

  <div className="max-w-[720px]">

    <p className="uppercase tracking-[0.32em] text-[11px] opacity-50 mb-5">
      Sculptural Silver
    </p>

    <h1
      className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.06em]"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      Selected silver forms.
    </h1>

  </div>

</section>


      {/* PRODUCTS */}

      <section className="max-w-[1600px] mx-auto px-8 md:px-14 pb-32">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-24">

          {rings.map((product) => (

            <Link
  href="/shop/rings/mamba-ring"
  key={product.id}
  className="group cursor-pointer block"
>

              <div className="relative overflow-hidden rounded-[2.2rem] bg-[#ebe7e2] aspect-[3/4]">

                <img
  src={product.editorial}
  alt={product.name}
  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:opacity-0"
/>

<img
  src={product.worn}
  alt={product.name}
  className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
/>
              </div>

              <div className="flex items-end justify-between mt-6 px-1">

                <h2
                  className="text-[2rem] tracking-[-0.04em]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {product.name}
                </h2>

                <p className="text-sm opacity-55 mb-2">
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