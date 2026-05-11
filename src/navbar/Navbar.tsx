"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react";
import Cart from "@/components/Cart";
export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20)
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
}, [])
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="px-4 pt-4 md:px-8">

       <div
  className={`
    rounded-full px-6 py-4 flex items-center justify-between transition-all duration-700
  ${scrolled
  ? "bg-white/70 backdrop-blur-xl shadow-sm border border-white/30"
  : "bg-[#f5f1eb]/80 backdrop-blur-xl border border-black/5"}
  `}
>

          {/* LOGO */}
          <Link
            href="/"
            className="uppercase tracking-[0.35em] text-[10px] md:text-xs"
          >
            Scheherezade Life
          </Link>

          {/* DESKTOP NAV */}
<nav className="hidden md:flex items-center gap-6 lg:gap-8 uppercase tracking-[0.25em] text-[10px] md:text-xs">

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

</nav>

{/* MOBILE NAV */}
<div className="flex md:hidden items-center">

  <button
    onClick={() => setCartOpen(true)}
    className="hover:opacity-50 transition duration-500"
  >
    <ShoppingBag size={20} strokeWidth={1.5} />
  </button>

</div>