"use client"

import { motion } from "framer-motion"

const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
]

export default function GalleryPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#F5F1EB] text-[#111111] px-6 md:px-12 pt-40 pb-24"
    >

      {/* HERO */}
      <section className="mb-24">

        <p className="uppercase tracking-[0.3em] text-xs text-[#777] mb-6">
          Gallery
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl leading-none max-w-5xl">
          A visual universe shaped by atmosphere.
        </h1>

      </section>

      {/* GRID */}
      <section className="grid md:grid-cols-2 gap-6">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="group relative overflow-hidden rounded-[30px]"
  >
    <img
      src="/images/gallery/gallery-1.jpg"
      alt=""
      className="w-full h-[700px] object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
    />

    <div className="absolute inset-0 bg-black/10"></div>
  </motion.div>

  <div className="space-y-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="group relative overflow-hidden rounded-[30px]"
    >
      <img
        src="/images/gallery/gallery-2.jpg"
        alt=""
        className="w-full h-[340px] object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-black/10"></div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="group relative overflow-hidden rounded-[30px]"
    >
      <img
        src="/images/gallery/gallery-3.jpg"
        alt=""
        className="w-full h-[340px] object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-black/10"></div>
    </motion.div>

  </div>

</section>

    </motion.main>
  )
}