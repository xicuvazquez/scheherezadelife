import Link from "next/link";

export default function ScheherezadeLifeLanding() {

  return (

    <main className="min-h-screen bg-[#f5f1ea] text-[#2b2b2b] font-serif">

      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* DESKTOP HERO */}

        <img
          src="/images/hero-webp.png"
          alt="Mediterranean atmosphere"
          className="absolute inset-0 hidden h-full w-full object-cover scale-100 transition duration-[4000ms] ease-out hover:scale-[1.03] md:block"
        />

        {/* MOBILE HERO */}

        <img
          src="/images/hero-mobile.png"
          alt="Mediterranean atmosphere"
          className="absolute inset-0 block h-full w-full object-cover md:hidden"
        />

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mt-16 md:mt-20">

          <img
            src="/images/logo-transparent.png"
            alt="Scheherezade Life"
            className="mx-auto w-[340px] md:w-[620px] max-w-full contrast-125 brightness-[0.72] opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]"
          />

        </div>

      </section>



      {/* ABOUT */}

<section className="px-6 py-16 md:px-20 md:py-20">
  <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_0.8fr] md:gap-16">

    {/* TEXT */}
    <div className="max-w-[620px]">
      <h2 className="text-[2.5rem] leading-[1.05] tracking-[-0.04em] text-[#2b2b2b] md:text-[3.2rem] lg:text-[3.6rem]">
        Una colección construida alrededor de la luz, la textura y las formas sencillas.
      </h2>

      {/* IMAGE MOBILE */}
      <div className="mt-8 md:hidden">
        <img
          src="/images/editorial-1.png"
          alt="Interior"
          className="w-full object-cover brightness-[0.92] contrast-[1.04] saturate-[0.88] sepia-[0.06]"
        />
      </div>

      <p className="mt-8 max-w-[420px] text-[1.48rem] leading-8 text-neutral-700 md:text-[1.22rem]">
        Scheherezade Life es una selección de joyas y complementos en tonos plata, elegidos por su forma, textura y presencia.
      </p>

      <p className="mt-4 max-w-[620px] text-[1.08rem] leading-8 text-neutral-600">
        Una experiencia que abarca texturas, aromas y colores en diseños. 
        La calidez de la luz reflejada en el mar y el brillo envejecido nos recuerdan que el tiempo también puede convertirse en belleza.
      </p>
    </div>

    {/* IMAGE DESKTOP */}
    <div className="hidden md:flex justify-end">
      <img
        src="/images/editorial-1.png"
        alt="Interior"
        className="w-full max-w-[430px] object-cover brightness-[0.92] contrast-[1.04] saturate-[0.88] sepia-[0.06]"
      />
    </div>

  </div>
</section>

    </main>

  );
}