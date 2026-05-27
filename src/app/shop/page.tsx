import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] px-6 pt-32 pb-20 text-[#2b2b2b] font-serif md:px-20 md:pt-36 md:pb-24">
      <section className="mx-auto max-w-[1040px]">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[0.72fr_1fr]">
          {/* INTRO */}
          <div className="flex flex-col justify-center bg-[#f5f1eb] py-8 md:pr-12">
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-black/45">
              Joyas de plata 925
            </p>

            <h1 className="max-w-[380px] text-[2.45rem] leading-[1.02] tracking-[-0.04em] md:text-[3rem] lg:text-[3.35rem]">
              Diseñadas para acompañarte en cada momento.
            </h1>

            <a
              href="#categorias"
              className="mt-8 w-fit border-b border-black/35 pb-1 text-[10px] uppercase tracking-[0.28em] text-black/60 transition-opacity hover:opacity-55"
            >
              Ver categorías →
            </a>
          </div>

          {/* RINGS */}
          <Link href="/shop/rings" className="group relative overflow-hidden">
            <img
              src="/images/categories/rings-category.png"
              alt="Anillos"
              className="h-[300px] w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.035] md:h-[360px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white drop-shadow-md">
                Anillos →
              </p>
            </div>
          </Link>

          {/* EARRINGS */}
          <Link
            id="categorias"
            href="/shop/earrings"
            className="group relative overflow-hidden"
          >
            <img
              src="/images/categories/earrings-category.png"
              alt="Pendientes"
              className="h-[250px] w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.035] md:h-[280px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white drop-shadow-md">
                Pendientes →
              </p>
            </div>
          </Link>

          {/* PENDANTS */}
          <Link href="/shop/pendants" className="group relative overflow-hidden">
            <img
              src="/images/categories/pendants-category.png"
              alt="Colgantes"
              className="h-[250px] w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.035] md:h-[280px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white drop-shadow-md">
                Colgantes →
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}