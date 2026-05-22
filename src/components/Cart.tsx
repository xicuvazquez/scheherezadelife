"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const cartItems = [
  {
    name: "Stone Bracelet",
    price: "€45",
    image: "/images/products/product-1.png",
  },
  {
    name: "Tide Hoops",
    price: "€40",
    image: "/images/products/product-2.png",
  },
  {
  name: "Sea Reflection Necklace",
  price: "€50",
  image: "/images/products/product-3.png",
},

{
  name: "Coastal Silver Cuff",
  price: "€48",
  image: "/images/products/product-4.png",
},
];

export default function Cart({ isOpen, onClose }: CartProps) {
  return (
    <AnimatePresence>

      {isOpen && (

        <>

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
         className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#f5f1eb]/95 backdrop-blur-2xl border-l border-black/5 shadow-[0_0_60px_rgba(0,0,0,0.08)] z-50 px-8 py-10 overflow-y-auto flex flex-col"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-14">

              <h2
                className="text-[2.8rem] leading-none tracking-[-0.05em] text-[#1a1a1a]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Selected Pieces
              </h2>

              <button
                onClick={onClose}
                className="text-sm tracking-[0.12em] uppercase text-[#8a8178] hover:text-black transition duration-[1200ms]"
              >
                <X size={22} strokeWidth={1.5} />
              </button>

            </div>

            {/* ITEMS */}
           <div className="flex-1 overflow-y-auto pr-1 space-y-12">

              {cartItems.map((item, index) => (

                <div
                  key={index}
                  className="border-b border-black/10 pb-10"
                >

                 <div className="group relative overflow-hidden rounded-[2.2rem] mb-5">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={800}
                      height={1000}
                      className="w-full h-[320px] object-cover brightness-[0.94] contrast-[0.9] saturate-[0.82] transition-transform duration-[2200ms] ease-out group-hover:scale-[1.03]"
                    />

                  </div>

                  <div className="flex items-end justify-between gap-6">

                    <h3
                      className="text-[1.55rem] leading-[1.05] tracking-[-0.03em] text-[#1a1a1a]"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {item.name}
                    </h3>

                    <p className="text-sm tracking-[0.08em] uppercase text-[#8a8178] mt-3">
                      {item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* FOOTER */}
            <div className="border-t border-black/5 pt-8 mt-10 space-y-6 bg-[#f5f1eb]/80 backdrop-blur-xl">

              <div className="flex items-center justify-between mb-8">

                <p className="text-[#8a8178] tracking-[0.12em] uppercase text-sm">
                  Total
                </p>

                <p
                  className="text-[1.15rem] tracking-[-0.02em] mt-5"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  €205
                </p>

              </div>

              <button
  className="w-full py-5 rounded-full border border-black/10 bg-[#1a1a1a] text-[#f5f1eb] tracking-[0.18em] uppercase text-[11px] hover:bg-black transition-all duration-[1600ms]"
>
  Continue to Checkout
</button>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}