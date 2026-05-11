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
    name: "Molten silver ring",
    price: "€85",
    image: "/images/products/product-1.jpg",
  },
  {
    name: "Molten silver earrings",
    price: "€120",
    image: "/images/products/product-2.jpg",
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
           className="fixed top-0 right-0 h-screen w-full max-w-[480px] bg-[#f5f1eb] z-[999] px-8 py-10 overflow-y-auto shadow-2xl"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-14">

              <h2
                className="text-4xl"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Cart
              </h2>

              <button
                onClick={onClose}
                className="hover:opacity-50 transition duration-500"
              >
                <X size={22} strokeWidth={1.5} />
              </button>

            </div>

            {/* ITEMS */}
            <div className="space-y-12">

              {cartItems.map((item, index) => (

                <div
                  key={index}
                  className="border-b border-black/10 pb-10"
                >

                  <div className="relative overflow-hidden rounded-[1.5rem] mb-5">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={800}
                      height={1000}
                      className="w-full h-[320px] object-cover brightness-[0.94] contrast-[0.9] saturate-[0.82]"
                    />

                  </div>

                  <div className="flex items-end justify-between gap-6">

                    <h3
                      className="text-2xl leading-tight"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {item.name}
                    </h3>

                    <p className="text-[#7f7468] text-lg">
                      {item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* FOOTER */}
            <div className="mt-20">

              <div className="flex items-center justify-between mb-8">

                <p className="text-[#8a8178] tracking-[0.12em] uppercase text-sm">
                  Total
                </p>

                <p
                  className="text-3xl"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  €205
                </p>

              </div>

              <button className="w-full py-5 rounded-full bg-[#1a1a1a] text-[#f5f1eb] hover:opacity-90 transition duration-500">

                Proceed to checkout

              </button>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}