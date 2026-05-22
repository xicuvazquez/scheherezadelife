import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] p-3 md:p-5 text-[#1d1d1d]">

   

      {/* MAIN CARD */}

      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[2.2rem] border border-black/5 bg-[#ece7e1] pt-24 md:pt-28">

        {/* HERO */}

        <section className="px-6 pt-8 pb-10 md:px-16 md:pt-10">

          <div className="mx-auto flex max-w-[1380px] flex-col gap-10 md:flex-row md:items-center md:justify-center md:gap-14">

            {/* LEFT TEXT */}

            <div className="w-full md:w-[18%]">

              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] opacity-35 md:mb-7">
                About
              </p>

              <h1
                className="max-w-[95%] text-[3.3rem] leading-[0.92] tracking-[-0.06em] md:max-w-none md:text-[2.7rem] md:leading-[1.08]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Objetos de plata seleccionados por atmósfera y presencia.
              </h1>

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-full md:w-[82%]">

              <img
                src="/images/about/about-hero.png"
                alt="Scheherezade Life"
                className="h-[420px] w-full rounded-[2rem] object-cover md:h-[460px] md:rounded-[2.2rem]"
              />

            </div>

          </div>

        </section>

        {/* LOWER SECTION */}

        <section className="border-t border-black/5 px-6 py-10 md:px-16 md:py-8">

          <div className="mx-auto flex max-w-[1380px] flex-col gap-10 md:flex-row md:gap-14">

            {/* LEFT ICON */}

            <div className="hidden w-[18%] items-start md:flex">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-sm opacity-35">
                ↓
              </div>

            </div>

            {/* RIGHT TEXT */}

            <div className="w-full max-w-[820px] space-y-8 md:w-[82%]">

              <p className="text-[1rem] leading-[2] opacity-72 md:text-[0.95rem] md:leading-[2.1]">

                Scheherezade Life explora una estética construida alrededor de la plata, la textura, la arquitectura mediterránea y los objetos con presencia escultórica.

              </p>

              <p className="text-[1rem] leading-[2] opacity-72 md:text-[0.95rem] md:leading-[2.1]">

                Cada pieza es seleccionada por coherencia visual, materialidad y permanencia, buscando crear una identidad silenciosa y editorial más allá de las tendencias rápidas.

              </p>

              <p className="text-[1rem] leading-[2] opacity-72 md:text-[0.95rem] md:leading-[2.1]">

                La marca funciona como un universo visual donde joyería, fotografía, atmósfera y percepción forman parte del mismo lenguaje.

              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}