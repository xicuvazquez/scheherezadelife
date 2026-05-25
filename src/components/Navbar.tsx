"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path: string) =>
    `tracking-[0.22em] uppercase text-[11px] text-white transition duration-[1200ms] ${
      pathname === path
        ? "opacity-100"
        : "opacity-55 hover:opacity-100"
    }`;

  return (

    <>

      {/* NAVBAR */}

      <header className="fixed top-3 left-1/2 z-50 w-[94%] -translate-x-1/2 md:top-4 md:w-[96%]">

        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#8e8882]/70 px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md md:px-10 md:py-6">

          {/* LOGO */}

          <Link
            href="/"
            className="max-w-[120px] text-[9px] uppercase tracking-[0.28em] leading-[1.5] text-white md:max-w-none md:text-[10px] md:tracking-[0.35em]"
          >
            SCHEHEREZADE LIFE
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-8 md:flex">


            <Link
              href="/about"
              className={linkStyle("/about")}
            >
              About
            </Link>

            <Link
              href="/shop"
              className={linkStyle("/shop")}
            >
              Shop
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[4px] md:hidden"
          >

            <span className="h-[1px] w-5 bg-white opacity-90"></span>
            <span className="h-[1px] w-5 bg-white opacity-90"></span>

          </button>

        </div>

      </header>

    {/* MOBILE MENU */}

<div
  className={`fixed inset-0 z-[100] transition-all duration-700 md:hidden ${
    menuOpen
      ? "pointer-events-auto"
      : "pointer-events-none"
  }`}
>

  {/* DARK OVERLAY */}

  <div
    onClick={() => setMenuOpen(false)}
    className={`absolute inset-0 bg-black/25 backdrop-blur-[2px] transition-opacity duration-700 ${
      menuOpen
        ? "opacity-100"
        : "opacity-0"
    }`}
  />

  {/* SIDE PANEL */}

  <div
    className={`absolute left-0 top-0 h-full w-[82%] bg-[#ece7e1] shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out ${
      menuOpen
        ? "translate-x-0"
        : "-translate-x-full"
    }`}
  >

    {/* TOP */}

    <div className="flex items-center justify-between px-7 pt-7">

      <p className="text-[10px] uppercase tracking-[0.28em] text-black/40">
        Navigation
      </p>

      <button
        onClick={() => setMenuOpen(false)}
        className="text-[1.5rem] text-black/50"
      >
        ×
      </button>

    </div>

    {/* CONTENT */}

    <div className="flex h-full flex-col justify-between px-7 pb-10 pt-14">

      {/* LINKS */}

      <div className="flex flex-col gap-7">

        <Link
  href="/"
  onClick={() => setMenuOpen(false)}
  className="group flex items-center gap-3 text-[3.2rem] leading-[0.9] tracking-[-0.05em] text-[#1d1d1d] transition-all duration-500 hover:translate-x-[6px]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>

  <span className="h-[1px] w-0 bg-black/40 transition-all duration-500 group-hover:w-8"></span>

  Home



</Link>

        <Link
  href="/about"
  onClick={() => setMenuOpen(false)}
  className="group flex items-center gap-3 text-[3.2rem] leading-[0.9] tracking-[-0.05em] text-[#1d1d1d] transition-all duration-500 hover:translate-x-[6px]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>

  <span className="h-[1px] w-0 bg-black/40 transition-all duration-500 group-hover:w-8"></span>

  About

</Link>

        <Link
  href="/shop"
  onClick={() => setMenuOpen(false)}
  className="group flex items-center gap-3 text-[3.2rem] leading-[0.9] tracking-[-0.05em] text-[#1d1d1d] transition-all duration-500 hover:translate-x-[6px]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>

  <span className="h-[1px] w-0 bg-black/40 transition-all duration-500 group-hover:w-8"></span>

  Shop

</Link>

      </div>

      {/* BOTTOM ATMOSPHERE */}

     <div className="flex items-center justify-center py-6">

  <img
    src="/images/logo-transparent.png"
    alt="Scheherezade Life"
    className="w-[220px] opacity-80 brightness-[0.35]"
  />

</div>

    </div>

  </div>

</div>
    </>

  );
}