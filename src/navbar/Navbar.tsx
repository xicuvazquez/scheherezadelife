"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"
import Cart from "@/components/Cart"

export default function Navbar() {

  const [cartOpen, setCartOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <>

      <header className="fixed top-0 left-0 w-full z-50">

        <div className="px-4 pt-4 md:px-8">

          <div
            className={`
              rounded-full
              px-6
              py-4
              flex
              items-center
              justify-between
              transition-all
              duration-700
              backdrop-blur-xl
              border
              border-white/10
              bg-black/30
            `}
          >

            {/* LOGO */}
            <Link
              href="/"
              className="uppercase tracking-[0.32em] text-[10px] md:text-xs text-white"
            >
              Scheherezade Life
            </Link>
{/* DESKTOP NAV */}
<div className="hidden md:flex items-center gap-8 uppercase tracking-[0.22em] text-xs text-white">

  <Link
    href="/about"
    className="hover:opacity-50 transition duration-500"
  >
    About
  </Link>

  <Link
    href="/gallery"
    className="hover:opacity-50 transition duration-500"
  >
    Gallery
  </Link>

  <Link
    href="/journal"
    className="hover:opacity-50 transition duration-500"
  >
    Journal
  </Link>

  <Link
    href="/shop"
    className="hover:opacity-50 transition duration-500"
  >
    Shop
  </Link>

  <button
    onClick={() => setCartOpen(true)}
    className="hover:opacity-50 transition duration-500"
  >
    <ShoppingBag size={18} strokeWidth={1.5} />
  </button>

</div>

{/* MOBILE NAV */}
<div className="flex md:hidden items-center gap-5 text-white">

  <Link
    href="/shop"
    className="uppercase tracking-[0.18em] text-[10px]"
  >
    Shop
  </Link>

  <button
    onClick={() => setCartOpen(true)}
    className="hover:opacity-50 transition duration-500"
  >
    <ShoppingBag size={18} strokeWidth={1.5} />
  </button>

</div>
          </div>

        </div>

      </header>

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </>

  )
}