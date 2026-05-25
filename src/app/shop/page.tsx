import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="bg-[#f5f1eb] px-4 pt-24 pb-16 text-[#1d1d1d] md:pt-28 md:pb-20">

      <section className="mx-auto max-w-[1450px]">

        {/* HERO */}

        <div className="mb-14 md:mb-16">

          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] opacity-40 md:mb-6">
            Shop
          </p>

          <h1
            className="max-w-[95%] text-[3.6rem] leading-[0.9] tracking-[-0.06em] md:max-w-[900px] md:text-[5rem] md:leading-[0.92]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Joyas de plata 925.
          </h1>

        </div>

        {/* CATEGORIES */}

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">

          {/* RINGS */}

          <Link
            href="/shop/rings"
            className="group"
          >

            <div className="overflow-hidden rounded-none md:[2.2rem]">

              <img
                src="/images/categories/rings-category.png"
                alt="Rings"
                className="h-[320px] w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.04] md:h-[420px]"
              />

            </div>

            <div className="pt-5 md:pt-6">

              <h2
                className="text-[1.7rem] md:text-[2rem]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Anillos
              </h2>

            </div>

          </Link>

          {/* EARRINGS */}

          <Link
            href="/shop/earrings"
            className="group"
          >

            <div className="overflow-hidden rounded-none [2.2rem]">

              <img
                src="/images/categories/earrings-category.png"
                alt="Earrings"
                className="h-[320px] w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.04] md:h-[420px]"
              />

            </div>

            <div className="pt-5 md:pt-6">

              <h2
                className="text-[1.7rem] md:text-[2rem]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Pendientes
              </h2>

            </div>

          </Link>

          {/* PENDANTS */}

          <Link
            href="/shop/pendants"
            className="group"
          >

            <div className="overflow-hidden rounded-none md:[2.2rem]">

              <img
                src="/images/categories/pendants-category.png"
                alt="Pendants"
                className="h-[320px] w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.04] md:h-[420px]"
              />

            </div>

            <div className="pt-5 md:pt-6">

              <h2
                className="text-[1.7rem] md:text-[2rem]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Colgantes
              </h2>

            </div>

          </Link>

        </div>

      </section>

    </main>
  );
}