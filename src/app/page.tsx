import Link from "next/link";
import Navbar from "@/components/Navbar";

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
      <section className="py-20 px-6 md:px-24 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h2 className="text-5xl md:text-6xl mb-10 tracking-wide max-w-[600px]">

            Mediterranean light,
            cast in silver

          </h2>

          <p className="text-xl leading-8 text-neutral-700 mb-6">

            Sterling silver objects inspired by sea light, texture and slow living.

          </p>

          <p className="text-xl leading-8 text-neutral-600">

            More than a jewelry brand, it is a visual identity built around texture,
            silence, refinement and perception.

          </p>

        </div>

        <div>

          <img
            src="/images/editorial-1.png"
            alt="Interior"
            className="object-cover brightness-[0.92] contrast-[1.04] saturate-[0.88] sepia-[0.06] w-[830px] rounded-[2.2rem]"
          />

        </div>

      </section>

    </main>

  );
}