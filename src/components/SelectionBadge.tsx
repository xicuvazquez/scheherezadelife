import Link from "next/link";

export default function SelectionBadge() {
  return (
    <Link
      href="/shop/scheherezade-selection"
      aria-label="Ver Scheherezade Selection"
      title="Scheherezade Selection"
      className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-[#f5f1eb]/85 p-1.5 shadow-sm backdrop-blur-sm transition hover:bg-[#f5f1eb]"
    >
      <img
        src="/favicon.ico"
        alt="Scheherezade Selection"
        className="h-full w-full rounded-full object-contain"
      />
    </Link>
  );
}