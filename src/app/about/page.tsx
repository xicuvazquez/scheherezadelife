"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function AboutPage() {
  const { scrollY } = useScroll()

const imageY = useTransform(scrollY, [0, 1000], [0, -80])
  return (
   <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6 }}
  className="py-32 md:py-40 bg-[#F5F1EB] text-[#111111]"
>

      {/* HERO */}
     <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4 }}
  className="min-h-[85vh] flex items-end px-6 md:px-12 pb-20"
>
        <div>
          <p className="uppercase tracking-[0.3em] text-sm mb-6">
            Scheherezade Life
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl leading-none max-w-4xl">
            A Mediterranean vision
            of timeless aesthetics.
          </h1>
        </div>
      </motion.section>

      {/* IMAGE */}
     {/* IMAGE */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2 }}
  className="px-6 md:px-12 pb-32"
>
<motion.div
  style={{ y: imageY }}
  className="group relative overflow-hidden rounded-[30px]"
>
    <img
      src="/images/about/about-new-hero.png"
      alt="Mediterranean atmosphere"
      className="w-full h-[60vh] object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
    />

    <div className="absolute inset-0 bg-black/10"></div>
 </motion.div>

  <p className="text-xs uppercase tracking-[0.3em] text-[#777] mt-6">
    Mediterranean silence / Editorial textures
  </p>
</motion.section>
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="px-6 md:px-12 py-32"
>
  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* IMAGE */}
    <div className="group relative overflow-hidden rounded-[30px]">
      <img
        src="/images/about/about-detail.jpg"
        alt="Editorial detail"
        className="w-full h-[700px] object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-black/10"></div>
    </div>

    {/* TEXT */}
    <div className="max-w-3xl mx-auto">

      <p className="tracking-[0.12em] text-xs text-[#777] mb-6">
        Philosophy
      </p>

      <h2 className="text-4xl md:text-6xl leading-tight mb-8">
        Atmosphere before perfection.
      </h2>

      <p className="text-lg leading-relaxed text-[#555]">
        Scheherezade Life explores a quieter vision of luxury —
        one shaped by Mediterranean light, editorial storytelling
        and timeless digital aesthetics.
      </p>

    </div>

  </div>
</motion.section>
      {/* MANIFESTO */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-3xl leading-relaxed text-[#4d4d4d] font-light">
            We believe luxury is no longer loud.
            It lives in atmosphere, texture, emotion
            and timeless visual storytelling.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-40 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-7xl italic font-light px-6">
          “Luxury begins where noise disappears.”
        </h2>
      </section>

    </motion.main>
  )
}