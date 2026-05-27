export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] px-6 pt-32 pb-20 text-[#2b2b2b] font-serif md:px-20 md:pt-36 md:pb-24">
      <section className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_0.8fr] md:gap-16">
          
          {/* LEFT */}
          <div className="max-w-[520px]">
            <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-black/55">
              About
            </p>

            <h1 className="text-[2.5rem] leading-[1.05] tracking-[-0.04em] text-[#2b2b2b] md:text-[3.2rem] lg:text-[3.6rem]">
              Objetos de plata y acero seleccionados por atmósfera y presencia.
            </h1>

            {/* IMAGE MOBILE */}
            <div className="mt-8 md:hidden">
              <img
                src="/images/about/about-hero.png"
                alt="Scheherezade Life"
                className="h-[380px] w-full object-cover brightness-[0.94] contrast-[1.03] saturate-[0.9] sepia-[0.04]"
              />
            </div>

            <div className="mt-8 max-w-[440px] space-y-5">
              <p className="text-[1.08rem] leading-8 text-neutral-700 md:text-[1.12rem]">
                Scheherezade Life explora una estética construida alrededor de la plata, la textura, la arquitectura mediterránea y los objetos con presencia escultórica.
              </p>

              <p className="text-[1rem] leading-8 text-neutral-600">
                Cada pieza es seleccionada por coherencia visual, materialidad y permanencia, buscando crear una identidad silenciosa y editorial.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE DESKTOP */}
          <div className="hidden md:flex justify-end">
            <img
              src="/images/about/about-hero.png"
              alt="Scheherezade Life"
              className="h-[500px] w-full max-w-[430px] object-cover brightness-[0.94] contrast-[1.03] saturate-[0.9] sepia-[0.04]"
            />
          </div>

        </div>
      </section>
    </main>
  );
}