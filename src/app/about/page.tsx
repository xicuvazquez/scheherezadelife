export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] px-6 pt-32 pb-20 text-[#2b2b2b] font-serif md:px-20 md:pt-36 md:pb-24">
      <section className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-16">
  <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.35fr] gap-14 items-center">
          
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
                Scheherezade Life nace como una selección cuidada de joyas y complementos con presencia visual: piezas plateadas, formas limpias, texturas discretas y una estética inspirada en la luz mediterránea.

              </p>

              <p className="text-[1rem] leading-8 text-neutral-600">
                No buscamos un catálogo masivo, sino una colección pequeña, coherente y reconocible.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE DESKTOP */}
          <div className="relative h-[520px] w-full overflow-hidden">
  <img
    src="/images/about/about-hero.png"
    alt="Scheherezade Life"
    className="h-full w-full scale-110 object-cover object-center"
  />
</div>

        </div>
      </section>
    </main>
  );
}