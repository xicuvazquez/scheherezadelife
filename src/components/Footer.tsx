import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-0 border-t border-black/5 bg-[#f5f1ea]">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 md:flex-row md:justify-between md:px-12 md:py-24">
        
        {/* Left */}
        <div className="max-w-sm">
          <h2 className="font-serif text-3xl tracking-[-0.03em] text-black">
            Scheherezade Life
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-black/55">
            Objects shaped by silence, light and time.
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-col gap-4 text-sm text-black/70">
          <Link
            href="/shop"
            className="transition duration-700 hover:opacity-50"
          >
            Shop
          </Link>

          <Link
            href="/journal"
            className="transition duration-700 hover:opacity-50"
          >
            Journal
          </Link>

          <Link
            href="/about"
            className="transition duration-700 hover:opacity-50"
          >
            About
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 text-sm text-black/70">
          <a
            href="https://instagram.com"
            target="_blank"
            className="transition duration-700 hover:opacity-50"
          >
            Instagram
          </a>

          <a
            href="mailto:hello@scheherezadelife.com"
            className="transition duration-700 hover:opacity-50"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}