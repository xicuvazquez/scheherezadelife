import Link from "next/link";

export default function AboutPage() {

  return (

    <main className="bg-[#f5f1eb] min-h-screen p-4 text-[#1d1d1d]">

      {/* CARD */}

      <div className="max-w-[1450px] mx-auto bg-[#ece7e1] rounded-[2.8rem] overflow-hidden border border-black/5">

        {/* NAVBAR */}

        <header className="px-10 py-7 flex items-center justify-between text-[10px] uppercase tracking-[0.28em]">

          <Link
            href="/"
            className="opacity-70"
          >
            SCHEHEREZADE LIFE
          </Link>

          <div className="flex items-center gap-8">

            <Link
              href="/journal"
              className="opacity-55 hover:opacity-100 transition"
            >
              Journal
            </Link>

            <Link
              href="/about"
              className="opacity-100"
            >
              About
            </Link>

            <Link
              href="/shop"
              className="opacity-55 hover:opacity-100 transition"
            >
              Shop
            </Link>

          </div>

        </header>



        {/* HERO */}

        <section className="px-14 pt-10 pb-8">

          <div className="max-w-[1180px] mx-auto flex items-center justify-center gap-16">

            {/* LEFT */}

            <div className="w-[26%]">

              <p className="uppercase tracking-[0.28em] text-[10px] opacity-35 mb-6">

                About

              </p>

              <h1
                className="text-[2.85rem] leading-[1.12] tracking-[-0.06em]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Objetos de plata seleccionados por atmósfera y presencia.
              </h1>

            </div>



            {/* RIGHT */}

            <div className="w-[98%]">

              <img
                src="/images/about/about-hero.png"
                alt="Scheherezade Life"
                className="w-full h-[360px] object-cover rounded-[1.7rem]"
              />

            </div>

          </div>

        </section>



        {/* LOWER */}

        <section className="border-t border-black/6 px-14 py-7">

          <div className="max-w-[1180px] mx-auto flex gap-16">

            {/* LEFT ICON */}

            <div className="w-[22%] flex items-start">

              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-sm opacity-35">

                ↓

              </div>

            </div>



            {/* RIGHT TEXT */}

            <div className="w-[50%] max-w-[780px] space-y-3">

              <p className="text-[1.12rem] leading-[2.1] opacity-222">

                Scheherezade Life explora una estética construida alrededor de la plata, la textura, la arquitectura mediterránea y los objetos con presencia escultórica.

              </p>

              <p className="text-[0.84rem] leading-[2.1] opacity-60">

                Cada pieza es seleccionada por coherencia visual, materialidad y permanencia, buscando crear una identidad silenciosa y editorial más allá de las tendencias rápidas.

              </p>

              <p className="text-[0.84rem] leading-[2.1] opacity-60">

                La marca funciona como un universo visual donde joyería, fotografía, atmósfera y percepción forman parte del mismo lenguaje.

              </p>

            </div>

          </div>

        </section>

      </div>

    </main>

  );
}