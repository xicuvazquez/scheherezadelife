"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "Handcrafted silver bracelet with layered textures and organically aged Mediterranean details.",
    price: "€45",
    image: "/images/products/product-1.png",
  },
  {
    name: "Sculptural sterling silver earrings with fluid organic curves and a refined artisanal character.",
    price: "€35",
    image: "/images/products/product-2.png",
},
{
  name: "Delicate sterling silver necklace inspired by sea reflections and Mediterranean light.",
  price: "€40",
  image: "/images/products/product-3.png",
},
{
  name: "Textured sterling silver cuff inspired by raw coastal surfaces and Mediterranean minimalism.",
  price: "€48",
  image: "/images/products/product-4.png",
},
];

export default function ShopPage() {
  return (
    <main className="bg-[#f5f1eb] text-[#1a1a1a] min-h-screen pt-40 pb-32 px-6 md:px-12">

      {/* HERO */}
      <section className="max-w-5xl mx-auto mb-28">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.2em] uppercase text-[#8a8178] mb-6"
        >
          Shop
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl leading-[0.95] font-light max-w-4xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Curated sculptural objects and quiet silver atmospheres.
        </motion.h1>

      </section>

      {/* PRODUCTS */}
      <section className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

        {products.map((product, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group"
          >

            <div className="relative overflow-hidden rounded-[2rem]">

              <Image
                src={product.image}
                alt={product.name}
                width={1200}
                height={1600}
              className="w-full h-[720px] object-cover brightness-[0.68] contrast-[0.98] saturate-[1.08] sepia-[0.16]"
              />

            </div>

            <div className="mt-6 flex items-end justify-between gap-6">

              <div>

                <h2
                  className="text-3xl md:text-4xl leading-tight"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {product.name}
                </h2>

              </div>

              <p className="text-[#7f7468] text-lg tracking-[0.08em]">
                {product.price}
              </p>

            </div>

          </motion.article>
        ))}

      </section>

    </main>
  );
}