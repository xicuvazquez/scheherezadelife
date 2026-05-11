export default function ScheherezadeLifeLanding() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#2b2b2b] font-serif">
      
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden animation: fadeIn 3s ease-out forwards;">
        <img
          src="/images/hero.jpg"
          alt="Mediterranean atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#f5e9d8]/30" />

        <div className="relative z-10 text-center px-6 max-w-3xl mt-16 md:mt-12">
         <img
  src="/images/logo-transparent.png"
  alt="Scheherezade Life"
 className="mx-auto w-[420px] md:w-[850px] max-w-full contrast-200 brightness-50"
/>

        
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-42 8xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        
        <div>
          <h2 className="text-5xl md:text-6xl mb-16 tracking-wide max-w-[600px]">
        A slower form <br />
         of luxury
          </h2>

          <p className="text-xl leading-8 text-neutral-700">
           Scheherezade Life explores Mediterranean atmosphere,
quiet luxury and timeless silver objects.

A visual identity built around texture,
silence and refined perception.
          </p>

          <p className="text-xl leading-8 text-neutral-600">
            More than a jewelry brand, it is a visual identity built around texture,
            silence, refinement and perception.
          </p>
        </div>

        <div>
          <img
            src="/images/editorial.jpg"
            alt="Interior"
            className="object-cover brightness-108 saturate-135 contrast-95 sepia-[0.01] w-[830px] rounded-5xl"
          />
        </div>
      </section>

      {/* ATMOSPHERE GRID */}
      <section className="px-6 md:px-16 pt-12 pb-24 max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-14">
          
          

          <div className="mt-20">
  <img
    src="/images/sun-hand.jpg"
    alt="Mediterranean jewelry"
    className="rounded-3xl h-[420px] md:h-[520px] w-full object-cover brightness-110 saturate-72 contrast-84 hue-rotate-[-6deg]transition duration-700 ease-out hover:scale-[1.015]"
  />
</div>

          <img
            src="/images/rings-hand.jpg"
            alt="Silver rings"
            className="rounded-3xl h-[520px] md:h-[760px] w-full object-cover brightness-105 contrast-95 transition-transform duration-1000 ease-out hover:scale-[1.015]"
          />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-6 border-t border-neutral-300 text-center max-w-4xl mx-auto">
        
        <h3 className="text-3xl md:text-4xl mb-6 tracking-wide">
          A quieter kind of luxury
        </h3>

        <p className="text-neutral-700 text-lg mb-10 max-w-2xl mx-auto leading-8">
          Occasional notes, silver objects and Mediterranean stories from Scheherezade Life.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
          
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-2 py-4 bg-transparent border-b border-[#b8aea2] text-[#3a342f] placeholder:text-[#8f8478] focus:outline-none"
          />

          <button className="px-8 py-4 rounded-full bg-[#2f2a26] text-[#f5f1ea] tracking-[0.2em] uppercase text-sm transition duration-500 hover:opacity-80">
            Subscribe
          </button>
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
      <a href="#">Instagram</a>
      <a href="#">Contact</a>
    </div>

    <p className="text-sm text-[#a59b90] pt-6">
      © 2026 Scheherezade Life
    </p>

  </div>
</footer>
</main>

)
}
