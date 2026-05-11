"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const entries = [
  {
    title: "Found by the water",
    date: "May 2026",
   image: "/images/journal/journal-1.jpg",
  },
  {
    title: "Silver under warm light",
    date: "May 2026",
    image: "/images/journal/journal-2.jpg",
  },
  {
    title: "Found objects",
    date: "May 2026",
    image: "/images/journal/journal-3.jpg",
  },
];

export default function JournalPage() {
  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] min-h-screen pt-40 pb-32 px-6 md:px-12">
      
      {/* HERO */}
      <section className="max-w-5xl mx-auto mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.2em] uppercase text-[#777] mb-6"
        >
          Journal
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl leading-[0.95] font-light max-w-4xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Observations, textures and found objects.
        </motion.h1>
      </section>

      {/* ENTRIES */}
   <section className="max-w-[1700px] mx-auto">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-start">

    {entries.map((entry, index) => (
      <motion.article
        key={index}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`group ${
  index === 2
    ? "md:col-span-2 max-w-5xl mx-auto"
    : ""
}`}
      >
        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src={entry.image}
            alt={entry.title}
            width={1200}
            height={1600}
           className={`
  w-full
  ${index === 2 ? "h-[620px]" : "h-[760px]"}
  object-cover
  object-center
  brightness-[0.94]
  contrast-[0.95]
  saturate-[0.92]
  transition-transform
  duration-1000
  ease-out
  group-hover:scale-[1.015]
`}
          />
        </div>

        <div className="mt-6">
          <p className="text-sm tracking-[0.12em] text-[#777] mb-2">
            {entry.date}
          </p>

          <h2
            className="text-3xl md:text-5xl leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {entry.title}
          </h2>
        </div>
      </motion.article>
    ))}

  </div>

 

</section>
    </main>
  );
}

