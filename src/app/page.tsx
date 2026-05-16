export default function ScheherezadeLifeLanding() {
  return (
    <main className="min-h-[70vh] bg-[#f5f1ea] text-[#2b2b2b] font-serif">
      
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-webp.png"
          alt="Mediterranean atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />s

       <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl mt-16 md:mt-20">
         <img
  src="/images/logo-transparent.png"
  alt="Scheherezade Life"
 className="mx-auto w-[340px] md:w-[620px] max-w-full contrast-110 brightness-[0.96] opacity-100contrast-125 brightness-[0.72] opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]"
/>

        
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-42 8xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        
        <div>
          <h2 className="text-5xl md:text-6xl mb-16 tracking-wide max-w-[600px]">
        Mediterranean light,
        cast in silver <br />
          </h2>

          <p className="text-xl leading-8 text-neutral-700">
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
            className="object-cover brightness-[0.92] contrast-[1.04] saturate-[0.88] sepia-[0.06] w-[830px] rounded-5xl"
          />
        </div>
      </section>

      {/* ATMOSPHERE GRID */}
     <section className="mt-0 px-8 md:px-16">

  <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

    {/* IMAGE */}

    <div className="flex justify-center">

      <img
        src="/images/boya-puerto.png"
        alt="Mediterranean sculptural object"
        className="rounded-[42px] h-[420px] md:h-[560px] w-[78%] mx-auto object-cover brightness-95 contrast-95"
      />

    </div>

    {/* TEXT */}

   <div className="relative max-w-xl h-full flex flex-col">

  <h2
    className="mt-24 text-5xl md:text-7xl leading-[1.02] tracking-[-0.04em] text-[#1d1d1d] max-w-[700px]"
    style={{ fontFamily: "Cormorant Garamond, serif" }}
  >
    Objects shaped by
   salt, light and time
  </h2>

  <p className="mt-10 text-[#5a5a5a] leading-relaxed text-base md:text-lg max-w-lg">
    Scheherezade Life explores Mediterranean atmosphere through sculptural sterling silver objects inspired by coastal textures, quiet architecture and slow living.
  </p>

  <div className="absolute top-[100%] right-[-6%] flex flex-col items-end text-right">

  <p className="text-[13px] tracking-[0.28em] uppercase text-[#8e857d] leading-relaxed">
    31° 32' N
    <br />
    34° 29' E
  </p>

  <p className="mt-6 text-[10px] tracking-[0.22em] uppercase text-[#a59a91] leading-relaxed">
    Mediterranean silence

    <br />

    cast in silver
  </p>

</div>

</div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="px-6 py-24 text-center border-t border-[#d8d0c7] mt-32">
  <div className="max-w-2xl mx-auto space-y-6">
    
    <h2 className="text-2xl tracking-[0.3em] text-[#2f2a26]">
      SCHEHEREZADE LIFE
    </h2>

    <p className="text-[#6e665f] tracking-wide leading-loose">
      Mediterranean silver objects and quiet visual storytelling.
    </p>

   <div className="flex items-center justify-center gap-6 text-sm tracking-[0.2em] uppercase text-[#8a8178]">

  <a
    href="https://instagram.com/scheherezadelife"
    target="_blank"
    rel="noopener noreferrer"
  >
    IG
  </a>

  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@scheherezadelife.com"
target="_blank"
rel="noopener noreferrer">
    Contact
  </a>

</div>

    <p className="text-sm text-[#a59b90] pt-6">
      © 2026 Scheherezade Life
    </p>

  </div>
</footer>
</main>

)
}
