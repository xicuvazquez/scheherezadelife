export default function AboutPage() {
  return (

    <main className="bg-[#f5f1eb] px-4 pt-24 pb-16 text-[#1d1d1d] md:px-6 md:pt-40 md:pb-24">

      <section className="mx-auto max-w-[1500px]">

        {/* HERO */}

        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14">

          {/* LEFT */}

          <div className="max-w-[620px]">

            <p className="mb-6 text-[10px] uppercase tracking-[0.28em] opacity-65">
              About
            </p>

            <h1
              className="text-[2.95rem] leading-[0.88] tracking-[-0.07em] md:text-[4.1rem]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Objetos de plata seleccionados por atmósfera y presencia.
            </h1>

            {/* DESKTOP TEXT */}

            <div className="mt-10 hidden max-w-[540px] space-y-7 md:block">

              <p className="text-[0.95rem] leading-[1.9] text-black/85 md:text-[1.28rem]">

                Scheherezade Life explora una estética construida alrededor de la plata, la textura, la arquitectura mediterránea y los objetos con presencia escultórica.

              </p>

              <p className="text-[0.95rem] leading-[1.9] text-black/85 md:text-[1.28rem]">

                Cada pieza es seleccionada por coherencia visual, materialidad y permanencia, buscando crear una identidad silenciosa y editorial.

              </p>

            </div>

          </div>



          {/* RIGHT IMAGE */}

          <div>

            <img
              src="/images/about/about-hero.png"
              alt="Scheherezade Life"
              className="h-[420px] w-full rounded-[2rem] object-cover md:h-[540px] md:rounded-[2.5rem]"
            />

          </div>



          {/* MOBILE TEXT */}

          <div className="order-3 mt-2 max-w-[620px] space-y-7 md:hidden">

            <p className="text-[1.25rem] leading-[1.9] text-black/85">

              Scheherezade Life explora una estética construida alrededor de la plata, la textura, la arquitectura mediterránea y los objetos con presencia escultórica.

            </p>

            <p className="text-[1.25rem] leading-[1.9] text-black/85">

              Cada pieza es seleccionada por coherencia visual, materialidad y permanencia, buscando crear una identidad silenciosa y editorial.

            </p>

          </div>

        </div>

      </section>

    </main>

  );
}